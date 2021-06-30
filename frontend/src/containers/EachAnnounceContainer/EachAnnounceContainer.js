import React, { useState, useEffect } from 'react';
import { BoardListWrapper } from '../../components';
import axios from 'axios';
import './EachAnnounceContainer.css';
import useAsync from '../../utils/useAsync';
import logogif from '../../img/logogif.gif';

async function getList() {
  const response = await axios.get(
    'https://sidi.hongik.ac.kr/api/v1/postings/info/'
  );
  return response.data;
}

function EachAnnounceContainer({ match, location }) {
  const [state] = useAsync(() => getList(), []);
  const { loading, data: list, error } = state;
  const [postId, setPostId] = useState(0);
  const [curLoc, setCurLoc] = useState('');
  const [boardFilter, setBoardFilter] = useState(0);
  const [options] = useState({
    all: '전체',
    life: '생활',
    information: '규정',
    statues: '내규',
  });

  useEffect(() => {
    setPostId(match.params.postId);
    setCurLoc(location.pathname);
  });

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

  if (list)
    return (
      <>
        <div className='each_post_board_filter_wrapper'>
          <div className='board_filter_wrapper'>
            <div className='board_filter_container'>
              <button
                tabIndex='0'
                className='board_filter_option'
                onClick={() => setBoardFilter(0)}
              >
                {options.all}
              </button>
              <button
                className='board_filter_option'
                onClick={() => setBoardFilter(4)}
              >
                {options.life}
              </button>
              <button
                className='board_filter_option'
                onClick={() => setBoardFilter(5)}
              >
                {options.information}
              </button>
            </div>
          </div>
        </div>
        <div className='each_post_container'>
          {location.pathname.includes('info') ? (
            <BoardListWrapper
              list={list.filter(
                (data) => data.category === 4 || data.category === 5
              )}
              postId={postId}
              curLoc={curLoc}
              category={boardFilter}
            ></BoardListWrapper>
          ) : null}
        </div>
      </>
    );
}

export default EachAnnounceContainer;
