import React, { useState } from "react";
import Modal from "react-awesome-modal";
import "./Search.css";
import { useHistory } from "react-router-dom";

function Search({ handleSearchKeyword }) {
  const [visible, setVisible] = useState(false);
  let history = useHistory();

  const openModal = () => {
    setVisible(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setVisible(false);
    document.body.style.overflow = "unset";
  };

  const submitSearch = (e) => {
    e.preventDefault();
    const searchValue = document.getElementsByName("search")[0].value;

    handleSearchKeyword(searchValue);
    console.log(`Search Component value is: ${searchValue}`);
    closeModal();
    history.push("/search");
  };

  return (
    <>
      <Modal
        visible={visible}
        width="815"
        height="70"
        effect="fadeInDown"
        onClickAway={() => closeModal()}
      >
        <form onSubmit={(e) => submitSearch(e)}>
          <input placeholder="SEARCH..." type="text" name="search"></input>
        </form>
      </Modal>
      <div className="navbar_search_item" onClick={() => openModal()}>
        SEARCH
      </div>
    </>
  );
}

export default Search;
