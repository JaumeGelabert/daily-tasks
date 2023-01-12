import { Box, Flex, Text } from '@chakra-ui/react';

import { Link as ReacherLink } from 'react-router-dom';

export default function LongBadge({ text, to, icon }) {
  return (
    <>
      <Flex
        as={ReacherLink}
        to={to}
        direction="row"
        justifyContent="center"
        alignItems="center"
        bg="green.soft"
        w="fit-content"
        px=".5rem"
        py=".15rem"
        borderRadius=".75rem"
        _hover={{
          backgroundColor: '#CDFAE0',
        }}
      >
        <Text color="gray.400" fontWeight="medium">
          {text}
        </Text>
        <Box ml=".25rem">{icon}</Box>
      </Flex>
    </>
  );
}
