import React, { PureComponent } from 'react';
import BaseSvg from './base-svg';
import { string } from 'prop-types';

export class CloseIcon extends PureComponent {
  render() {
    const { width, height, className, color } = this.props;
    return (
      <BaseSvg
        className={className}
        width={width}
        height={height}
        color={color}
      >
        <g fill="none" fillRule="evenodd" opacity=".54">
          <g transform="translate(-415 -99)" fill={color}>
            <g transform="translate(416 99)">
              <polygon points="19 6.4 17.6 5 12 10.6 6.4 5 5 6.4 10.6 12 5 17.6 6.4 19 12 13.4 17.6 19 19 17.6 13.4 12" />
            </g>
          </g>
        </g>
      </BaseSvg>
    );
  }
}

CloseIcon.propTypes = {
  className: string,
  width: string,
  height: string,
  color: string
};

CloseIcon.defaultProps = {
  className: '',
  width: '24',
  height: '24',
  color: '#505050'
};
