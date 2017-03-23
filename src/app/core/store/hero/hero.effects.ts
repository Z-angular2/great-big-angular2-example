import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

import { Hero } from './hero.model';
import * as actions from './hero.actions';
import { slices } from '../util';
import { DataService } from '../../services/data.service';
import * as functions from '../entity/entity.functions';

@Injectable()
export class HeroEffects {
  @Effect()
  protected load$ = functions.load$(this.action$, slices.HERO, actions, this.dataService);
  @Effect()
  protected update$ = functions.update$(this.action$, slices.HERO, actions, this.store, this.dataService);

  constructor(
    private store: Store<Hero>,
    private action$: Actions,
    protected dataService: DataService
  ) { }
}

