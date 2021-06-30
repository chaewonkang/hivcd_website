import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Post } from '../../components';
import './SearchResultContainer.css';
import logogif from '../../img/logogif.gif';

function SearchResultContainer({ searchKeyword }) {
  const [postList, setPostList] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  async function getSearchResult(searchKeyword) {
    await axios
      .get('https://sidi.hongik.ac.kr/api/v1/postings/')
      .then((response) => {
        setLoading(true);
        setPostList(
          response.data
            .filter((result) => {
              if (searchKeyword === null) return result;
              else if (result.title.toLowerCase().includes(searchKeyword))
                return result;
              return null;
            })
            .map((data) => {
              return (
                <Post
                  key={data.pk}
                  title={data.title}
                  id={data.pk}
                  date={data.created_at}
                  category={data.category}
                ></Post>
              );
            })
        );
        setLoading(false);
      })
      .catch((e) => {
        setError(e);
      });
  }

  useEffect(() => {
    getSearchResult(searchKeyword);
  }, [searchKeyword]);

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

  return (
    <div className='search_result_container'>
      <div className='search_result_wrapper'>
        {searchKeyword === '' || searchKeyword === null || !postList
          ? '정확한 검색어를 입력하세요.'
          : postList}
      </div>
    </div>
  );
}

export default SearchResultContainer;
