import * as layoutActions from './layout.actions';
import { Layout, initialLayout } from './layout.model';
import * as functions from '../branch/branch.functions';
import { typeFor, slices } from '../util';
import { actions, ActionClasses } from './layout.actions';

export function reducer(state: Layout = initialLayout(layoutActions), action: ActionClasses): Layout {

  switch (action.type) {
    case typeFor(slices.LAYOUT, actions.UPDATE):
      return <Layout>functions.update(state, action);
    // case typeFor(slices.LAYOUT, actions.LOAD):
    //   return Object.assign({}, state, {
    //     msg: 'Loading contacts ...'
    //   });
    default:
      return state;
  }
}

export const getShowSidenav = (state: Layout) => state.booksPage.showSidenav;

export const getBerniePageState = (state: Layout) => state.berniePage;

export const getMsg = (state: Layout) => state.msg;

export const getHeroSearchTerm = (state: Layout) => state.heroesDashboardPage.heroSearchTerm;

export const getQuery = (state: Layout) => state.booksPage.query;
