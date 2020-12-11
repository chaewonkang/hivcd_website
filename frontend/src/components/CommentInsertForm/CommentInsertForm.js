import React from "react";

const CommentInsertForm = ({ commentInput, onChangeInput, onAdd, error }) => {
  const handleChange = (e) => {
    const { value } = e.target;
    onChangeInput({ value });
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onAdd();
    }
  };
  return (
    <div>
      <div className="error">
        {error.triggered && <div>{error.message}</div>}
      </div>
      <input
        type="text"
        name="note"
        value={commentInput}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      ></input>
    </div>
  );
};

export default CommentInsertForm;
