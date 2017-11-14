// @flow
import React from 'react';
import SymbolSearch from './components/SymbolSearch.react';

type Props = {};

class InvestrApp extends React.Component<void, Props, void> {
  render (): React.Element<any> {
    return (
      <div className='investrapp-root'>
        <h1>Investr</h1>
        <SymbolSearch />
      </div>
    );
  }
}

export default InvestrApp;
