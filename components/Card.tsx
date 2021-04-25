import cx from 'classnames';
import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

export const Card: FC<
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
    sm?: boolean;
    rounded?: boolean;
  }
> = ({ children, className, rounded = false, sm = false, ...props }) => {
  return (
    <div
      className={cx('nm-convex-gray-600 m-4', sm ? 'p-2' : 'p-10', { rounded }, className)}
      {...props}>
      {children}
    </div>
  );
};

export const CardTitle: FC<
  DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>
> = ({ children, className, ...props }) => (
  <h1 className={cx('text-3xl bold text-justify pb-1 mb-2', className)} {...props}>
    {children}
  </h1>
);
