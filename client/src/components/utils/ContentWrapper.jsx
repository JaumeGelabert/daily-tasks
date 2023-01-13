import { Flex, useMediaQuery } from '@chakra-ui/react';

export default function ContentWrapper({ children }) {
  const [isDesktop] = useMediaQuery('(min-width: 800px)');
  return (
    <>
      <Flex w="100%" justifyContent="center" bg="#F7F7F7">
        <Flex
          w="100%"
          maxW={isDesktop ? '1000px' : '100%'}
          mx={isDesktop ? 'none' : '5%'}
        >
          {children}
        </Flex>
      </Flex>
    </>
  );
}
