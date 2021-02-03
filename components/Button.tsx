import cx from 'classnames';
import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';

export interface ButtonProps {
  variant?: 'danger' | 'success' | 'info' | 'primary';
}

const Button: FC<
  ButtonProps & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
> = ({ className, variant, ...props }) => (
  <button className={cx('btn mt-4', `btn--${variant}`, className)} {...props}>
    Submit
  </button>
);

Button.defaultProps = {
  variant: 'primary'
};

export default Button;
