import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { empty } from 'rxjs/observable/empty';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/toArray';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/startWith';
import { of } from 'rxjs/observable/of';

import * as idActions from './id.actions';
import * as branchActions from '../branch/branch.actions';
import { typeFor } from '../util';
import { DataService } from '../../services/data.service';

/**
 * Call these methods in concrete Effects classes. Assign the return values
 * to observables decorated with @Effect()
 */
// @Injectable()
// export class IDEffects {

  // load$(action$, sliceName, actions, slice, query, dataGetter) {
  //   return action$
  //     .ofType(typeFor(sliceName, actions.ActionNames.LOAD))
  //     .startWith(new idActions.Load(sliceName, null))
  //     .switchMap(() =>
  //       dataGetter(slice, query)
  //         .mergeMap(fetchedIDs => Observable.from(fetchedIDs))
  //         .map((fetchedID) => new idActions.LoadSuccess(sliceName, fetchedID))  // one action per id
  //         .catch(() => Observable.of(new idActions.LoadFail(sliceName, null)))
  //     );
  // }


  // load$(actions$, sliceName, actions, dataGetter) {
  //   return actions$
  //     .ofType(typeFor(sliceName, actions.ActionNames.SEARCH))
  //     .debounceTime(300)
  //     .map(toPayload)
  //     .switchMap(query => {
  //       if (query === '') {
  //         return empty();
  //       }

  //       const nextSearch$ = actions$.ofType(typeFor(sliceName, actions.ActionNames.SEARCH)).skip(1);

  //       return dataGetter(query)
  //         .takeUntil(nextSearch$)
  //         .map(entities => new idActions.LoadSuccess(sliceName, entities))
  //         .catch(() => of(new idActions.LoadSuccess(sliceName, [])));
  //     });
  // }

  // add$(actions$, sliceName, actions, dataInserter) {
  //   return actions$
  //     .ofType(typeFor(sliceName, actions.ActionNames.Add))
  //     .map(toPayload)
  //     .mergeMap(entity =>
  //       dataInserter(sliceName, [entity])  // MADE THIS SINGLE INSTEAD OF PLURAL
  //         .map(() => new idActions.AddSuccess(sliceName, entity))
  //         .catch(() => of(new idActions.AddFail(sliceName, entity)))
  //     );
  // }

  // delete$(actions$, sliceName, actions, dataDeleter) {
  //   return actions$
  //     .ofType(typeFor(sliceName, actions.ActionNames.Delete))
  //     .map(toPayload)
  //     .mergeMap(entity =>
  //       dataDeleter(sliceName, entity)
  //         .map(() => new idActions.DeleteSuccess(sliceName, entity))
  //         .catch(() => of(new idActions.DeleteFail(sliceName, entity)))
  //     );
  // }


// }
