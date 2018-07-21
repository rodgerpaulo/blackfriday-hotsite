import React from 'react';
import { string, func, bool } from 'prop-types';
import classNames from 'classnames';

const Button = props => {
  const { children, className, type, roundedBorder, onClick } = props;
  const classes = classNames('btn', 'sans-bold', className, {
    rounded: roundedBorder
  });
  const buttonType = type || 'button';

  return (
    <button type={buttonType} className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

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

export default Button;
