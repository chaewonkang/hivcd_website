import React, { useState, useEffect } from 'react';
import { BoardListWrapper } from '../../components';
import axios from 'axios';
import './EachExhibitionContainer.css';
import useAsync from '../../utils/useAsync';
import logogif from '../../img/logogif.gif';

async function getList() {
  const response = await axios.get(
    'https://sidi.hongik.ac.kr/api/v1/postings/exhibition/'
  );
  return response.data;
}

function EachExhibitionContainer({ match, location }) {
  const [state] = useAsync(() => getList(), []);
  const { loading, data: list, error } = state;
  const [postId, setPostId] = useState(0);
  const [curLoc, setCurLoc] = useState('');
  const [exhibitionFilter, setExhibitionFilter] = useState(0);
  const [options] = useState({
    all: '전체',
    gw: '졸업주간',
    wff: '와우영상제',
    club: '소모임',
    aetc: '기타',
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

  return (
    <>
      <div className='each_post_board_filter_wrapper'>
        <div className='exhibition_filter_wrapper'>
          <div className='exhibition_filter_container' onTouchStart>
            <button
              className='exhibition_filter_option'
              onClick={() => setExhibitionFilter(0)}
            >
              {options.all}
            </button>
            <button
              className='exhibition_filter_option'
              onClick={() => setExhibitionFilter(6)}
            >
              {options.gw}
            </button>
            <button
              className='exhibition_filter_option'
              onClick={() => setExhibitionFilter(7)}
            >
              {options.wff}
            </button>
            <button
              className='exhibition_filter_option'
              onClick={() => setExhibitionFilter(8)}
            >
              {options.club}
            </button>
            <button
              className='exhibition_filter_option'
              onClick={() => setExhibitionFilter(9)}
            >
              {options.aetc}
            </button>
          </div>
        </div>
      </div>
      <div className='each_post_container'>
        <BoardListWrapper
          list={list}
          postId={postId}
          curLoc={curLoc}
          category={exhibitionFilter}
        ></BoardListWrapper>
      </div>
    </>
  );
}

export default EachExhibitionContainer;
