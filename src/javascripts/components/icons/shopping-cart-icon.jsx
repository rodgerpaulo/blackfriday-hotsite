import React, { PureComponent } from 'react';
import BaseSvg from './base-svg';
import { string } from 'prop-types';

export default class ShoppingCartIcon extends PureComponent {
  render() {
    const {
      width,
      height,
      className,
      color,
      viewBoxWidth,
      viewBoxHeight
    } = this.props;
    return (
      <BaseSvg
        className={className}
        width={width}
        height={height}
        viewboxwidth={viewBoxWidth || width}
        viewboxheight={viewBoxHeight || width}
        color={color}
      >
        <g fill="none" fillRule="evenodd">
          <path
            d="m7 18c-1.1 0-1.99 0.9-1.99 2s0.89 2 1.99 2 2-0.9 2-2-0.9-2-2-2zm-6-16v2h2l3.6 7.59-1.35 2.45c-0.16 0.28-0.25 0.61-0.25 0.96 0 1.1 0.9 2 2 2h12v-2h-11.58c-0.14 0-0.25-0.11-0.25-0.25l0.03-0.12 0.9-1.63h7.45c0.75 0 1.41-0.41 1.75-1.03l3.58-6.49c0.08-0.14 0.12-0.31 0.12-0.48 0-0.55-0.45-1-1-1h-14.79l-0.94-2h-3.27zm16 16c-1.1 0-1.99 0.9-1.99 2s0.89 2 1.99 2 2-0.9 2-2-0.9-2-2-2z"
            fill={color}
            fillRule="nonzero"
          />
        </g>
      </BaseSvg>
    );
  }
}

ShoppingCartIcon.propTypes = {
  className: string,
  width: string,
  height: string,
  viewBoxWidth: string,
  viewBoxHeight: string,
  color: string
};

ShoppingCartIcon.defaultProps = {
  className: '',
  width: '36',
  height: '36',
  viewBoxWidth: '24',
  viewBoxHeight: '24',
  color: '#fff'
};
