import { BranchAction } from './branch.actions';
import { Branch } from './branch.model';

export function update(state: Branch, action: BranchAction): Branch {
  let obj = [state];
  let i = 0;
  for (i = 0; i < action.path.length - 1; i++) {
    obj[i + 1] = obj[i][action.path[i]];
  }
  let result = {};
  let start = 0;
  if ((typeof action.val === "object") && (action.val !== null)) {
    result = action.val;
    start = action.path.length;
  } else {
    result[action.path[action.path.length - 1]] = action.val;
    start = action.path.length - 1;
  }

  let mutation = {};
  for (i = start; i > 0; i--) {
    mutation = Object.assign({}, obj[i], result);
    result = {};
    result[action.path[i - 1]] = mutation;
  }

  return Object.assign({}, state, result);
}
