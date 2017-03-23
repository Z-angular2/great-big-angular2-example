import { Action } from '@ngrx/store';

import { typeFor } from '../util';

export const actions = {
  ADD: 'ADD',
  ADD_SUCCESS: 'ADD_SUCCESS',
  UPDATE: 'UPDATE',
  UPDATE_SUCCESS: 'UPDATE_SUCCESS',
  UPDATE_EACH: 'UPDATE_EACH',
  UPDATE_SLICE: 'UPDATE_SLICE',
  ADD_UPDATE_FAIL: 'ADD_UPDATE_FAIL',
  LOAD: 'LOAD',
  LOAD_SUCCESS: 'LOAD_SUCCESS',
  LOAD_FAIL: 'LOAD_FAIL',
  SELECT: 'SELECT',
  SELECT_NEXT: 'SELECT_NEXT',
  DELETE: 'DELETE'
}

export class EntityAction<T> implements Action {
  _name: string = 'BASE ACTION - THIS SHOULD NOT APPEAR. YOU MUST FIRST SET TYPE';
  get type() {
    return typeFor(this.entityName, this._name)
  }
  set type(type) {
    this._name = type;
  }
  constructor(public entityName: string, public payload: any) { }
}

export class Add<T> extends EntityAction<T> {
  _name: string = actions.ADD;
}

export class AddSuccess<T> extends EntityAction<T> {
  _name: string = actions.ADD_SUCCESS;
}

export class Update<T> extends EntityAction<T> {
  _name: string = actions.UPDATE;
}

export class UpdateSuccess<T> extends EntityAction<T> {
  _name: string = actions.UPDATE_SUCCESS;
}

export class UpdateEach<T> extends EntityAction<T> {
  _name: string = actions.UPDATE_EACH;
}

export class UpdateSlice<T> extends EntityAction<T> {
  _name: string = actions.UPDATE_SLICE;
}

export class AddUpdateFail<T> extends EntityAction<T> {
  _name: string = actions.ADD_UPDATE_FAIL;
}

export class Load<T> extends EntityAction<T> {
  _name: string = actions.LOAD;
}

export class LoadSuccess<T> extends EntityAction<T> {
  _name: string = actions.LOAD_SUCCESS;
}

export class LoadFail<T> extends EntityAction<T> {
  _name: string = actions.LOAD_FAIL;
}

export class Select<T> extends EntityAction<T> {
  _name: string = actions.SELECT;
}

export class SelectNext<T> extends EntityAction<T> {
  _name: string = actions.SELECT_NEXT;
  constructor(public entityName: string) {
    super(null, entityName);
  }
}

export class Delete<T> extends EntityAction<T> {
  _name: string = actions.DELETE;
}

// export function getActionTypes<T>(entityType: string, actionName): string {
//   return type(`[${entityType}] ${actionName}`)
// }

export type ActionClasses<T>
  = Add<T>
  | AddSuccess<T>
  | Update<T>
  | UpdateSuccess<T>
  | UpdateEach<T>
  | UpdateSlice<T>
  | Load<T>
  | LoadSuccess<T>
  | LoadFail<T>
  | Select<T>
  | SelectNext<T>
  | Delete<T>;
