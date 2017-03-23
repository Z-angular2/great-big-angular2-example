import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

import { Crisis } from './crisis.model';
import * as actions from './crisis.actions';
import { slices } from '../util';
import { DataService } from '../../services/data.service';
import * as functions from '../entity/entity.functions';

@Injectable()
export class CrisisEffects {
  @Effect()
  protected load$ = functions.load$(this.action$, slices.CRISIS, actions, this.dataService);
  @Effect()
  protected update$ = functions.update$(this.action$, slices.CRISIS, actions, this.store, this.dataService);

  constructor(
    private store: Store<Crisis>,
    private action$: Actions,
    protected dataService: DataService
  ) { }
}

