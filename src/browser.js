// @flow
import InvestrApp from './InvestrApp.react';
import Playground from './Playground.react';
import ReactDOM from 'react-dom';
import React from 'react';

// Project-wide SASS
require('./sass/global.scss');

const root: React.Element<any> = <InvestrApp />;

/**
 * Render our React project
 */
ReactDOM.render(root, document.getElementById('root'));
