import React, { useState, useEffect } from 'react';
//import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import Routes from './routes';
// import actions from './actions';

function App() {
  // const [stateOpen, setStateOpen] = useState(true);
  // const selectors = useSelector((state) => state);
  // const dispatch = useDispatch();

  // const onOpen = () => {
  //   setStateOpen(!stateOpen);
  //   console.log('State >>> ', stateOpen);
  // }

  useEffect(() => {
    // dispatch(
    //   actions.exampleSetValueAction({
    //     id: 'TEST001',
    //     name: 'TEST',
    //     score: 100,
    //     birth: null,
    //   })
    // );

    // console.log('State --> ', selectors.exampleReducer);
  }, []);

  return (
    <>
      <Routes />
      {/* <button onClick={() => onOpen()}>Click me</button> */}
    </>
  );
}

export default App;
