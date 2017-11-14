// @flow
import type { Symbol } from './types';

import React from 'react';
import SearchBar from './SearchBar.react.js';
import axios from 'axios';

type Props = {};

type State = {
  symbols: Array<Symbol>
};

class SymbolSearch extends React.Component<void, Props, State> {
  props: Props;
  state: State;

  constructor (props: Props): void {
    super(props);
    this.state = {symbols: []};
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

  _searchStocks = (query: string): Promise<Array<string>> => {
    const downcasedQuery = query.toLowerCase();
    return Promise.resolve(this.state.symbols.filter((symbol: Symbol) => {
      const isHit =
        symbol.symbol.toLowerCase().indexOf(downcasedQuery) !== -1 ||
        symbol.name.toLowerCase().indexOf(downcasedQuery) !== -1;
      return isHit;
    }).map((symbol: Symbol) => {
      return `${symbol.symbol} | ${symbol.name}`;
    }).slice(0, 5)); // max 5 results
  }

  render (): React.Element<any> {
    return <SearchBar getSearchResults={this._searchStocks} />;
  }
}

export default SymbolSearch;
