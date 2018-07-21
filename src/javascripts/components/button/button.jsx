import React, { Component } from 'react';
import { string, func, bool } from 'prop-types';
import classNames from 'classnames';

export class Button extends Component {
  render() {
    const { children, className, type, roundedBorder } = this.props;
    const classes = classNames('btn', 'sans-bold', className, {
      rounded: roundedBorder
    });
    const buttonType = type || 'button';

    return (
      <button
        type={buttonType}
        className={classes}
        onClick={this.props.onClick}
      >
        {children}
      </button>
    );
  }
}

Button.propTypes = {
  roundedBorder: bool,
  className: string,
  type: string,
  onClick: func
};

Button.defaultProps = {
  roundedBorder: true,
  classNames: 'default'
};
