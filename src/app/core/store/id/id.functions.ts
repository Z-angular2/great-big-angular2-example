import { of } from 'rxjs/observable/of';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { empty } from 'rxjs/observable/empty';

import { IDs } from './id.model';
import * as idActions from '../id/id.actions';
import { IDAction } from './id.actions';
import { typeFor } from '../util';

/**
 * Reducers
 */

export function addLoadID(state: IDs, action: idActions.Add | idActions.Load): IDs {
  return Object.assign({}, state, {
    loading: true,
  });
};

export function updateIDs(state: IDs, action: idActions.Add | idActions.Load): IDs {
  const entities = action.payload;
  return Object.assign({}, state, {
    loaded: true,
    loading: false,
    ids: entities.map(entity => entity.id)
  });
};

export function addID(state: IDs, action: idActions.Add | idActions.Load): IDs {
  const id = action.payload;
  if (state.ids.indexOf(id.id) > -1) {
    return state;
  }

  return Object.assign({}, state, {
    ids: [...state.ids, id.id]
  });
};

export function deleteID(state: IDs, action: idActions.DeleteSuccess
  | idActions.AddFail): IDs {
  const entity = action.payload;

  return Object.assign({}, state, {
    ids: state.ids.filter(id => id !== entity.id)
  });
};


/**
 * Effects
 */

export function load$(actions$, sliceName, actions, dataService, dataGetter) {
  return actions$
    .ofType(typeFor(sliceName, actions.LOAD))
    .debounceTime(300)
    .map(toPayload)
    .switchMap(query => {
      if (query === '') {
        return empty();
      }

      const nextSearch$ = actions$.ofType(typeFor(sliceName, actions.LOAD)).skip(1);

      return dataService[dataGetter](query)
        .takeUntil(nextSearch$)
        .map(entities => new idActions.LoadSuccess(sliceName, entities))
        .catch(() => of(new idActions.LoadSuccess(sliceName, [])));
    });
}

export function add$(actions$, sliceName, actions, dataInserter) {
  return actions$
    .ofType(typeFor(sliceName, actions.ADD))
    .map(toPayload)
    .mergeMap(entity =>
      dataInserter(sliceName, [entity])
        .map(() => new idActions.AddSuccess(sliceName, entity))
        .catch(() => of(new idActions.AddFail(sliceName, entity)))
    );
}

export function delete$(actions$, sliceName, actions, dataDeleter) {
  return actions$
    .ofType(typeFor(sliceName, actions.DELETE))
    .map(toPayload)
    .mergeMap(entity =>
      dataDeleter(sliceName, entity)
        .map(() => new idActions.DeleteSuccess(sliceName, entity))
        .catch(() => of(new idActions.DeleteFail(sliceName, entity)))
    );
}


