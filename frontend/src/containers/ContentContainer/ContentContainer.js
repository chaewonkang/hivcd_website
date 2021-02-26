import React, { useState, useEffect } from "react";
import axios from "axios";
import { PostWrapper, Post, HomeArchive, LogoImage } from "../../components";
import { ArchiveWrapper } from "../../components";
import "./ContentContainer.css";
import useAsync from "../../utils/useAsync";
import getCookie from "../../utils/getCookie";
import Modal from "react-awesome-modal";

async function getPosts(token) {
  const response = await axios.get(
    "http://devsidi.hongik.ac.kr/api/v1/postings",
    {},
    {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("access_token"),
        Accept: "application/json",
        "X-CSRFToken": token,
        "Content-type": "application/json",
      },
    }
  );
  return response.data;
}

function ContentContainer() {
  const [token] = useState(getCookie("csrftoken"));
  const [state] = useAsync(() => getPosts(token), [token]);
  const { loading, data: posts, error } = state;

  const [showModal, setShowModal] = useState(false);
  const HAS_VISITED_BEFORE = localStorage.getItem("hasVisitedBefore");

  useEffect(() => {
    const handleShowModal = () => {
      if (HAS_VISITED_BEFORE && HAS_VISITED_BEFORE > new Date()) {
        return;
      }

      if (!HAS_VISITED_BEFORE) {
        setShowModal(true);
        let expires = new Date();
        expires = expires.setHours(expires.getHours() + 24);
        localStorage.setItem("hasVisitedBefore", expires);
      }
    };

    window.setTimeout(handleShowModal, 2000);
  }, [HAS_VISITED_BEFORE]);

  const handleClose = () => setShowModal(false);

  if (loading) return <div className="contentcontainer">Loading...</div>;
  if (error) return <div className="contentcontainer">Error Occurred!</div>;
  if (!posts) return null;

  return (
    <div className="contentcontainer">
      {showModal && (
        <Modal
          visible={showModal}
          width="815"
          height="70"
          effect="fadeInDown"
          onClickAway={() => handleClose()}
        >
          웹사이트 사용 안내
        </Modal>
      )}
      <PostWrapper>
        {posts ? <LogoImage></LogoImage> : null}
        {posts &&
          posts
            .filter(
              (data) =>
                data.category === 1 ||
                data.category === 2 ||
                data.category === 3 ||
                data.category === 4
            )
            .slice(0, 23)
            .map((post) => {
              return (
                <Post
                  key={post.pk}
                  title={post.title}
                  date={post.updated}
                  category={post.category}
                  id={post.pk}
                ></Post>
              );
            })}
      </PostWrapper>
      <ArchiveWrapper>
        {posts &&
          posts
            .filter(
              (data) =>
                data.category === 5 ||
                data.category === 6 ||
                data.category === 7
            )
            .slice(0, 6)
            .map((post) => {
              return (
                <HomeArchive
                  key={post.pk}
                  title={post.title}
                  id={post.pk}
                  body={post.text}
                  category={post.category}
                  thumbnailUrl={
                    post.photos.length ? post.photos[0].photo : null
                  }
                  link={post.link}
                ></HomeArchive>
              );
            })}
      </ArchiveWrapper>
    </div>
  );
}

export default ContentContainer;
