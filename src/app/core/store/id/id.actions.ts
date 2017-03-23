import { Action } from '@ngrx/store';

import { typeFor } from '../util';

export const actions = {
  ADD: 'ADD',
  ADD_SUCCESS: 'ADD_SUCCESS',
  ADD_FAIL: 'ADD_FAIL',
  LOAD: 'LOAD',
  LOAD_SUCCESS: 'LOAD_SUCCESS',
  LOAD_FAIL: 'LOAD_FAIL',
  DELETE: 'DELETE',
  DELETE_SUCCESS: 'DELETE_SUCCESS',
  DELETE_FAIL: 'DELETE_FAIL'
}

export class IDAction implements Action {
  _name: string = 'BASE ACTION - THIS SHOULD NOT APPEAR. YOU MUST FIRST SET TYPE';
  get type() {
    return typeFor(this.sliceName, this._name)
  }
  set type(type) {
    this._name = type;
  }
  constructor(public sliceName: string, public payload: any) { }
}

export class Add extends IDAction {
  _name: string = actions.ADD;
}

export class AddSuccess extends IDAction {
  _name: string = actions.ADD_SUCCESS;
}

export class AddFail extends IDAction {
  _name: string = actions.ADD_FAIL;
}

export class Load extends IDAction {
  _name: string = actions.LOAD;
}

export class LoadSuccess extends IDAction {
  _name: string = actions.LOAD_SUCCESS;
}

export class LoadFail extends IDAction {
  _name: string = actions.LOAD_FAIL;
}

export class Delete extends IDAction {
  _name: string = actions.DELETE;
}

export class DeleteSuccess extends IDAction {
  _name: string = actions.DELETE_SUCCESS;
}

export class DeleteFail extends IDAction {
  _name: string = actions.DELETE_FAIL;
}

export type ActionClasses
  = Add
  | AddSuccess
  | AddFail
  | Load
  | LoadSuccess
  | LoadFail
  | Delete
  | DeleteSuccess
  | DeleteFail;
