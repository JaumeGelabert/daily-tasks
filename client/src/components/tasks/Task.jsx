// Context
import { useContext, useState } from 'react';

// Chakra
import {
  Checkbox,
  Flex,
  LightMode,
  Text,
  useMediaQuery,
} from '@chakra-ui/react';

// Custom components
import { TasksContext } from '../../App';
import UrlBase from '../utils/UrlBase';

// Icons
import { HiTrash as TrashIcon } from 'react-icons/hi2';

// Custom css
import './styles.css';

export default function Task({ text, status, taskId, key }) {
  const [isDesktop] = useMediaQuery('(min-width:800px)');
  const { refreshTasks, setRefreshTasks } = useContext(TasksContext);

  const changeIsChecked = async (taskId) => {
    await fetch(`${UrlBase}/tasks/${taskId}/status`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
    });
    setRefreshTasks(!refreshTasks);
  };

  const deleteTask = async (taskId) => {
    await fetch(`${UrlBase}/tasks/${taskId}/delete`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    });
    setRefreshTasks(!refreshTasks);
  };

  return (
    <>
      <Flex
        w="100%"
        h="fit-content"
        bg="white"
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        p=".4rem 1rem"
        borderRadius="10px"
        mb=".5rem"
        key={key}
        className="parentContainerDelete"
      >
        <Flex>
          <LightMode>
            <Checkbox
              colorScheme="green"
              defaultChecked={status}
              onChange={() => {
                changeIsChecked(taskId);
              }}
            />
          </LightMode>
          <Text
            ml=".5rem"
            fontWeight="medium"
            color={status ? 'gray.200' : 'gray.400'}
          >
            {text}
          </Text>
        </Flex>
        <Flex>
          <TrashIcon
            className="containerDelete"
            color="#667085"
            onClick={() => {
              deleteTask(taskId);
            }}
          />
        </Flex>
      </Flex>
    </>
  );
}
