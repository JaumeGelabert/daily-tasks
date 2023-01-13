import { Box, Flex, Text } from '@chakra-ui/react';

export default function LongBadge({ text, icon }) {
  return (
    <>
      <a
        href="https://www.github.com/JaumeGelabert/daily-tasks"
        target="_blank"
        rel="noreferrer"
      >
        <Flex
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
      </a>
    </>
  );
}
