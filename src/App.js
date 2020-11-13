// import Routes from './routes';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import actions from './actions';

function App() {
  const selectors = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      actions.exampleSetValueAction({
        id: 'TEST001',
        name: 'TEST',
        score: 100,
        birth: null,
      })
    );

    console.log('State --> ', selectors.exampleReducer);
  }, []);

  return (
    <div></div>
  );
}

export default App;
