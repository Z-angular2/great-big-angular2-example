import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

import { Entities } from './entity.model';
import * as entityActions from '../entity/entity.actions';
import { EntityAction } from './entity.actions';
import { typeFor } from '../util';
import { actions, ActionClasses } from './entity.actions';

/*
 * Delete the property from state.entities, the element from state.ids and
 * set selectedEntityId to null if it was the deleted one
 */
export function deleteEntity<T>(state: Entities<T>, action: entityActions.Update<T>): Entities<T> {
  let entities = Object.assign({}, state.entities);
  delete entities[action.payload.id];
  let selectedEntityId = state.ids.indexOf(state.selectedEntityId) > -1 ? null : state.selectedEntityId;
  let i = state.ids.findIndex(id => id == action.payload.id);
  let ids = [...state.ids.slice(0, i), ...state.ids.slice(i + 1)];
  return Object.assign({}, state, { entities, ids, selectedEntityId });
};

export function update<T>(state: Entities<T>, action: entityActions.Update<T>): Entities<T> {
  let entities = Object.assign({}, state.entities);
  entities[action.payload.id] = reduceOne(state, entities[action.payload.id], action);
  return Object.assign({}, state, {
    ids: Object.keys(entities),
    entities: entities
  });
};

export function updateEach<T>(state: Entities<T>, action: any): Entities<T> {
  let id: string;
  let entities = Object.assign({}, state.entities);
  for (id in entities) {
    entities[id] = Object.assign(entities[id], action.payload);
  }
  return Object.assign({}, state, {
    entities: entities
  });
};

export function addLoadEntity<T>(state: Entities<T>, action: entityActions.Add<T> | entityActions.Load<T>): Entities<T> {
  let entities = Object.assign({}, state.entities);
  entities[action.payload.id] = reduceOne(state, null, action);
  return Object.assign({}, state, {
    ids: Object.keys(entities),
    entities: entities,
    loaded: true,
    loading: false,
  });
};

export function selectEntity<T>(state: Entities<T>, action: entityActions.Select<T>): Entities<T> {
  return Object.assign({}, state, {
    selectedEntityId: action.payload.id || action.payload
  });
};

export function selectNext<T>(state: Entities<T>, action: entityActions.SelectNext<T>): Entities<T> {
  let ix = 1 + state.ids.indexOf(state.selectedEntityId);
  if (ix >= state.ids.length) { ix = 0; }
  return Object.assign({}, state, { selectedEntityId: state.ids[ix] });
};

export function unionEntities<T>(state: Entities<T>, action: entityActions.LoadSuccess<T>) {
  const entities = action.payload;
  let newEntities = entities.filter(entity => !state.entities[entity.id]);

  const newEntityIds = newEntities.map(entity => entity.id);
  newEntities = newEntities.reduce((entities: { [id: string]: T }, entity: T) => {
    return Object.assign(entities, {
      [entity['id']]: entity
    });
  }, {});

  return Object.assign({}, state, {
    ids: [...state.ids, ...newEntityIds],
    entities: Object.assign({}, state.entities, newEntities),
    selectedEntityId: state.selectedEntityId
  });
}

export function reduceOne<T>(state: Entities<T>, entity: T = null, action: EntityAction<T>): T {
  switch (action.type) {

    case typeFor(state.entityName, actions.ADD):
      return Object.assign({}, state.initialEntity, action.payload, { dirty: true });
    case typeFor(state.entityName, actions.UPDATE):
      if (entity['id'] == action.payload.id) {
        return Object.assign({}, entity, action.payload, { dirty: true });
      } else {
        return entity;
      }
    case typeFor(state.entityName, actions.ADD_SUCCESS):
    case typeFor(state.entityName, actions.LOAD_SUCCESS):
      return Object.assign({}, state.initialEntity, action.payload, { dirty: false });
    case typeFor(state.entityName, actions.UPDATE_SUCCESS):
      if (entity['id'] == action.payload.id) {
        return Object.assign({}, entity, action.payload, { dirty: false });
      } else {
        return entity;
      }
    default:
      return entity;
  }
};

/**
 *
 * Effects
 *
 */

export function load$(action$, entityName, actions, dataService) {
  return action$
    .ofType(typeFor(entityName, actions.LOAD))
    .startWith(new entityActions.Load(entityName, null))
    .switchMap(() =>
      dataService.getEntities(entityName)
        .mergeMap(fetchedEntities => Observable.from(fetchedEntities))
        .map((fetchedEntity) => new entityActions.LoadSuccess(entityName, fetchedEntity))  // one action per entity
        .catch(() => Observable.of(new entityActions.AddUpdateFail(entityName, null)))
    );
}

export function update$(action$, entityName, actions, store, dataService) {
  // console.log(`${typeFor(entityName, actions.UPDATE)} ${typeFor(entityName, actions.ADD)}`);
  // console.log(action$.ofType)
  return action$
    .ofType(typeFor(entityName, actions.UPDATE), typeFor(entityName, actions.ADD))
    .withLatestFrom(store.select(entityName))
    .switchMap(([{}, entities]) =>  // first element is action, but it isn't used
      Observable
        .from((<any>entities).ids)
        .filter((id: string) => (<any>entities).entities[id].dirty)
        .switchMap((id: string) => dataService.addOrUpdate((<any>entities).entities[id], entityName))
        .map((responseEntity) => new entityActions.UpdateSuccess(entityName, responseEntity))
    );
}
