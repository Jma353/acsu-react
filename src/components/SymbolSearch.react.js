// @flow
import React from 'react';
import SearchBar from './SearchBar.react';
import axios from 'axios';

type Props = {};

type State = {
  symbols: Array<Object>
};

class SymbolSearch extends React.Component<void, Props, State> {
  state: State;

  constructor (props: Props): void {
    super(props);
    this.state = {symbols: []};
  }

  componentDidMount (): void {
    axios({
      method: 'get',
      url: 'https://api.iextrading.com/1.0/ref-data/symbols'
    }).then((response: Object) => {
      this.setState({
        symbols: response.data
      });
    }).catch((error: Object) => {
      console.log(error);
    });
  }

  _searchSymbols = (query: string): Promise<Array<string>> => {
    const queryDowncased = query.toLowerCase();
    return Promise.resolve(this.state.symbols.filter((s: Object): boolean => {
      const isHit = s.symbol.toLowerCase().indexOf(queryDowncased) !== -1 ||
        s.name.toLowerCase().indexOf(queryDowncased) !== -1;
      return isHit;
    }).map((s: Object): string => {
      return `${s.symbol} | ${s.name}`;
    }));
  };

  render (): React.Element<any> {
    return <SearchBar getSearchResults={this._searchSymbols} />;
  }
}

export default SymbolSearch;
