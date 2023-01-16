// Chakra UI
import { Divider, Flex, Img, Text, Link } from '@chakra-ui/react';

// Icons
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { FiCode } from 'react-icons/fi';

export default function Footer() {
  return (
    <>
      <Flex direction="column" w="100%" mt="3rem" mb=".5rem">
        <Divider w="100%" borderColor="gray.border" mb=".5rem" />
        <Flex direction="row" justifyContent="space-between">
          <Text fontSize=".95rem" color="gray.200">
            Created by Jaume Gelabert
          </Text>
          <Flex direction="row" alignItems="center" color="gray.200">
            <Link
              mx=".45rem"
              _hover={{ color: 'gray.400' }}
              href="https://www.github.com/JaumeGelabert"
              target="_blank"
              rel="noreferrer"
              alt="github link"
            >
              <FaGithub size="1.2rem" />
            </Link>
            <Link
              mx=".45rem"
              _hover={{ color: 'gray.400' }}
              href="https://www.linkedin.com/in/jaumegelabert/"
              target="_blank"
              rel="noreferrer"
              alt="linkedin link"
            >
              <FaLinkedinIn size="1.2rem" />
            </Link>
            <Link
              mx=".45rem"
              _hover={{ color: 'gray.400' }}
              href="https://www.jaumegelabert.dev"
              target="_blank"
              rel="noreferrer"
              alt="portfolio link"
            >
              <FiCode size="1.2rem" />
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
