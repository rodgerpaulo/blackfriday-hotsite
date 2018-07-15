import React, { Component } from 'react';
import { string } from 'prop-types';

export default class BaseSvg extends Component {
  render() {
    const { children, className, width, height, color } = this.props;

    return (
      <svg
        className={`icon ${className}`}
        fill={color}
        width={width}
        height={height}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        {...this.props}
      >
        {children}
      </svg>
    );
  }
}

BaseSvg.propTypes = {
  className: string,
  width: string.isRequired,
  height: string.isRequired,
  color: string.isRequired
};
