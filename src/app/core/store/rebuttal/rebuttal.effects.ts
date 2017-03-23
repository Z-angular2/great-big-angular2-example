import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

import { Rebuttal } from './rebuttal.model';
import * as actions from './rebuttal.actions';
import { slices } from '../util';
import { DataService } from '../../services/data.service';
import * as functions from '../entity/entity.functions';

@Injectable()
export class RebuttalEffects {
  @Effect()
  protected load$ = functions.load$(this.action$, slices.REBUTTAL, actions, this.dataService);

  constructor(
    private store: Store<Rebuttal>,
    private action$: Actions,
    protected dataService: DataService
  ) { }
}

