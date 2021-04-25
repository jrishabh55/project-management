import Button from 'components/Button';
import { Card, CardTitle } from 'components/Card';
import Field from 'components/form/components/Field';
import { useStore } from 'context';
import { Form, Formik, FormikHelpers } from 'formik';
import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import { useLogger } from 'utils/useLogger';

const defaultFormValues = { name: '', description: '', status: 'new' };
type FormValuesType = typeof defaultFormValues;

export interface CreateTaskProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  defaultValues?: typeof defaultFormValues;
}

const CreateTask: FC<CreateTaskProps> = ({ defaultValues = defaultFormValues }) => {
  const { store, types } = useStore();
  const [state, dispatch] = store;

  useLogger(state);

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
      // alert(JSON.stringify(values, null, 2));
      if (values.name.length > 5 && values.description.length > 10 && values.status) {
        dispatch({ type: types.ADD_TASK, payload: values });
      }
      setSubmitting(false);
    }, 2000);
  };

  return (
    <Card className="flex items-center flex-col">
      <CardTitle className="text-3xl bold text-justify pb-1 mb-2">Create a new task</CardTitle>
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
              <option value="new">New</option>
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
    </Card>
  );
};

export default CreateTask;
