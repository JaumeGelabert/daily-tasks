// Chakra imports
import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Flex,
  Heading,
  Link,
} from '@chakra-ui/react';

// Routing imports
import { Link as ReacherLink } from 'react-router-dom';

// Icons
import { HiOutlineArrowTopRightOnSquare as ExternalIcon } from 'react-icons/hi2';

// Custom components
import LongBadge from '../../components/badges/LongBadge';
import ContentWrapper from '../../components/utils/ContentWrapper';

export default function Landing() {
  return (
    <>
      <ContentWrapper>
        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          h="100vh"
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
        {/* Absolute position */}
        <Flex
          justifyContent="center"
          pos="absolute"
          bottom="0"
          right="0"
          left="0"
          mx="auto"
          mb="10px"
        >
          <Link as={ReacherLink} to="/link" variant="primary">
            Jaume Gelabert
          </Link>
        </Flex>
      </ContentWrapper>
    </>
  );
}
