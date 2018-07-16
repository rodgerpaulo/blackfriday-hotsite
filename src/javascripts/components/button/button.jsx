import React, { Component } from 'react';
import { boolean, string } from 'prop-types';
import * as classNames from 'classnames';

export class Button extends Component {
  render() {
    const { children, className, type, rounded } = this.props;
    const classes = classNames('btn', 'sans-bold', className, { rounded });
    const buttonType = type || 'button';

    return (
      <button type={buttonType} className={classes}>
        {children}
      </button>
    );
  }
}

Button.propTypes = {
  rounded: boolean,
  className: string,
  type: string
};

Button.defaultProps = {
  rounded: true,
  classNames: 'default'
};
