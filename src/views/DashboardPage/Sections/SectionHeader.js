/* eslint-disable react/button-has-type */
/* eslint-disable default-case */
import React from 'react';

const useAsync = fn => {
  const initialState = { loading: false, error: null, value: null };
  // eslint-disable-next-line consistent-return
  const stateReducer = (_, action) => {
    switch (action.type) {
      case 'start':
        return { loading: true, error: null, value: null };
      case 'finish':
        return { loading: false, error: null, value: action.value };
      case 'error':
        return { loading: false, error: action.error, value: null };
    }
  };

  const [state, dispatch] = React.useReducer(stateReducer, initialState);

  const run = async (args = null) => {
    try {
      dispatch({ type: 'start' });
      const value = await fn(args);
      dispatch({ type: 'finish', value });
    } catch (error) {
      dispatch({ type: 'error', error });
    }
  };

  return { ...state, run };
};

export default function SectionHeader() {
  const imgFetch = useAsync(url => fetch(url).then(response => response.json()));

  return (
    <div>
      <button
        onClick={() => imgFetch.run('https://dog.ceo/api/breeds/image/random')}
        disabled={imgFetch.isLoading}
      >
        Load image
      </button>
      <br />
      {imgFetch.loading && <div>Loading...</div>}
      {imgFetch.error && <div>Error {imgFetch.error}</div>}
      {imgFetch.value && (
        <img src={imgFetch.value.message} alt="avatar" width={400} height="auto" />
      )}
    </div>
  );
}
