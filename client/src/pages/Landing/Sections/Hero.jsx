import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Flex,
  Heading,
  useMediaQuery,
} from '@chakra-ui/react';
import LongBadge from '../../../components/badges/LongBadge';

// Routing imports
import { Link as ReacherLink } from 'react-router-dom';

// Icons
import { HiOutlineArrowTopRightOnSquare as ExternalIcon } from 'react-icons/hi2';

export default function Hero() {
  const [isDesktop] = useMediaQuery('(min-width:800px)');
  return (
    <>
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        h={isDesktop ? '80vh' : '100vh'}
        w="100%"
      >
        <Box textAlign="center" mb="2rem">
          <Center mb="1rem">
            <LongBadge
              text="Check the GitHub repo"
              to="/"
              icon={
                <ExternalIcon
                  style={{
                    color: '#101828',
                  }}
                />
              }
            />
          </Center>
          <Heading variant="hero">Your daily tasks</Heading>
          <Heading variant="subhero">As simple as it gets</Heading>
        </Box>
        <ButtonGroup>
          <Button variant="primary" as={ReacherLink} to="/dashboard">
            Create tasks
          </Button>
          <Button variant="secondary">About</Button>
        </ButtonGroup>
      </Flex>
    </>
  );
}
