import Button from 'components/Button';
import Field from 'components/form/components/Field';
import { Form, Formik, FormikHelpers } from 'formik';
import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

const defaultFormValues = { name: '', status: '' };
type FormValuesType = typeof defaultFormValues;

export interface CreateTaskProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  defaultValues?: typeof defaultFormValues;
}

const CreateTask: FC<CreateTaskProps> = ({ defaultValues = defaultFormValues }) => {
  const handleValidation = (values: FormValuesType) => {
    const { name, status } = values;
    const errors: Partial<typeof values> = {};
    if (!name) {
      errors.name = '* Name is required.';
    }

    if (!status) {
      errors.status = '* Status is required.';
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
    <div className="flex items-center flex-col -mt-40 nm-convex-gray-600 p-10">
      <h1 className="text-3xl bold text-justify pb-1 mb-2">Create a new task</h1>
      <Formik initialValues={defaultValues} validate={handleValidation} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <Form id="create-task" className="p-4 w-96 flex-center flex-col">
            <Field label="Name" type="text" name="name" placeholder="Task name" />
            <Field
              label="Description"
              placeholder="Task Description"
              component="textarea"
              name="description"
            />
            <Field label="Status" name="status" placeholder="Status" component="select">
              <option value="new" selected>
                New
              </option>
              <option value="pending">Pending</option>
              <option value="done">Done</option>
            </Field>
            <Button
              type="submit"
              disabled={isSubmitting}
              variant="danger"
              block
              className="mt-6 ml-4"
              form="create-task">
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreateTask;
