import Button from 'components/Button';
import Field from 'components/form/components/Field';
import { Form, Formik, FormikHelpers } from 'formik';
import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

const defaultFormValues = { name: '', password: '' };
type FormValuesType = typeof defaultFormValues;

const CreateTask: FC<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = () => {
  const handleValidation = (values: FormValuesType) => {
    const errors: Partial<typeof values> = {};
    if (!values.name) {
      errors.name = '* Email is required.';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.name)) {
      errors.name = 'Invalid email address';
    }
    return errors;
  };

  const handleSubmit = (
    values: FormValuesType,
    { setSubmitting }: FormikHelpers<FormValuesType>
  ) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  return (
    <div className="flex items-center flex-col -mt-40 border-4 p-10">
      <h1 className="text-3xl bold text-justify border-b mb-2">Create a new task</h1>
      <Formik initialValues={defaultFormValues} validate={handleValidation} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <Form className="p-4 w-96 flex-center flex-col">
            <Field label="Name" type="text" name="name" placeholder="Task name" />
            <Field label="Password" placeholder="Password" type="password" name="password" />
            <Button
              type="submit"
              disabled={isSubmitting}
              variant="danger"
              block
              className="mt-6 ml-4">
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreateTask;
