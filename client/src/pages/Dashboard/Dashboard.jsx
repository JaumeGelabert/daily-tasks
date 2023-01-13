// Context
import { useContext, useState, useEffect } from 'react';

// Custom components
import {
  Button,
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useToast,
  useMediaQuery,
} from '@chakra-ui/react';
import NumTasksBadge from '../../components/badges/NumTasksBadge';
import CreateTask from '../../components/createTask/CreateTask';
import Task from '../../components/tasks/Task';

import ContentWrapper from '../../components/utils/ContentWrapper';
import UrlBase from '../../components/utils/UrlBase';
import { TasksContext } from '../../App';

// Icons
import { HiTrash as TrashIcon, HiSun as SunIcon } from 'react-icons/hi2';
import NoTasks from '../../components/tasks/NoTasks';

export default function Dashboard() {
  const [isDesktop] = useMediaQuery('(min-width:800px)');

  const { refreshTasks, setRefreshTasks } = useContext(TasksContext);

  const [tasksToDo, setTasksToDo] = useState();
  const [tasksDone, setTasksDone] = useState();

  const toast = useToast();

  useEffect(() => {
    fetch(`${UrlBase}/tasks/incomplete`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTasksToDo(data);
      });
  }, [refreshTasks]);
  useEffect(() => {
    fetch(`${UrlBase}/tasks/complete`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTasksDone(data);
      });
  }, [refreshTasks]);

  const deleteCompletedTasks = async () => {
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
    setRefreshTasks(!refreshTasks);
  };

  return (
    <>
      <Flex bg="#F7F7F7" w="100%" h="100vh">
        <ContentWrapper>
          <Flex direction="column" alignItems="center" w="100%" mt="10rem">
            <Flex w="100%" justifyContent="center">
              <CreateTask />
            </Flex>
            <Tabs variant="primary" w="100%">
              <TabList>
                <Tab>
                  To-Do
                  <NumTasksBadge num={tasksToDo?.length} />
                </Tab>
                <Tab>
                  Done!
                  <NumTasksBadge num={tasksDone?.length} />
                </Tab>
              </TabList>
              <TabPanels>
                <TabPanel px="0px">
                  <Flex direction="column" alignItems="center" w="100%">
                    {tasksToDo?.length === 0 ? (
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
                    {tasksDone?.length === 0 ? (
                      <NoTasks text="Nothing to see here..." />
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
