import { auth } from "./auth";
import { combineReducers } from "redux";
import { combineEpics } from "redux-observable";

export const rootReducers = combineReducers({ auth });
export const rootEpics = combineEpics(auth.loginEpic, auth.registerEpic);
