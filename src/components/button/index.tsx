import { FC, MouseEventHandler } from 'react';
import classes from './styles.module.scss';

interface ButtonProps {
  label?: string;
  onClick?: MouseEventHandler;
  disabled?: boolean;
  className?: string;
  loading?: boolean;
  children?: JSX.Element[] | JSX.Element;
  LeftIcon?: React.FC;
  RightIcon?: React.FC;
}

export const Button: FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  className = '',
  children,
  LeftIcon,
  RightIcon,
  ...buttonProps
}) => {

  return (
    <button
      {...buttonProps}
      onClick={disabled ? undefined : onClick}
      className={`${classes.button} ${className}`}
      title={label}
    >
      {LeftIcon && <LeftIcon />}
      <span className={classes.buttonLabel}>{label}</span>
      {children}
      {RightIcon && <RightIcon />}
    </button>
  );
};

Button.displayName = 'Button';

export default Button;
