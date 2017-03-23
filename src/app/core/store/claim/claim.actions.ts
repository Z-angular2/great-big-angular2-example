import { Action } from '@ngrx/store';

import { Claim } from './claim.model';
import * as entityActions from '../entity/entity.actions';
import { actions } from '../entity/entity.actions';

// Special actions
export class ReorderRebuttals implements Action {
  type = 'ReorderRebuttals';
  constructor(public payload: any) { }
}
// Entity actions
export * from '../entity/entity.actions';

// Action types
export type ActionClasses = entityActions.ActionClasses<Claim>;
