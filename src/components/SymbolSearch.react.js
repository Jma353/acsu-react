// @flow
import type { Symbol } from './types';

import React from 'react';
import axios from 'axios';

type Props = {};

type State = {
  query: string,
  symbols: Array<Symbol>
};

class SymbolSearch extends React.Component<void, Props, State> {
  props: Props;
  state: State;

  constructor (): void {
    super();
    this.state = {
      query: '',
      symbols: []
    };
  }

  componentDidMount (): void {
    axios({
      method: 'get',
      url: 'https://api.iextrading.com/1.0/ref-data/symbols'
    }).then(({data}) => {
      this.setState({symbols: data});
    }).catch((error: Object) => {
      console.log(error);
    });
  }

  render (): React.Element<any> {
    const firstStocks = this.state.symbols.map(s => s.symbol).slice(0, 5);
    return <ul>{firstStocks.map(sName => <li key={sName}>{sName}</li>)}</ul>;
  }
}

export default SymbolSearch;
