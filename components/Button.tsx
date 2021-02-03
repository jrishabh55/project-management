import cx from 'classnames';
import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';

export interface ButtonProps {
  variant?: 'danger' | 'success' | 'info' | 'primary';
  block: boolean;
}

const Button: FC<
  ButtonProps & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
> = ({ className, variant, block, children, ...props }) => (
  <button className={cx('btn', `btn--${variant}`, { block }, className)} {...props}>
    {children}
  </button>
);

Button.defaultProps = {
  variant: 'primary',
  block: false
};

export default Button;
