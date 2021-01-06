import React, { useState } from "react";
import Modal from "react-awesome-modal";
import "./Search.css";

function Search({ handleSearchKeyword }) {
  const [visible, setVisible] = useState(false);

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
  };

  return (
    <>
      <div className="header_container_search" onClick={() => openModal()}>
        SEARCH
      </div>
      <Modal
        visible={visible}
        width="815"
        height="70"
        effect="fadeInDown"
        onClickAway={() => closeModal()}
      >
        <form onSubmit={() => submitSearch()}>
          <input placeholder="SEARCH..." type="text" name="search"></input>
        </form>
      </Modal>
    </>
  );
}

export default Search;
