/**
 * (c) Michel Weststrate 2015 - 2016
 * MIT Licensed
 *
 * Welcome to the mobx sources! To get an global overview of how MobX internally works,
 * this is a good place to start:
 * https://medium.com/@mweststrate/becoming-fully-reactive-an-in-depth-explanation-of-mobservable-55995262a254#.xvbh6qd74
 *
 * Source folders:
 * ===============
 *
 * - api/     Most of the public static methods exposed by the module can be found here.
 * - core/    Implementation of the MobX algorithm; atoms, derivations, reactions, dependency trees, optimizations. Cool stuff can be found here.
 * - types/   All the magic that is need to have observable objects, arrays and values is in this folder. Including the modifiers like `asFlat`.
 * - utils/   Utility stuff.
 *
 */

import {registerGlobals} from "./core/globalstate";
registerGlobals();

export { Lambda                                               } from "./utils/utils";
export { SimpleEventEmitter, ISimpleEventListener             } from "./utils/simpleeventemitter";
export { ITransitionEvent, IObserverTree, IDependencyTree     } from "./api/extras";
export { IObservable, IDepTreeNode, untracked                 } from "./core/observable";
export { IDerivation                                          } from "./core/derivation";

export { asReference, asFlat, asStructure                     } from "./types/modifiers";
export { IObjectChange, isObservableObject                    } from "./types/observableobject";
export { IObservableArray, IArrayChange, IArraySplice, isObservableArray, fastArray } from "./types/observablearray";
export { IObservableMapChange, IKeyValueMap, ObservableMap, IMapEntries, isObservableMap, map } from "./types/observablemap"

export { IObservableValue, observable                         } from "./api/observable";
export { computed, IComputedValueOptions                      } from "./api/computeddecorator";
export { isObservable                                         } from "./api/isobservable";
export { extendObservable                                     } from "./api/extendobservable";
export { observe                                              } from "./api/observe";
export { autorun, autorunAsync, autorunUntil, when            } from "./api/autorun";
export { expr                                                 } from "./api/expr";
export { toJSON                                               } from "./api/tojson";
export { ITransformer, createTransformer                      } from "./api/createtransformer";

export { transaction                                          } from "./core/transaction";
export { Reaction                                             } from "./core/reaction";
export { IAtom, Atom                                          } from "./core/atom";

import { resetGlobalState } from "./core/globalstate";
import { quickDiff } from "./utils/utils";

export const _ = {
	quickDiff,
	resetGlobalState
};

import { ITransitionEvent, IObserverTree, IDependencyTree } from "./api/extras";
import { getDependencyTree, getObserverTree, trackTransitions, allowStateChanges } from "./api/extras";
import { Lambda } from "./utils/utils";
import { isComputingDerivation } from "./core/derivation";

export const extras = {
	allowStateChanges,
	getDependencyTree,
	getObserverTree,
	isComputingDerivation,
	resetGlobalState,
	trackTransitions
};