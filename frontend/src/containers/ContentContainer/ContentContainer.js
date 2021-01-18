import React from "react";
import axios from "axios";
import { PostWrapper, Post, HomeArchive, LogoImage } from "../../components";
import { ArchiveWrapper } from "../../components";
import "./ContentContainer.css";
import useAsync from "../../utils/useAsync";

async function getPosts() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts",
    {},
    {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("access_token"),
        Accept: "application/json",
        "Content-type": "application/json",
      },
    }
  );
  return response.data;
}

function ContentContainer() {
  const [state] = useAsync(() => getPosts(), []);
  const { loading, data: posts, error } = state;

  if (loading) return <div className="contentcontainer">로딩 중...</div>;
  if (error) return <div className="contentcontainer">에러 발생...</div>;
  if (!posts) return null;

  return (
    <div className="contentcontainer">
      <PostWrapper>
        {posts ? <LogoImage></LogoImage> : null}
        {posts &&
          posts
            // .filter(
            //   (data) =>
            //     data.category === 1 ||
            //     data.category === 2 ||
            //     data.category === 3 ||
            //     data.category === 4
            // )
            .slice(0, 20)
            .map((post) => {
              return (
                <Post
                  key={post.id}
                  title={post.title}
                  date={post.title}
                  category={1}
                  id={post.id}
                ></Post>
              );
            })}
      </PostWrapper>
      <ArchiveWrapper>
        {posts &&
          posts
            // .filter(
            //   (data) =>
            //     data.category === 5 || data.category === 6 || data.category === 7
            // )
            .slice(0, 6)
            .map((post) => {
              return (
                <HomeArchive
                  key={post.id}
                  title={post.title}
                  id={post.id}
                  date={post.title}
                  category={6}
                  thumbnailUrl="https://www.google.com"
                  link="https://www.google.com"
                ></HomeArchive>
              );
            })}
      </ArchiveWrapper>
    </div>
  );
}

export default ContentContainer;
