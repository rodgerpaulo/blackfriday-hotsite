import React, { Component } from 'react';
import BaseSvg from 'javascripts/components/icons/base-svg';
import { string } from 'prop-types';

export class PercentBadgeIcon extends Component {
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
            fill="#dccca2"
          />
          <path
            d="m45.316 30h4.1211l-16.543 30.586h-4.082l16.504-30.586zm-24.316 7.5195c0-1.3281 0.28971-2.5911 0.86914-3.7891 0.57943-1.1979 1.4648-2.1191 2.6562-2.7637 1.1914-0.64453 2.6009-0.9668 4.2285-0.9668 2.3958 0 4.2838 0.68359 5.6641 2.0508 1.3802 1.3672 2.0703 3.1901 2.0703 5.4688 0 2.2917-0.6901 4.1211-2.0703 5.4883-1.3802 1.3672-3.2682 2.0508-5.6641 2.0508-1.6276 0-3.0371-0.32226-4.2285-0.9668-1.1914-0.64453-2.0768-1.5657-2.6562-2.7637s-0.86914-2.4674-0.86914-3.8086zm5.4883 0.039063c0 1.6146 0.26041 2.7865 0.78125 3.5156 0.33854 0.48177 0.83333 0.72266 1.4844 0.72266 0.65104 0 1.1393-0.24088 1.4648-0.72266 0.52084-0.72917 0.78125-1.901 0.78125-3.5156 0-1.6016-0.26041-2.7734-0.78125-3.5156-0.32552-0.46875-0.8138-0.70312-1.4648-0.70312-0.65104 0-1.1458 0.23437-1.4844 0.70312-0.52084 0.72917-0.78125 1.901-0.78125 3.5156zm15.156 15.449c0-1.3412 0.28646-2.6074 0.85938-3.7988 0.57292-1.1914 1.4583-2.1126 2.6562-2.7637 1.1979-0.65104 2.6042-0.97656 4.2188-0.97656 2.4089 0 4.3034 0.68684 5.6836 2.0605s2.0703 3.1999 2.0703 5.4785-0.6901 4.1048-2.0703 5.4785-3.2747 2.0605-5.6836 2.0605c-1.6146 0-3.0208-0.32552-4.2188-0.97656-1.1979-0.65104-2.0833-1.5723-2.6562-2.7637-0.57292-1.1914-0.85938-2.4577-0.85938-3.7988zm5.4883 0.039062c0 1.6146 0.26041 2.7865 0.78125 3.5156 0.32552 0.46875 0.8138 0.70312 1.4648 0.70312 0.65104 0 1.1458-0.23437 1.4844-0.70312 0.52084-0.72917 0.78125-1.901 0.78125-3.5156s-0.26041-2.793-0.78125-3.5352c-0.33854-0.46875-0.83333-0.70312-1.4844-0.70312-0.65104 0-1.1393 0.24088-1.4648 0.72266-0.52084 0.72917-0.78125 1.901-0.78125 3.5156z"
            fill="#ab9fb5"
          />
        </g>
      </BaseSvg>
    );
  }
}

PercentBadgeIcon.propTypes = {
  className: string,
  width: string,
  height: string,
  color: string
};

PercentBadgeIcon.defaultProps = {
  className: '',
  width: '78',
  height: '90',
  color: '#ffc62d'
};