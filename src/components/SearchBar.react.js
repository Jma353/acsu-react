// @flow
import React from 'react';

type Props = {
  getSearchResults: string => Promise<Array<string>>
};

type State = {
  results: Array<string>,
  query: string
};

class SearchBar extends React.Component<void, Props, State> {
  state: State;
  constructor (props: Props) {
    super(props);
    this.state = {
      results: [],
      query: ''
    };
  }

  handleInput = (event: Object): void => {
    const text = event.target.value;
    if (!text) {
      this.setState({results: [], query: text});
    } else {
      this.setState({query: text});
      this.props.getSearchResults(text)
        .then((results: Array<string>) => {
          this.setState({results: results});
        });
    }
  }

  render (): React.Element<any> {
    return (
      <div className='searchbar-root'>
        <input
          placeholder='Search for Symbols or Publicly-Traded Company Names'
          value={this.state.query}
          type='text'
          onInput={this.handleInput}
        />
        <ul>
          {this.state.results.map(r => {
            return <li key={r}>{r}</li>;
          }).slice(0, 5)}
        </ul>
      </div>
    );
  }
}

export default SearchBar;
