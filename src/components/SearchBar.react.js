// @flow
import React from 'react';
import SearchResult from './SearchResult.react';

type Props = {
  getSearchResults: string => Array<string>
};

type State = {
  query: string,
  results: Array<string>
};

class SearchBar extends React.Component<void, Props, State> {
  props: Props;
  state: State;

  constructor (props: Props): void {
    super(props);
    this.state = {query: '', results: []};
  }

  handleChange = (event: React.Event): void => {
    const text: string = event.target.value;
    this.setState({
      query: text,
      results: text ? this.props.getSearchResults(text) : []
    });
  }

  render (): React.Element<any> {
    return (
      <div className='searchbar-root'>
        <input
          className='searchbar-input'
          placeholder='Search Symbols and Publicly Traded Companies'
          type='text'
          value={this.props.query}
          onInput={this.handleChange}
        />
        <ul className='searchbar-resultlist'>
          {this.state.results.map((r: string) => {
            return <SearchResult key={r} displayText={r} />;
          })}
        </ul>
      </div>
    );
  }
}

export default SearchBar;
