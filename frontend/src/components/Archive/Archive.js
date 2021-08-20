import React, { useState, useEffect } from 'react';
import './Archive.css';
import logogif from '../../img/logogif.gif';
import useAsync from '../../utils/useAsync';
import axios from 'axios';
import Slider from '../Slider/Slider';
import { Link, Redirect } from 'react-router-dom';

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
        console.log('post');
        console.log(post);
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
      <div className='archive_container' style={{ marginBottom: '40px' }}>
        <div className='archive_index_container_before'>
          {list.map((data, i) => {
            return (
              <Link to={`/archive/${data.pk}`}>
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
                        {data.created_at
                          ? data.created_at.slice(0, 10).replace(/-/g, '.')
                          : null}
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
              </Link>
            );
          })}
        </div>
      </div>
    );

  return null;
}

export default Archive;
