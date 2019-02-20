import React from 'react';
import { render } from 'react-dom';
// import App from './components/App';
import Demo from './components/Demo';

// render allows us to append a child
render(
  <Demo />,
  document.getElementById('root')
);
