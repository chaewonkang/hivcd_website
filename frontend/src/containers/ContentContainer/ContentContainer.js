import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PostWrapper, Post, HomeArchive } from '../../components';
import { ArchiveWrapper } from '../../components';
import './ContentContainer.css';
import useAsync from '../../utils/useAsync';
import logogif from '../../img/logogif.gif';
import H_1 from '../../img/ㅎ_1.gif';
import I_1 from '../../img/ㅇ_1.gif';
import S_1 from '../../img/ㅅ_1.gif';
import D_1 from '../../img/ㄷ_1.gif';

async function getPosts() {
  const response = await axios.get(
    'https://sidi.hongik.ac.kr/api/v1/postings/'
  );
  return response.data;
}

async function getArchives() {
  const response = await axios.get(
    'https://sidi.hongik.ac.kr/api/v1/postings/exhibition/'
  );
  return response.data;
}

function debounce(fn, ms) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

function ContentContainer() {
  const [state] = useAsync(() => getPosts(), []);
  const [archiveState] = useAsync(() => getArchives(), []);
  const { loading, data: posts, error } = state;
  const { data: archives } = archiveState;
  let pkArray = [];
  let randPost = [];
  let randImg = [];

  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  const [imgArray] = useState([H_1, I_1, S_1, D_1]);

  useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
        row: window.innerHeight / 210,
      });
    }, 1);

    window.addEventListener('resize', debouncedHandleResize);

    return () => {
      window.removeEventListener('resize', debouncedHandleResize);
    };
  }, []);

  if (loading)
    return (
      <div className='container_loading'>
        <img className='loading_status' src={logogif} alt='logogif'></img>
      </div>
    );
  if (error)
    return (
      <div className='container_loading'>
        <img className='loading_status' src={logogif} alt='logogif'></img>
      </div>
    );

  if (!posts) return null;

  if (posts) {
    posts.map((post) => {
      pkArray.push(post.pk);
      return null;
    });
    for (let i = 0; i < 4; i++) {
      if (randPost.length === 0 || randPost.length === 1)
        randPost[i] = Math.floor(Math.random() * pkArray.length);
      if (randPost.length > 1 && randPost[i] !== randPost[i - 1])
        randPost[i] = Math.floor(Math.random() * pkArray.length);
    }
    randImg = [
      pkArray[randPost[0]],
      pkArray[randPost[1]],
      pkArray[randPost[2]],
      pkArray[randPost[3]],
    ];
    randImg = randImg.sort(function (a, b) {
      return a - b;
    });

    return (
      <div className='contentcontainer'>
        <PostWrapper dimensions={dimensions}>
          {randImg &&
            posts &&
            posts
              .filter(
                (post) =>
                  post.category === 1 ||
                  post.category === 2 ||
                  post.category === 3 ||
                  post.category === 4 ||
                  post.category === 5
              )
              .map((post) => (
                <>
                  {randImg.includes(post.pk) ? (
                    <>
                      <img
                        src={imgArray[randImg.indexOf(post.pk)]}
                        alt='randomImage'
                        style={{
                          width: 195 + 'px',
                        }}
                        className='imgRef'
                      ></img>
                      <Post
                        key={post.pk}
                        title={post.title}
                        date={post.created_at}
                        category={post.category}
                        id={post.pk}
                      ></Post>
                    </>
                  ) : (
                    <Post
                      key={post.pk}
                      title={post.title}
                      date={post.created_at}
                      category={post.category}
                      id={post.pk}
                    ></Post>
                  )}
                </>
              ))}
        </PostWrapper>
        <ArchiveWrapper dimensions={dimensions}>
          {archives &&
            archives.map((post) => {
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
}

export default ContentContainer;
