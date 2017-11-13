// @flow
import React from 'react';
import SymbolSearch from './components/SymbolSearch.react';

class InvestrApp extends React.Component {
  render (): React.Element<any> {
    return (
      <div className='investrapp-root'>
        <div className='investrapp-title'>Investr</div>
        <SymbolSearch />
      </div>
    );
  }
}

export default InvestrApp;
