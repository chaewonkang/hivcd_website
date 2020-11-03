import Post from "../Post/Post";
import * as actions from "../../actions";
import { connect } from "react-redux";
import { getRandomColor } from "../../utils";

const mapStateToProps = (state) => ({
  color: state.color,
});

const mapDispatchToProps = (dispatch) => ({
  onSetColor: () => {
    const color = getRandomColor();
    dispatch(actions.setColor(color));
  },
});

const PostContainer = connect(mapStateToProps, mapDispatchToProps)(Post);

export default PostContainer;
