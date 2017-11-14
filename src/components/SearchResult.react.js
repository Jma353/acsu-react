// @flow
import React from 'react';

type Props = {
  displayText: string
};

class SearchResult extends React.Component<void, Props, void> {
  render (): React.Element<any> {
    return (
      <li className='searchresult-root'>
        {this.props.displayText}
      </li>
    );
  }
}

export default SearchResult;
