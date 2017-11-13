// @flow
import ReactDOM from 'react-dom';
import React from 'react';

// Project-wide SASS
require('./sass/global.scss');

const root: React.Element<any> = (
  <div>Hello, World!</div>
);

/**
 * Render our React project
 */
ReactDOM.render(root, document.getElementById('root'));
