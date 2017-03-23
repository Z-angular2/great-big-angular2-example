import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/let';
import { Observable } from 'rxjs/Observable';

import { Rebuttal, initialRebuttal } from './rebuttal.model';
import { Entities, initialEntities } from '../entity/entity.model';
import { actions, ActionClasses } from './rebuttal.actions';
import { slices } from '../util';
import * as functions from '../entity/entity.functions';
import { typeFor } from '../util';

export function reducer(state: Entities<Rebuttal> = initialEntities<Rebuttal>({},
  slices.REBUTTAL, actions, initialRebuttal), action: ActionClasses<Rebuttal>): Entities<Rebuttal> {

  switch (action.type) {
    case typeFor(slices.REBUTTAL, actions.ADD):
    case typeFor(slices.CLAIM, actions.ADD_SUCCESS):
    case typeFor(slices.CLAIM, actions.LOAD_SUCCESS):
      return functions.addLoadEntity<Rebuttal>(state, <any>action);
    case typeFor(slices.CLAIM, actions.UPDATE):
      return functions.update<Rebuttal>(state, <any>action);
    default: {
      return state;
    }
  }
  // checkout https://github.com/omnidan/redux-undo for undo features

}

export const getEntities = (state: Entities<Rebuttal>) => {
  return state.entities;
}

export const getIds = (state: Entities<Rebuttal>) => state.ids;
