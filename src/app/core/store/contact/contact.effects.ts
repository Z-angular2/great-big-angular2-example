import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

import { Contact } from './contact.model';
import * as actions from './contact.actions';
import { slices } from '../util';
import { DataService } from '../../services/data.service';
import * as functions from '../entity/entity.functions';

@Injectable()
export class ContactEffects {
  @Effect()
  protected load$ = functions.load$(this.action$, slices.CONTACT, actions, this.dataService);
  @Effect()
  protected update$ = functions.update$(this.action$, slices.CONTACT, actions, this.store, this.dataService);

  constructor(
    private store: Store<Contact>,
    private action$: Actions,
    protected dataService: DataService
  ) { }
}

