// Custom components
import { Flex } from '@chakra-ui/react';
import ContentWrapper from '../../components/utils/ContentWrapper';
import Features from './Sections/Features';

// Sections
import Hero from './Sections/Hero';

export default function Landing() {
  return (
    <>
      <ContentWrapper>
        <Flex
          direction="column"
          justifyContent="center"
          alignItems="center"
          w="100%"
        >
          <Hero />
          <Features />
        </Flex>
      </ContentWrapper>
    </>
  );
}
