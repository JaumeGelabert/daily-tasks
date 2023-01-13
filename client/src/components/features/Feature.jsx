import { Flex, Heading, Text } from '@chakra-ui/react';

export default function Feature({ title, text }) {
  return (
    <>
      <Flex
        w="48.5%"
        bg="gray.bg"
        direction="column"
        justifyContent="space-between"
        alignItems="flex-start"
        borderRadius="10px"
        p="2rem"
        mb="30px"
      >
        <Flex
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          mb="1rem"
          w="100%"
        >
          <Heading variant="featureTitle">{title}</Heading>
          <Flex borderRadius="8px" bg="green.softActive" p=".2rem .5rem">
            <Text color="green.main" fontWeight="medium">
              Coming soon
            </Text>
          </Flex>
        </Flex>
        <Text variant="featureText" mb=".5rem">
          {text}
        </Text>
      </Flex>
    </>
  );
}
