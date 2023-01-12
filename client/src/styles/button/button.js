import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const primary = defineStyle({
  backgroundColor: 'green.main',
  color: 'white',
  _hover: {
    backgroundColor: 'green.hover',
  },
  _active: {
    backgroundColor: 'green.active',
  },
});
const secondary = defineStyle({
  backgroundColor: 'white',
  border: '2px solid',
  borderColor: 'green.main',
  color: 'gray.400',
  _hover: {
    backgroundColor: 'green.soft',
  },
  _active: {
    backgroundColor: 'green.softActive',
  },
});

export const buttonTheme = defineStyleConfig({
  variants: { primary, secondary },
});
