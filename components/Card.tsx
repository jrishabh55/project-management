import cx from 'classnames';
import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

export const Card: FC<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={cx('p-10 nm-convex-gray-600', className)} {...props}>
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
