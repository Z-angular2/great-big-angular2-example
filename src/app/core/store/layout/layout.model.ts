// import { getActionTypes } from '../util';
import { Branch } from '../branch/branch.model';
import { slices } from '../util';

export interface BooksPageLayout {
  showSidenav: boolean;
  query: string
};

export const initialBooksPageLayout = {
  showSidenav: false,
  query: ''
}

export interface BerniePageLayout {
  editable: boolean;
  expanded: boolean;
  scrollY: number;
  isTouched: Function;
};

export const initialBerniePageLayout: BerniePageLayout = {
  editable: false,
  expanded: false,
  scrollY: 0,
  isTouched: function (claims) {
    let _touched = false;
    claims.forEach(claim => {
      claim.rebuttals.forEach(rebuttal => {
        if (rebuttal && rebuttal.isTouched()) {
          _touched = true;
        }
      });
    });
    return _touched;
  }
}

export interface HeroesDashboardLayout {
  heroSearchTerm: string
}

export const initialHeroesDashboardPageLayout = {
  heroSearchTerm: ''
}

export interface Layout {
  booksPage: BooksPageLayout;
  berniePage: BerniePageLayout;
  heroesDashboardPage: HeroesDashboardLayout;
  msg: string;
  // actionTypes: any;
}

export function initialLayout(actionNames: any) {
  return {
    booksPage: initialBooksPageLayout,
    berniePage: initialBerniePageLayout,
    heroesDashboardPage: initialHeroesDashboardPageLayout,
    msg: '',
    // actionTypes: getActionTypes(slices.LAYOUT, actionNames)
  }
}
