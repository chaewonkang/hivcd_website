import React, { useState, useEffect } from "react";
import axios from "axios";
import { PostWrapper, Post, HomeArchive, LogoImage } from "../../components";
import { ArchiveWrapper } from "../../components";
import "./ContentContainer.css";
import useAsync from "../../utils/useAsync";
import getCookie from "../../utils/getCookie";
import Modal from "react-awesome-modal";
import logogif from "../../img/logogif.gif";

async function getPosts(token) {
  const response = await axios.get(
    "http://sidi.hongik.ac.kr/api/v1/postings",
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

  const [showModal, setShowModal] = useState(true);
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

  if (loading)
    return (
      <div className="container_loading">
        <img className="loading_status" src={logogif}></img>
      </div>
    );
  if (error)
    return (
      <div className="container_loading">
        <img className="loading_status" src={logogif}></img>
        <Post
          key={100}
          title={"안녕하세요. 샘플입니다"}
          date={"20201010"}
          category={"3"}
          id={100}
        ></Post>
      </div>
    );
  if (!posts) return null;

  return (
    <div className="contentcontainer">
      {showModal && (
        <Modal
          visible={showModal}
          width="fit-content"
          height="fit-content"
          effect="fadeInDown"
          onClickAway={() => handleClose()}
        >
          <div className="welcome_modal">
            <p className="paragraph">
              홍익시디 웹사이트가 오픈되었습니다. 🎊<br></br>
              <br></br>
              상단 메뉴바의 로그인 버튼을 통해 학번으로 로그인해 주세요. 로그인
              후 학과사무실에서 승인이 완료되면 전체 게시물을 열람 가능합니다.
              <br></br>
              모바일 브라우저에서 로그아웃이 제대로 안될 경우에는 브라우저
              쿠키를 삭제 후 재시도 해 주세요.<br></br>
              <br></br>
              기타 다른 문제가 있을 경우에는 yinyang.fig@gmail.com으로 연락
              바랍니다.
            </p>
          </div>
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
