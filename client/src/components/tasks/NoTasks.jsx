import { Flex, Text } from '@chakra-ui/react';

export default function NoTasks({ text }) {
  return (
    <>
      <Flex alignItems="center" color="gray.200">
        <Text fontWeight="medium">{text}</Text>
        {/* Maybe add icon */}
      </Flex>
    </>
  );
}
