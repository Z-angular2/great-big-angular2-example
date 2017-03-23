import { createSelector } from 'reselect';

import { Crisis, initialCrisis } from './crisis.model';
import { Entities, initialEntities } from '../entity/entity.model';
import { slices } from '../util';
import * as functions from '../entity/entity.functions';
import { typeFor } from '../util';
import { actions, ActionClasses } from './crisis.actions';

export function reducer(state: Entities<Crisis> = initialEntities<Crisis>({}, slices.CRISIS, actions, initialCrisis),
  action: ActionClasses<Crisis>): Entities<Crisis> {
  switch (action.type) {
    case typeFor(slices.CRISIS, actions.ADD):
    case typeFor(slices.CRISIS, actions.ADD_SUCCESS):
    case typeFor(slices.CRISIS, actions.LOAD):
    case typeFor(slices.CRISIS, actions.LOAD_SUCCESS):
      // return state.addLoadEntity(action);
      return functions.addLoadEntity<Crisis>(state, <any>action);
    case typeFor(slices.CRISIS, actions.UPDATE):
    case typeFor(slices.CRISIS, actions.UPDATE_SUCCESS):
      // return state.update(action);
      return functions.update<Crisis>(state, <any>action);
    case typeFor(slices.CRISIS, actions.DELETE):
      // return state.deleteEntity(action);
      return functions.deleteEntity<Crisis>(state, <any>action);
    case typeFor(slices.CRISIS, actions.SELECT):
      // return state.selectEntity(action);
      return functions.selectEntity<Crisis>(state, <any>action);
    default:
      return state;
  }
};

export const getEntities = (state: Entities<Crisis>) => state.entities;

export const getIds = (state: Entities<Crisis>) => state.ids;

export const getSelectedId = (state: Entities<Crisis>) => state.selectedEntityId;

export const getSelected = createSelector(getEntities, getSelectedId, (entities, selectedId) => {
  return entities[selectedId];
});

