import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-awesome-modal";
import "./Search.css";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
	  visible: false,
	  search: ""
    };
  }

  _openModal = function () {
    this.setState({
      visible: true,
    });
  };

  _closeModal = function () {
    this.setState({
      visible: false,
    });
  };

  _changeSearch = function () {
	  const searchValue = document.getElementsByName("search")[0].value;
	  console.log(searchValue);

	  this.setState({
		...this.tate,
		search: searchValue
	  });
  }

  render() {
    return (
      <Router>
          <div>
				<Modal
				visible={this.state.visible}
				width="815"
				height="70"
				effect="fadeInDown"
				onClickAway={() => this._closeModal()}>
					<form>
						<input placeholder="SEARCH..." type="text" name="search" onChange={() => this._changeSearch()}></input>
					</form>
				</Modal>
			  <div
			  className="navbar_search_item"
			  onClick={() => this._openModal()}>
				  SEARCH
			  </div>
            </div>
      </Router>
    );
  }
}

export default Search;
