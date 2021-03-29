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
