// Context
import { useState, useContext } from 'react';

// Chakra UI
import {
  Button,
  Flex,
  FormControl,
  Input,
  useMediaQuery,
} from '@chakra-ui/react';

// Formik & Yup
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import { TasksContext } from '../../App';
import UrlBase from '../utils/UrlBase';

const newTaskSchema = yup.object().shape({
  text: yup.string().required('Describe una tarea'),
  isCompleted: yup.bool(),
});

const initialValuesTask = {
  text: '',
  isCompleted: false,
};

export default function CreateTask() {
  const [isDesktop] = useMediaQuery('(min-width:800px)');
  const [isLoading, setIsLoading] = useState(false);
  const { refreshTasks, setRefreshTasks } = useContext(TasksContext);

  const newTask = async (values, onSubmitProps) => {
    await fetch(`${UrlBase}/tasks/new`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    });
    onSubmitProps.resetForm();
  };

  const handleFormSubmit = async (values, onSubmitProps) => {
    setIsLoading(!isLoading);
    await newTask(values, onSubmitProps);
    setRefreshTasks(!refreshTasks);
    setIsLoading(!isLoading);
  };

  return (
    <>
      <Flex
        w="100%"
        maxW={isDesktop ? '700px' : '100%'}
        h="fit-content"
        mb="2rem"
        direction="column"
      >
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValuesTask}
          validationSchema={newTaskSchema}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
          }) => (
            <>
              <Form onSubmit={handleSubmit}>
                <Flex
                  direction={isDesktop ? 'row' : 'column'}
                  w={isDesktop ? '100%' : '90%'}
                >
                  <Input
                    variant="pill"
                    type="text"
                    placeholder="Remember, hard work pays off"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.text}
                    name="text"
                    w="100%"
                  />
                  <Button
                    type="submit"
                    variant="primary"
                    ml={isDesktop ? '1rem' : null}
                    mt={isDesktop ? null : '1rem'}
                  >
                    Crear task
                  </Button>
                </Flex>
              </Form>
            </>
          )}
        </Formik>
      </Flex>
    </>
  );
}
