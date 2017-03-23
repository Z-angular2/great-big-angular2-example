import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

import { Claim } from './claim.model';
import * as actions from './claim.actions';
import { slices } from '../util';
import { DataService } from '../../services/data.service';
import * as functions from '../entity/entity.functions';

@Injectable()
export class ClaimEffects {
  @Effect()
  protected load$ = functions.load$(this.action$, slices.CLAIM, actions, this.dataService);

  constructor(
    private store: Store<Claim>,
    private action$: Actions,
    protected dataService: DataService
  ) { }
}

