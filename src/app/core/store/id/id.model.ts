import * as commonActions from '../entity/entity.actions';
// import { getActionTypes } from '../util';
import { IDAction } from './id.actions';



export interface IDs {
  ids: string[];
  loaded: boolean;
  loading: boolean;
  // actionTypes: any;
};

export function initialIDs(vals: any = {}, sliceName: string, actionNames: any): IDs {
  return {
    ids: [],
    loaded: false,
    loading: false
    // actionTypes: getActionTypes(entityTypeName, actionNames)
  }
};
