import { Flex, useMediaQuery } from '@chakra-ui/react';
import Feature from '../../../components/features/Feature';
import LargeFeature from '../../../components/features/LargeFeature';

export default function Features() {
  const [isDesktop] = useMediaQuery('(min-width: 800px)');
  return (
    <>
      <Flex direction="column" justifyContent="center" alignItems="center">
        <LargeFeature />
        <Flex
          direction={isDesktop ? 'row' : 'column'}
          justifyContent={isDesktop ? 'space-between' : 'flex-start'}
          alignItems="center"
          w="100%"
        >
          <Feature
            title="Filter tasks"
            text="Search by name, date and categories. Find whatever you are looking for."
          />
          <Feature
            title="Add categories"
            text="Find what you are looking for, faster. Set and delete as many categories as you want."
          />
        </Flex>
      </Flex>
    </>
  );
}
