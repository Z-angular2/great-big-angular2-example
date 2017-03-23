import { createSelector } from 'reselect';

import * as book from '../book/book.actions';
import { IDs, initialIDs } from '../id/id.model';
import { slices } from '../util';
import { actions, ActionClasses } from '../id/id.actions';
import { typeFor } from '../util';
import * as functions from '../id/id.functions';

// export interface State {
//   ids: string[];
//   loading: boolean;
//   query: string;
// };

// const initialState: State = {
//   ids: [],
//   loading: false,
//   query: ''
// };

export function reducer(state = initialIDs({}, slices.SEARCH, actions), action: ActionClasses): IDs {
  switch (action.type) {
    case typeFor(slices.SEARCH, actions.LOAD):
      return functions.addLoadID(state, action);
    case typeFor(slices.SEARCH, actions.LOAD_SUCCESS):
      return functions.updateIDs(state, action);
    default: {
      return state;
    }
  }
}

export const getIds = (state: IDs) => state.ids;

export const getLoading = (state: IDs) => state.loading;
