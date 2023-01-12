import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const primary = defineStyle({
  color: 'gray.200',
  fontWeight: 'medium',
  fontSize: '1rem',
  _hover: {
    color: 'green.main',
    textDecoration: 'none',
  },
  _active: {
    color: 'green.hover',
  },
});

export const linkTheme = defineStyleConfig({
  variants: { primary },
});

