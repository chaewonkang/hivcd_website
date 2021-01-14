import React, { useEffect, useState } from "react";
import axios from "axios";
import { PostWrapper, Post, HomeArchive, LogoImage } from "../../components";
import { ArchiveWrapper } from "../../components";
import "./ContentContainer.css";

function ContentContainer() {
  const [loading, setLoading] = useState(false);
  const [postList, setPostList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadPost();
  }, []);

  const loadPost = async () => {
    axios
      .get("http://13.125.84.10:8000/api/v1/postings/?format=json")
      .then(({ data }) => {
        setLoading(true);
        setPostList(data.reverse());
      })
      .catch((e) => {
        setLoading(false);
        setError(e);
        console.log(error);
      });
  };

  const latestArchiveList = postList
    .filter(
      (data) =>
        data.category === 5 || data.category === 6 || data.category === 7
    )
    .slice(0, 6);
  const latestPostList = postList
    .filter(
      (data) =>
        data.category === 1 ||
        data.category === 2 ||
        data.category === 3 ||
        data.category === 4
    )
    .slice(0, 20);
  return (
    <div className="contentcontainer">
      <PostWrapper>
        {latestPostList ? <LogoImage></LogoImage> : null}
        {latestPostList &&
          latestPostList.map((post) => {
            return (
              <Post
                key={post.pk}
                title={post.title}
                date={post.created}
                category={post.category}
                id={post.pk}
              ></Post>
            );
          })}
        <Post
          key={100}
          title="Hello"
          date="20202020202020"
          category={1}
          id={100}
        ></Post>
        <Post
          key={100}
          title="Hello"
          date="20202020202020"
          category={1}
          id={100}
        ></Post>
        <Post
          key={100}
          title="Hello"
          date="20202020202020"
          category={1}
          id={100}
        ></Post>
        <Post
          key={100}
          title="Hello"
          date="20202020202020"
          category={1}
          id={100}
        ></Post>
        <Post
          key={100}
          title="Hello"
          date="20202020202020"
          category={1}
          id={100}
        ></Post>
      </PostWrapper>
      <ArchiveWrapper>
        {latestArchiveList &&
          latestArchiveList.map((post) => {
            return (
              <HomeArchive
                key={post.id}
                title={post.title}
                id={post.id}
                date={post.created}
                category={post.category}
                thumbnailUrl={post.photos[0].photo}
                link={post.link}
              ></HomeArchive>
            );
          })}
      </ArchiveWrapper>
    </div>
  );
}

export default ContentContainer;
