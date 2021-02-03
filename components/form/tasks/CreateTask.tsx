import Button from 'components/Button';
import Field from 'components/form/components/Field';
import { Form, Formik } from 'formik';
import { FC } from 'react';

const CreateTask: FC = () => (
  <div className="w-full flex-center flex-col">
    <h1 className="text-3xl bold text-justify border-b">Create a new task</h1>
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={(values) => {
        const errors: Partial<typeof values> = {};
        if (!values.email) {
          errors.email = '* Email is required.';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}>
      {({ isSubmitting }) => (
        <Form className="p-4 w-96 flex-center flex-col">
          <Field label="Email" type="email" name="email" placeholder="Email Address" />
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

export default CreateTask;
