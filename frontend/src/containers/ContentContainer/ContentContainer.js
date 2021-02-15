import React, { useState } from "react";
import axios from "axios";
import { PostWrapper, Post, HomeArchive, LogoImage } from "../../components";
import { ArchiveWrapper } from "../../components";
import "./ContentContainer.css";
import useAsync from "../../utils/useAsync";
import getCookie from "../../utils/getCookie";

async function getPosts(token) {
  const response = await axios.get(
    "http://devsidi.hongik.ac.kr/api/v1/postings/",
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

  if (loading) return <div className="contentcontainer">Loading...</div>;
  if (error) return <div className="contentcontainer">Error Occurred!</div>;
  if (!posts) return null;

  return (
    <div className="contentcontainer">
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
                  thumbnailUrl={post.photos ? post.photos[0].photo : null}
                  link={post.link}
                ></HomeArchive>
              );
            })}
      </ArchiveWrapper>
    </div>
  );
}

export default ContentContainer;
