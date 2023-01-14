// Context
import { useContext, useState, useEffect } from 'react';

// Custom components
import {
  Button,
  Flex,
  Skeleton,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useToast,
} from '@chakra-ui/react';
import NumTasksBadge from '../../components/badges/NumTasksBadge';
import CreateTask from '../../components/createTask/CreateTask';
import Task from '../../components/tasks/Task';

import ContentWrapper from '../../components/utils/ContentWrapper';
import UrlBase from '../../components/utils/UrlBase';
import { TasksContext } from '../../App';

// Icons
import { HiTrash as TrashIcon } from 'react-icons/hi2';
import NoTasks from '../../components/tasks/NoTasks';

export default function Dashboard() {
  const { refreshTasks, setRefreshTasks } = useContext(TasksContext);

  const [tasksToDo, setTasksToDo] = useState();
  const [tasksDone, setTasksDone] = useState();

  // useState para controlar el Loading
  const [toDoIsLoading, setToDoIsLoading] = useState(true);
  const [doneIsLoading, setDoneIsLoading] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);

  // useState para el console.log
  const [isConsoled, setIsConsoled] = useState(false);

  const toast = useToast();

  if (!isConsoled) {
    console.log('Why couldn’t the React component understand the joke?');
    console.log('Because it didn’t get the context.');
    setIsConsoled(true);
  }

  useEffect(() => {
    fetch(`${UrlBase}/tasks/incomplete`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTasksToDo(data);
      })
      .then(() => {
        setToDoIsLoading(false);
      });
  }, [refreshTasks]);
  useEffect(() => {
    fetch(`${UrlBase}/tasks/complete`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTasksDone(data);
      })
      .then(() => {
        setDoneIsLoading(false);
      });
  }, [refreshTasks]);

  const deleteCompletedTasks = async () => {
    setIsDeleting(true);
    await fetch(`${UrlBase}/tasks/delete/completed`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    });
    toast({
      title: 'All completed tasks delete',
      status: 'success',
      duration: 2000,
      isClosable: true,
    });
    setTimeout(() => {
      setIsDeleting(false);
    }, 1000);
    setRefreshTasks(!refreshTasks);
  };

  return (
    <>
      <Flex w="100%" h="100vh">
        <ContentWrapper>
          <Flex direction="column" alignItems="center" w="100%" mt="10rem">
            <Flex w="100%" justifyContent="center">
              <CreateTask />
            </Flex>
            <Tabs variant="primary" w="100%">
              <TabList>
                <Tab>
                  To-Do
                  <NumTasksBadge
                    num={toDoIsLoading ? '-' : tasksToDo?.length}
                  />
                </Tab>
                <Tab>
                  Done!
                  <NumTasksBadge
                    num={doneIsLoading ? '-' : tasksDone?.length}
                  />
                </Tab>
              </TabList>
              <TabPanels>
                <TabPanel px="0px">
                  <Flex direction="column" alignItems="center" w="100%">
                    {toDoIsLoading ? (
                      <Skeleton height="1rem" w="50%" />
                    ) : tasksToDo?.length === 0 ? (
                      <NoTasks text="Done! Go out and take some sun :)" />
                    ) : (
                      tasksToDo?.map(({ _id, text, isCompleted }) => (
                        <>
                          <Task
                            text={text}
                            status={isCompleted}
                            taskId={_id}
                            key={_id}
                          />
                        </>
                      ))
                    )}
                  </Flex>
                </TabPanel>
                <TabPanel px="0px">
                  <Flex direction="column" alignItems="center" w="100%">
                    {doneIsLoading ? (
                      <Skeleton height="1rem" w="50%" />
                    ) : tasksDone?.length === 0 ? (
                      <NoTasks text="Nothing to see here..." />
                    ) : isDeleting ? (
                      <>
                        <Text color="gray.200" fontWeight="medium">
                          Deleting tasks...
                        </Text>
                      </>
                    ) : (
                      <>
                        <Button
                          rightIcon={<TrashIcon />}
                          mb="1rem"
                          variant="customLink"
                          onClick={() => {
                            deleteCompletedTasks();
                          }}
                        >
                          Delete completed tasks
                        </Button>
                        {tasksDone?.map(({ _id, text, isCompleted }) => (
                          <>
                            <Task
                              text={text}
                              status={isCompleted}
                              taskId={_id}
                              key={_id}
                            />
                          </>
                        ))}
                      </>
                    )}
                  </Flex>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Flex>
        </ContentWrapper>
      </Flex>
    </>
  );
}
