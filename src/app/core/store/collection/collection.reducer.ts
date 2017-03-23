import { createSelector } from 'reselect';
import { IDs, initialIDs } from '../id/id.model';
import { actions, ActionClasses } from './collection.actions';
import { slices, typeFor } from '../util';
import * as functions from '../id/id.functions';

export function reducer(state = initialIDs({}, slices.COLLECTION, actions),
  action: ActionClasses): IDs {
  switch (action.type) {
    case typeFor(slices.COLLECTION, actions.LOAD):
      return functions.addLoadID(state, action);
    case typeFor(slices.COLLECTION, actions.LOAD_SUCCESS):
      return functions.updateIDs(state, action);
    case typeFor(slices.COLLECTION, actions.ADD_SUCCESS):
    case typeFor(slices.COLLECTION, actions.DELETE_FAIL):
      functions.addID(state, action);
    case typeFor(slices.COLLECTION, actions.DELETE_SUCCESS):
    case typeFor(slices.COLLECTION, actions.ADD_FAIL):
      functions.deleteID(state, action);
    default: {
      return state;
    }
  }
}


export const getLoaded = (state: IDs) => state.loaded;

export const getLoading = (state: IDs) => state.loading;

export const getIds = (state: IDs) => state.ids;
