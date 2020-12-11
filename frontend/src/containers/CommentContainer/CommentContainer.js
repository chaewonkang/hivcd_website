import React, { Component } from "react";
import { connect } from "react-redux";
import { CommentInsertForm } from "../../components";

import * as commentActions from "../../store/modules/comments";

export class CommentContainer extends Component {
  handleChange = ({ value }) => {
    const { changeCommentInput } = this.props;
    changeCommentInput({ value });
  };

  addComment = () => {
    const { addComment } = this.props;
    addComment();
  };

  render() {
    const { commentInput, error } = this.props;
    const { handleChange, addComment } = this;
    return (
      <div>
        <CommentInsertForm
          commentInput={commentInput}
          onChangeInput={handleChange}
          onAdd={addComment}
          error={error}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  commentInput: state.comments.commentInput,
  comments: state.comments.comments,
  error: state.comments.error,
});

const mapDispatchToProps = (dispatch) => {
  return {
    changeCommentInput: ({ value }) => {
      dispatch(commentActions.changeCommentInput({ value }));
    },
    addComment: () => {
      dispatch(commentActions.addComment());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentContainer);
