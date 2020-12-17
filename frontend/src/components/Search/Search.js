import React, { Component } from "react";
import Modal from "react-awesome-modal";
import "./Search.css";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      searchResult: null,
    };
  }

  _openModal = function () {
    this.setState({
      visible: true,
    });
    document.body.style.overflow = "hidden";
  };

  _closeModal = function () {
    this.setState({
      visible: false,
    });
    document.body.style.overflow = "unset";
  };

  submitSearch(e) {
    e.preventDefault();
    const searchValue = document.getElementsByName("search")[0].value;

    this.props.handleSearchKeyword(searchValue);
    console.log(`Search Component value is: ${searchValue}`);
    this._closeModal();
  }

  render() {
    return (
      <div>
        <Modal
          visible={this.state.visible}
          width="815"
          height="70"
          effect="fadeInDown"
          onClickAway={() => this._closeModal()}
        >
          <form onSubmit={this.submitSearch.bind(this)}>
            <input placeholder="SEARCH..." type="text" name="search"></input>
          </form>
        </Modal>
        <div className="navbar_search_item" onClick={() => this._openModal()}>
          SEARCH
        </div>
      </div>
    );
  }
}

export default Search;
