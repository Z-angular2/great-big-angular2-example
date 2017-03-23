import { Action } from '@ngrx/store';

/**
 * This function coerces a string into a string literal type.
 * Using tagged union types in TypeScript 2.0, this enables
 * powerful typechecking of our reducers.
 *
 * Since every action label passes through this function it
 * is a good place to ensure all of our action labels
 * are unique.
 */

export let typeCache: { [label: string]: boolean } = {};
export function type<T>(label: T | ''): T {
  if (typeCache[<string>label]) {
    throw new Error(`Action type "${label}" is not unique"`);
  }

  typeCache[<string>label] = true;

  return <T>label;
}

export let typeForCache: { [sliceName: string]: { [actionName: string]: string } } = {};
export function typeFor(sliceName, actionName) {
  if (typeForCache[sliceName] && typeForCache[sliceName][actionName]) {
    return typeForCache[sliceName][actionName];
  } else {
    typeForCache[<string>sliceName] = {};
    typeForCache[sliceName][actionName] = `[${sliceName}] ${actionName}`;
    return typeForCache[sliceName][actionName]
  }
}

// export function getActionTypes(entityName, actionNames) {
//   let actionTypes = {};
//   for (let actionName in actionNames) {
//     if (actionName === 'ActionNames') continue;
//     actionTypes[actionName] = typeFor(entityName, actionName);
//   }
//   return actionTypes;
// }

export const slices = {
  BOOK: 'book',
  CRISIS: 'crisis',
  CLAIM: 'claim',
  CLAIM_REBUTTAL: 'claimRebuttal',
  COLLECTION: 'collection',
  CONTACT: 'contact',
  HERO: 'hero',
  LAYOUT: 'layout',
  NOTE: 'note',
  REBUTTAL: 'rebuttal',
  SEARCH: 'search'
}
