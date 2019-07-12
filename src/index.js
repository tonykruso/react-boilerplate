import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
const Index = () => {
  return (
  <div id='home'>
      <p className='welcome'>Welcome to React!</p>
  </div>
  )};
ReactDOM.render(<Index />, document.getElementById('root'));

