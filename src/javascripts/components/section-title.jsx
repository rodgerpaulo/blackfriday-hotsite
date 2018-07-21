import React, { Component } from 'react';
import { string } from 'prop-types';
import classNames from 'classnames';

export default class SectionTitle extends Component {
  render() {
    const { text, highlight, className } = this.props;
    const classes = classNames('arial-title', 'section-title', className);
    return (
      <h1 className={classes}>
        {text}{' '}
        {highlight ? (
          <span className="section-title__highlight">{highlight}</span>
        ) : (
          ''
        )}
      </h1>
    );
  }
}

SectionTitle.propTypes = {
  text: string.isRequired,
  highlight: string,
  className: string
};

SectionTitle.defaultProps = {
  classNames: 'default',
  highlight: ''
};
