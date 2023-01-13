import { Flex, Heading, Text } from '@chakra-ui/react';

import featureImg from '../../images/feature.jpeg';

export default function LargeFeature() {
  return (
    <>
      <Flex
        bg="gray.bg"
        w="100%"
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
        borderRadius="10px"
        p="2rem 0rem 2rem 2rem"
        mb="30px"
      >
        <Flex direction="column" w="100%">
          <Heading variant="featureTitle" mb="1rem">
            Focus on what matters
          </Heading>
          <Text variant="featureText" mb=".5rem">
            Create your daily tasks without distractions. Add tasks, work and
            finish them. When the day is done, delete it all.
          </Text>
          <Text variant="featureText" mb=".5rem">
            Like agile methodologies, iterate quickly, adapt to conditions, and
            complete useful tasks.
          </Text>
        </Flex>
        <Flex w="100%">
          <Flex h="250px" justifyContent="flex-end" mt="2rem">
            <img alt="feature" src={featureImg} />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
