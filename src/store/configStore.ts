import {applyMiddleware, createStore} from "redux";
import {rootReducer} from "../reducer";
import {composeWithDevTools} from "redux-devtools-extension";
// @ts-ignore
import logger from "redux-logger";
import thunk from "redux-thunk";

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));