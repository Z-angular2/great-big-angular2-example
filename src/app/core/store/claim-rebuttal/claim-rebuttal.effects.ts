import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

import { ClaimRebuttal } from './claim-rebuttal.model';
import * as actions from './claim-rebuttal.actions';
import { slices } from '../util';
import { DataService } from '../../services/data.service';
import * as functions from '../entity/entity.functions';

@Injectable()
export class ClaimRebuttalEffects {
  @Effect()
  protected load$ = functions.load$(this.action$, slices.CLAIM_REBUTTAL, actions, this.dataService);

  constructor(
    private store: Store<ClaimRebuttal>,
    private action$: Actions,
    protected dataService: DataService
  ) { }
}

