import React, { Component } from 'react';
import { string } from 'prop-types';

export default class BaseSvg extends Component {
  render() {
    const {
      children,
      className,
      width,
      height,
      color,
      viewBoxWidth,
      viewBoxHeight
    } = this.props;

    return (
      <svg
        className={`icon ${className}`}
        fill={color}
        width={width}
        height={height}
        viewBox={`0 0 ${viewBoxWidth || width} ${viewBoxHeight || height}`}
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
  viewBoxWidth: string,
  viewBoxHeight: string,
  color: string.isRequired
};
