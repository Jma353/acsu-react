// @flow
import InvestrApp from './InvestrApp.react';
import Playground from './Playground.react';
import ReactDOM from 'react-dom';
import React from 'react';

const root: React.Element<any> = <InvestrApp />;

/**
 * Render our React project
 */
ReactDOM.render(root, document.getElementById('root'));
