import React, { useState, useEffect } from 'react';
import './Archive.css';
import logogif from '../../img/logogif.gif';
import useAsync from '../../utils/useAsync';
import axios from 'axios';
import Slider from '../Slider/Slider';

async function getArchives() {
  const response = await axios.get(
    'https://sidi.hongik.ac.kr/api/v1/postings/archive/'
  );
  return response.data;
}

function Archive() {
  const [archives] = useAsync(() => getArchives());
  const { loading, data: list, error } = archives;
  const [post, setPost] = useState(null);

  useEffect(() => {}, [post]);

  async function getArchive(archiveId) {
    const response = await axios
      .get(`https://sidi.hongik.ac.kr/api/v1/postings/archive/${archiveId}`)
      .then((response) => {
        const ret = response.data;
        setPost(ret);
      });
    return response;
  }

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

  if (!list) return null;

  if (!post && list)
    return (
      <div className='archive_container'>
        <div className='archive_index_container_before'>
          {list.map((data, i) => {
            return (
              <div
                className='archive'
                style={{ border: '1px solid #000', backgroundColor: 'unset' }}
                key={i}
              >
                <div className='archive_tag'>
                  <span>기록</span>
                </div>
                <div className='archive_content'>
                  <div
                    className='archive_content_header'
                    onClick={() => {
                      setPost(getArchive(data.pk));
                    }}
                  >
                    <span>
                      {data.title} <br></br>
                    </span>
                    <span>
                      {data.created_at ? data.created_at.slice(0, 10) : null}
                    </span>
                  </div>
                </div>
                <div
                  className='archive_content_image image_fill'
                  style={{
                    backgroundImage: data.photos.length
                      ? `url(${data.photos[0].photo})`
                      : null,
                    border: 'none',
                  }}
                ></div>
              </div>
            );
          })}
        </div>
      </div>
    );

  if (post && list)
    return (
      <div className='archive_container'>
        <div className='archive_index_container'>
          {list.map((data, i) => {
            return (
              <div
                key={i}
                className='archive'
                style={{ border: '1px solid #000', backgroundColor: 'unset' }}
              >
                <div className='archive_tag'>
                  <span>기록</span>
                </div>
                <div className='archive_content'>
                  <div
                    className='archive_content_header'
                    onClick={() => {
                      setPost(getArchive(data.pk));
                    }}
                  >
                    <span>
                      {data.title} <br></br>
                    </span>
                    <span>
                      {data.created_at ? data.created_at.slice(0, 10) : null}
                    </span>
                  </div>
                </div>
                <div
                  className='archive_content_image image_fill'
                  style={{
                    backgroundImage: data.photos.length
                      ? `url(${data.photos[0].photo})`
                      : null,
                    border: 'none',
                  }}
                ></div>
              </div>
            );
          })}
        </div>
        <div className='archive_wrapper'>
          <div className='archive_wrapper_text'>
            <div className='archive_wrapper_text_title'>
              <span>{post.title}</span>
            </div>
            <div className='archive_wrapper_text_date'>
              <span>
                {post.created_at ? post.created_at.slice(0, 10) : null}
              </span>
            </div>
            <div className='archive_wrapper_text_body'>
              <span>
                {post.text
                  ? post.text.split('\n').map((line, i) => {
                      return (
                        <span key={i}>
                          {line}
                          <br />
                        </span>
                      );
                    })
                  : null}
              </span>
            </div>
            <div className='archive_wrapper_text_link'>
              <span>
                <a
                  href={post.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ color: 'black' }}
                >
                  {post.link}
                </a>
              </span>
            </div>
          </div>
          <div className='archive_wrapper_slider'>
            {post.photos ? <Slider items={post.photos}></Slider> : null}
          </div>
        </div>
      </div>
    );
  return null;
}

export default Archive;
