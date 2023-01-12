import { Flex } from '@chakra-ui/react';

export default function ContentWrapper({ children }) {
  return (
    <>
      <Flex w="100%" justifyContent="center">
        <Flex w="100%" maxW="1000px">
          {children}
        </Flex>
      </Flex>
    </>
  );
}
