import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { SortablejsOptions } from 'angular-sortablejs';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/takeLast';
import 'rxjs/add/operator/combineLatest';
import { combineLatest } from 'rxjs/observable/combineLatest';
import { Router, ActivatedRoute } from '@angular/router';

import * as fromRoot from '../core/store';
import { BerniePageLayout } from '../core/store/layout/layout.model';
import { Claim, initialClaim } from '../core/store/claim/claim.model';
import { Rebuttal, initialRebuttal } from '../core/store/rebuttal/rebuttal.model';
import { ClaimRebuttal, initialClaimRebuttal } from '../core/store/claim-rebuttal/claim-rebuttal.model';
import * as entityActions from '../core/store/entity/entity.actions';
import * as branchActions from '../core/store/layout/layout.actions';
import { slices } from '../core/store/util';

let uuid = require('uuid');

@Component({
  selector: 'app-bernie',
  templateUrl: './bernie.page.html',
  styleUrls: ['./bernie.page.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BerniePage {
  page$: Observable<BerniePageLayout>;
  claims$: Observable<Claim[]>;
  rebuttals$: Observable<Rebuttal[]>;
  loading$: Observable<boolean>;
  expanded: boolean;
  editable: boolean;
  pageSub: Subscription;
  claimsSub: Subscription;

  private subscription: any;
  options: SortablejsOptions = {
    disabled: false
  };

  constructor(private store: Store<fromRoot.RootState>,
    private route: ActivatedRoute, ) {
    this.page$ = store.select(fromRoot.getBerniePageState);
    this.claims$ = store.select(fromRoot.getDeepClaims);
    this.loading$ = store.select(fromRoot.getSearchLoading);
    this.pageSub = this.page$.subscribe((page) => {
      this.expanded = page.expanded;
      this.editable = page.editable;
    });

    // this.claims$.do(claims => console.log(claims.length), error => console.log('error'), () => console.log('complete'));
    // this.claims$.takeLast(1).do(claims => console.log(claims.length), error => console.log('error'), () => console.log('complete'));

    // this.claims$.subscribe(claim => {
    //   console.log('claims')
    // });

    // this.claimsSubscription = combineLatest(
    //   this.claims$,
    //   this.route.params)
    //   .subscribe(([claims, params]) => {
    //     let id = +params['claimId'];
    //     if (id && claims && claims.length > 0 && claims.find(claim => claim.id === id)) {
    //       console.log('found');
    //     }
    //   });
  }

  toggleEditable() {
    this.store.dispatch(new branchActions.Update(slices.LAYOUT, ['berniePage', 'editable'], !this.editable));
  }

  toggleExpanded() {
    this.store.dispatch(new branchActions.Update(slices.LAYOUT, ['berniePage', 'expanded'], !this.expanded));
    this.store.dispatch(new entityActions.UpdateEach(slices.CLAIM, { expanded: !this.expanded }));
  }

  addClaim() {
    let newClaim = prompt("New claim");
    if (newClaim) {
      this.store.dispatch(new entityActions.Add(slices.CLAIM, {
        id: uuid.v1(),
        name: newClaim
      }));

      // this.store.dispatch(new claimActions.Add(Object.assign({}, initialClaim, {
      //   id: uuid.v1(),
      //   name: newClaim
      // }), slices.CLAIM))
    }
  }

  saveAll() {
    alert("Add save here");
  }

  addRebuttal(claim: Claim) {
    // claims & rebuttals have a many-to-many relationship
    // to create a new, blank rebuttal for this claim
    // create an instance of rebuttal and an instance of the join record claimRebuttal
    // and dispatch actions to each respective reducer
    let newRebuttal = initialRebuttal({ id: uuid.v1(), editing: true, isNew: true });
    let newClaimRebuttal = initialClaimRebuttal({ id: uuid.v1(), claimId: claim.id, rebuttalId: newRebuttal.id });
    this.store.dispatch(new entityActions.Add(slices.REBUTTAL, newRebuttal));
    this.store.dispatch(new entityActions.Add(slices.REBUTTAL, newClaimRebuttal))
  }
  toggleRebuttals(claim: Claim) {
    this.store.dispatch(new entityActions.Add(slices.CLAIM, { id: claim.id, expanded: !claim.expanded }));
  }

  cancelRebuttal({claimRebuttalId, rebuttal}) {
    if (rebuttal.isNew) {
      // TODO: delete the rebuttal record if necessary
      this.store.dispatch(new entityActions.Delete(slices.CLAIM_REBUTTAL, claimRebuttalId));
    } else {
      this.store.dispatch(new entityActions.Update<Rebuttal>(slices.REBUTTAL, { id: rebuttal.id, editing: false }));
    }
  }

  saveRebuttal(newRebuttal) {
    this.store.dispatch(new entityActions.Update<Rebuttal>(slices.REBUTTAL, Object.assign({}, newRebuttal, { editing: false })));
  }

  makeRebuttalEditable(rebuttal: Rebuttal) {
    this.store.dispatch(new entityActions.Update<Rebuttal>(slices.REBUTTAL, { id: rebuttal.id, editing: true }));
  }

  reorderRebuttals(claim, event) {
    let rebuttalIds = Array.prototype.slice.call(event.srcElement.children).filter(li => li.id).map(li => li.id);
    this.store.dispatch(new entityActions.Update(slices.CLAIM, Object.assign({}, { id: claim.id, rebuttalsReordered: true, rebuttalIds })));
    this.store.dispatch(new entityActions.UpdateSlice(slices.CLAIM_REBUTTAL, { ids: rebuttalIds.map((id, index) => index) }));
  }

  reorderClaims(event) {
    // TODO: There's gotta be a better way
    // This is called when the claims are reordered AND when the rebuttals for a claim are reordered.
    // We need to ignore the second of these

    try {
      let claimIds = Array.prototype.slice.call(event.srcElement.children).map(li => li.children[0].children[0].children[0].id);
      this.store.dispatch(new branchActions.Update(slices.CLAIM, ['ids'], claimIds));
    } catch (err) {

    }
  }

  ngOnDestroy() {
    this.pageSub && this.pageSub.unsubscribe();
    this.claimsSub && this.claimsSub.unsubscribe();
  }
}
