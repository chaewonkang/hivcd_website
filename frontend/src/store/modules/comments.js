import { ajax } from "rxjs/observable/dom/ajax";
import { of } from "rxjs";
import { map, mergeMap, catchError, withLatestFrom } from "rxjs/operators";
import { ofType } from "redux-observable";

const CHANGE_COMMENT_INPUT = "comments/CHANGE_COMMENT_INPUT";

// ADD COMMENT ACTION TYPES
const ADD_COMMENT = "comments/ADD_COMMENT";
const ADD_COMMENT_SUCCESS = "comments/ADD_COMMENT_SUCCESS";
const ADD_COMMENT_FAILURE = "comments/ADD_COMMENT_FAILURE";

export const changeCommentInput = ({ value }) => ({
  type: CHANGE_COMMENT_INPUT,
  payload: { value },
});

export const addComment = () => ({
  type: ADD_COMMENT,
});

export const addCommentSuccess = (comment) => ({
  type: ADD_COMMENT_SUCCESS,
  payload: {
    comment,
  },
});

export const addCommentFailure = (error) => ({
  type: ADD_COMMENT_FAILURE,
  payload: {
    error,
  },
});

const addCommentEpic = (action$, state$) => {
  return action$.pipe(
    ofType(ADD_COMMENT),
    withLatestFrom(state$),
    mergeMap(([action, state]) => {
      return ajax
        .post(`http://localhost:8000/api/v1/comments`, {
          text: state.notes.commentInput,
        })
        .pipe(
          map((response) => {
            const comment = response.response;
            return addCommentSuccess(comment);
          }),
          catchError((error) =>
            of({ type: ADD_COMMENT_FAILURE, payload: error, error: true })
          )
        );
    })
  );
};

const initialState = {
  commentInput: "",
  comments: [],
  error: {
    triggerd: false,
    message: "",
  },
};

export const comments = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_COMMENT_INPUT:
      return {
        ...state,
        commentInput: action.payload.value,
      };
    case ADD_COMMENT_SUCCESS:
      const { comment } = action.payload;
      return {
        ...state,
        comments: [comment].concat(state.comments),
        commentInput: "",
        error: {
          triggerd: false,
          message: "",
        },
      };
    case ADD_COMMENT_FAILURE:
      return {
        ...state,
        error: {
          triggerd: true,
          message: "Error! Please Try with Unempty Note",
        },
      };
    default:
      return state;
  }
};

export const commentsEpics = {
  addCommentEpic,
};
