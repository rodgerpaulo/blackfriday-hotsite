import React, { Component } from 'react';
import { string, func, bool } from 'prop-types';
import * as classNames from 'classnames';

export class Button extends Component {
  render() {
    const { children, className, type, borderRounded } = this.props;
    const classes = classNames('btn', 'sans-bold', className, {
      rounded: borderRounded
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
  borderRounded: bool,
  className: string,
  type: string,
  onClick: func
};

Button.defaultProps = {
  borderRounded: true,
  classNames: 'default'
};
