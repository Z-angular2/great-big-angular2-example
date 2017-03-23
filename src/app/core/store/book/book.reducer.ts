import { createSelector } from 'reselect';

import { Book, initialBook } from './book.model';
import * as collection from '../collection/collection.actions';
import { Entities, initialEntities } from '../entity/entity.model';
import { slices } from '../util';
import * as functions from '../entity/entity.functions';
import { typeFor } from '../util';
import { actions, ActionClasses } from './book.actions';

export function reducer(state: Entities<Book> = initialEntities<Book>({}, slices.BOOK, actions, initialBook),
  action: ActionClasses<Book>): Entities<Book> {
  console.log(`${action.type}`);
  switch (action.type) {
    case typeFor(slices.SEARCH, actions.LOAD_SUCCESS):
    case typeFor(slices.COLLECTION, actions.LOAD_SUCCESS):
      return functions.unionEntities(state, action);
    case typeFor(slices.BOOK, actions.LOAD):
      return functions.addLoadEntity<Book>(state, <any>action);
    case typeFor(slices.BOOK, actions.SELECT):
      return functions.selectEntity<Book>(state, <any>action);
    default: {
      return state;
    }
  }
}

/**
 * Because the data structure is defined within the reducer it is optimal to
 * locate our selector functions at this level. If store is to be thought of
 * as a database, and reducers the tables, selectors can be considered the
 * queries into said database. Remember to keep your selectors small and
 * focused so they can be combined and composed to fit each particular
 * use-case.
 */

export const getEntities = (state: Entities<Book>) => state.entities;

export const getIds = (state: Entities<Book>) => state.ids;

export const getSelectedId = (state: Entities<Book>) => state.selectedEntityId;

export const getSelected = createSelector(getEntities, getSelectedId, (entities, selectedId) => {
  return entities[selectedId];
});

export const getAll = createSelector(getEntities, getIds, (entities, ids) => {
  return ids.map(id => entities[id]);
});
