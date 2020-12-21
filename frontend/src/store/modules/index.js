import { combineReducers } from "redux";
import { auth, authEpics } from "./auth";
import { comments, commentsEpics } from "./comments";
import { combineEpics } from "redux-observable";

export const rootReducers = combineReducers({ comments, auth });
export const rootEpics = combineEpics(
  commentsEpics.addCommentEpic,
  authEpics.loginEpic,
  authEpics.registerEpic
);
