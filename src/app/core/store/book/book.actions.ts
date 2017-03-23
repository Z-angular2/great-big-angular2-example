import { Action } from '@ngrx/store';

import { Book } from './book.model';
import * as entityActions from '../entity/entity.actions';
import { type } from '../util';

// Special actions

// Entity actions
export * from '../entity/entity.actions';

// Action types
export type Actions = entityActions.ActionClasses<Book>;




// import { Action } from '@ngrx/store';
// import { type } from '../util';

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 *
 * The 'type' utility function coerces strings into string
 * literal types and runs a simple check to guarantee all
 * action types in the application are unique.
 */
// export const ActionTypes = {
//   SEARCH: type('[Book] Search'),
//   SEARCH_COMPLETE: type('[Book] SearchComplete'),
//   LOAD: type('[Book] Load'),
//   SELECT: type('[Book] Select'),
// };


/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 *
 * See Discriminated Unions: https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions
 */
// export class SearchAction implements Action {
//   type = ActionTypes.SEARCH;

//   constructor(public payload: string) { }
// }

// export class SearchComplete implements Action {
//   type = ActionTypes.SEARCH_COMPLETE;

//   constructor(public payload: Book[]) { }
// }


/**
 * Exxport a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
// export type Actions
//   = SearchAction
//   | SearchComplete;
