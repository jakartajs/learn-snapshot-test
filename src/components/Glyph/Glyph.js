import React, { PureComponent } from 'react';

import PropTypes from 'prop-types';
import classNaming from 'classnames';

import './Glyph.css';

class Glyph extends PureComponent {
  render() {
    const { className, name } = this.props;
    const stylename = classNaming(className, 'glyphicon', `glyphicon-${name}`);
    return <span className={stylename} />;
  }
}

Glyph.propTypes = {
  className: PropTypes.any,
  name: PropTypes.any,
};

Glyph.defaultProps = {
  className: '',
  name: '',
};

export default Glyph;
