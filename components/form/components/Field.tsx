import cx from 'classnames';
import ErrorMessage from 'components/form/components/ErrorMessage';
import { Field as FieldComponent, FieldAttributes } from 'formik';
import { DetailedHTMLProps, FC, LabelHTMLAttributes } from 'react';

export const Label: FC<
  DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>
> = ({ children, className, ...props }) => (
  <label className={cx('p-2 mr-1', className)} {...props}>
    {children}
  </label>
);

const Field: FC<FieldAttributes<any>> = ({ className, id, name, label, ...props }) => (
  <>
    <div className="flex flex-col w-full">
      {label && <Label htmlFor={id || props.name}>{label}: </Label>}
      <FieldComponent
        id={id || name}
        name={name}
        className={cx('w-full ml-2 py-2', className)}
        autoComplete="off"
        {...props}
      />
    </div>
    <ErrorMessage name={name} component="div" />
  </>
);

export default Field;
