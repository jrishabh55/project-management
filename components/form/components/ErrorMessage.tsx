import cx from 'classnames';
import { ErrorMessage as ErrorMessageComponent, ErrorMessageProps } from 'formik';
import { FC } from 'react';

const ErrorMessage: FC<ErrorMessageProps> = ({ className, ...props }) => (
  <ErrorMessageComponent className={cx('error-message', className)} {...props} />
);

export default ErrorMessage;
