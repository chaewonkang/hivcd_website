import { combineReducers } from "redux";
import { comments, commentsEpics } from "./comments";
import { combineEpics } from "redux-observable";

export const rootReducers = combineReducers({ comments });
export const rootEpics = combineEpics(commentsEpics.addCommentEpic);
