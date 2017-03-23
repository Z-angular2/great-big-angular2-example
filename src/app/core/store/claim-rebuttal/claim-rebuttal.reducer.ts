import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/let';
import { Observable } from 'rxjs/Observable';
let uuid = require('uuid');

import { ClaimRebuttal, initialClaimRebuttal } from './claim-rebuttal.model';
import { Entities, initialEntities } from '../entity/entity.model';
import * as functions from '../entity/entity.functions';
import { slices } from '../util';
import { typeFor } from '../util';
import { actions, ActionClasses } from './claim-rebuttal.actions';


export function reducer(state: Entities<ClaimRebuttal> = initialEntities<ClaimRebuttal>({}, slices.CLAIM_REBUTTAL, actions, initialClaimRebuttal), action: ActionClasses<ClaimRebuttal>): Entities<ClaimRebuttal> {
  let entities = {};
  let id: string;
  let edits = {};

  switch (action.type) {
    case typeFor(slices.CLAIM_REBUTTAL, actions.DELETE):
      var crid = Object.keys(entities).find(crid => {
        return state.entities[crid].claimId == (<any>action).payload.claim.id &&       // TODO: fix id string/number problem
          state.entities[crid].rebuttalId == (<any>action).payload.rebuttal.id;  // TODO: fix this typecast
      })
      if (crid) {
        edits = state.entities[crid];
      }
      break;
    default:
      edits = {};
  }
  action.payload && (action.payload = Object.assign(action.payload, edits));

  switch (action.type) {
    case typeFor(slices.CLAIM_REBUTTAL, actions.ADD):
    case typeFor(slices.CLAIM_REBUTTAL, actions.ADD_SUCCESS):
    case typeFor(slices.CLAIM_REBUTTAL, actions.LOAD_SUCCESS):
      return functions.addLoadEntity<ClaimRebuttal>(state, <any>action);
    case typeFor(slices.CLAIM_REBUTTAL, actions.DELETE):
      return functions.deleteEntity<ClaimRebuttal>(state, <any>action);
    case typeFor(slices.CLAIM_REBUTTAL, actions.DELETE):
    case typeFor(slices.CLAIM_REBUTTAL, actions.UPDATE_SLICE):
      entities = Object.assign({}, state.entities);
      for (let i = 0; i < action.payload.rebuttalIds.length; i++) {
        let cr = claimRebuttalFor(state.entities, action.payload.claim.id, action.payload.rebuttalIds[i]);
        entities[cr.id].sortOrder = i;
      }
      return Object.assign({}, state, { entities });  // we don't care about order of entire claimRebuttal array so don't update ids
    default: {
      return state;
    }
  }

  function claimRebuttalFor(entities, claimId, rebuttalId) {

    for (let id in entities) {
      if (entities[id].claimId == claimId && entities[id].rebuttalId == rebuttalId) {  // TODO: one of these is a string and one is a number. figure that out

        return entities[id];
      }
    }
  }
};

export const getEntities = (state: Entities<ClaimRebuttal>) => state.entities;

export const getIds = (state: Entities<ClaimRebuttal>) => state.ids;
