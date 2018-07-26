import React, { PureComponent } from 'react';
import BaseSvg from 'javascripts/components/icons/base-svg';
import { string } from 'prop-types';

export default class DiscountBadgeIcon extends PureComponent {
  render() {
    const { width, height, className, color } = this.props;
    return (
      <BaseSvg
        className={className}
        width={width}
        height={height}
        color={color}
      >
        <g fill="none" fillRule="evenodd">
          <polygon
            points="38.995 89.976 0 67.482 0 22.494 38.995 0 77.991 22.494 77.991 67.482"
            fill="#FFC62D"
          />
          <text
            fill="#262626"
            fontFamily="Arial-Black, Arial"
            fontSize="33"
            fontWeight="700"
            line-spacing="33"
          >
            <tspan x="16" y="50">
              50
            </tspan>
          </text>
          <text
            fill="#262626"
            fontFamily="Arial-Black, Arial"
            fontSize="12"
            fontWeight="700"
          >
            <tspan x="59" y="39">
              %
            </tspan>
          </text>
          <text
            fill="#262626"
            fontFamily="Arial-BoldMT, Arial"
            fontSize="9"
            fontWeight="bold"
          >
            <tspan x="15" y="62">
              + BARATO
            </tspan>
          </text>
        </g>
      </BaseSvg>
    );
  }
}

DiscountBadgeIcon.propTypes = {
  className: string,
  width: string,
  height: string,
  color: string
};

DiscountBadgeIcon.defaultProps = {
  className: '',
  width: '78',
  height: '90',
  color: '#ffc62d'
};
