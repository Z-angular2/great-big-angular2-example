import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

import { Note } from './note.model';
import * as actions from './note.actions';
import { slices } from '../util';
import { DataService } from '../../services/data.service';
import * as functions from '../entity/entity.functions';

@Injectable()
export class NoteEffects {
  @Effect()
  protected load$ = functions.load$(this.action$, slices.NOTE, actions, this.dataService);
  @Effect()
  protected update$ = functions.update$(this.action$, slices.NOTE, actions, this.store, this.dataService);

  constructor(
    private store: Store<Note>,
    private action$: Actions,
    protected dataService: DataService
  ) { }
}

