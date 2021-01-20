import { useReducer, useEffect, useCallback } from "react";

// actions: loading, success, error
function reducer(state, action) {
  switch (action.type) {
    // 각각의 액션이 발생했을 때 대응되는 상태들을 변경해 줄 것임
    case "LOADING":
      return {
        loading: true,
        data: null,
        error: null,
      };
    case "SUCCESS":
      return {
        loading: false,
        data: action.data,
        error: null,
      };
    case "ERROR":
      return {
        loading: false,
        data: null,
        error: action.error,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

// 파라미터 두 개.
// callback에는 API 호출 함수를,
// deps에는 이 내부에서 useEffect를 사용해서 컴포넌트가 로딩되거나 상태가 변경됐을 때 API를 재요청 할 건데,
// useEffect의 deps배열을 관리해 줄 것임 (비어있으면 컴포넌트가 처음 렌더링 될 때만 호출)
// 만약 이 deps 배열에 어떤 상태들을 지정해 주면 상태값이 변경됨에 따라 fetchData 호출
function useAsync(callback, deps = [], skip = false) {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: null,
    error: null,
  });

  const fetchData = useCallback(async () => {
    dispatch({
      type: "LOADING",
    });
    try {
      const data = await callback();
      dispatch({ type: "SUCCESS", data });
    } catch (e) {
      dispatch({
        type: "ERROR",
        error: e,
      });
    }
  }, [callback]);

  useEffect(() => {
    if (skip) {
      return;
    }
    fetchData();
  }, deps);

  return [state, fetchData];
}

// 첫번 째 리턴값으로는 상태
// 두번 째 리턴값으로는 API호출함수

export default useAsync;
