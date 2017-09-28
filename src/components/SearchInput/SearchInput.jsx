import React, { PureComponent } from 'react';

import PropTypes from 'prop-types';

import Glyph from '../Glyph';
import styles from './styles.scss';

class SearchInput extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.changeText = this.changeText.bind(this);
    this.search = this.search.bind(this);
  }

  changeText(e) {
    const { value } = e.target;

    this.setState({
      value
    });
  }

  search() {
    this.props.search(this.state.value);
  }

  render() {
    return (
      <div>
        <input
          style={{
            width: 200,
            height: 30,
            fontSize: 20
          }}
          value={this.state.value}
          onChange={this.changeText}
        />
        <button
          style={{
            width: 40,
            height: 35,
            fontSize: 20
          }}
          onClick={this.search}
        >
          <Glyph name={'search'} />
        </button>
      </div>
    );
  }
}

SearchInput.proptypes = {
  search: PropTypes.func.isRequired
};

export default SearchInput;
