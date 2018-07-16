import React, { Component } from 'react';
import { string } from 'prop-types';
import * as classNames from 'classnames';

export class SectionTitle extends Component {
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
  text: string,
  highlight: string,
  className: string
};

SectionTitle.defaultProps = {
  rounded: true,
  classNames: 'default'
};
