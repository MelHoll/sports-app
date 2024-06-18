import { FC } from 'react';
import classes from './styles.module.scss';


interface ButtonProps  extends React.HTMLAttributes<HTMLButtonElement>{
  label?: string;
  disabled?: boolean;
  secondary?: boolean;
  iconSize?: number;
  LeftIcon?: React.FC<React.SVGProps<SVGSVGElement>>;
  RightIcon?: React.FC<React.SVGProps<SVGSVGElement>>;
}

export const Button: FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  secondary,
  className = '',
  children,
  iconSize = 18,
  LeftIcon,
  RightIcon,
  ...buttonProps
}) => {
  const buttonClass = disabled ? 'disabled' : (secondary ? 'secondary' : 'primary');
  const buttonFontColor: string = classes[`${buttonClass}BtnFontColor`];

  return (
    <button
      title={label}
      {...buttonProps}
      onClick={disabled ? undefined : onClick}
      className={`${className} ${classes.button} ${classes[buttonClass]} ${label ? '' : classes.iconOnly}`}
    >
      {LeftIcon && <LeftIcon height={iconSize} width={iconSize} fill={buttonFontColor}/>}
      {label && <span className={classes.buttonLabel}>{label}</span>}
      {children}
      {RightIcon && <RightIcon height={iconSize} width={iconSize} fill={buttonFontColor}/>}
    </button>
  );
};

Button.displayName = 'Button';

export default Button;
