import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/toArray';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/startWith';

import * as entityActions from './entity.actions';
import * as branchActions from '../branch/branch.actions';
import { typeFor } from '../util';
import { DataService } from '../../services/data.service';

/**
 * Call these methods in concrete Effects classes. Assign the return values
 * to observables decorated with @Effect()
 */
// @Injectable()
// export class EntityEffects<T> {
//   constructor(
//     private store: Store<T>,
//     private dataService: DataService
//   ) { }

//   load$(action$, entityName, actions, branch) {
//     return action$
//       .ofType(typeFor(entityName, actions.ActionNames.LOAD))
//       .startWith(new entityActions.Load(entityName, null))
//       .switchMap(() =>
//         this.dataService.getEntities(branch)
//           .mergeMap(fetchedEntities => Observable.from(fetchedEntities))
//           .map((fetchedEntity) => new entityActions.LoadSuccess(entityName, fetchedEntity))  // one action per entity
//           .catch(() => Observable.of(new entityActions.AddUpdateFail(entityName, null)))
//       );
//   }

//   update$(action$, entityName, actions, branch, store) {
//     return action$
//       .ofType(typeFor(entityName, actions.ActionNames.UPDATE), typeFor(entityName, actions.ActionNames.ADD))
//       .withLatestFrom(store.select(branch))
//       .switchMap(([{}, entities]) =>  // first element is action, but it isn't used
//         Observable
//           .from((<any>entities).ids)
//           .filter((id: string) => (<any>entities).entities[id].dirty)
//           .switchMap((id: string) => this.dataService.addOrUpdate((<any>entities).entities[id], entityName))
//           .map((responseEntity) => new entityActions.UpdateSuccess(entityName, responseEntity))
//       );
//   }
// }
