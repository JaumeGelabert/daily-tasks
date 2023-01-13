import { tabsAnatomy } from '@chakra-ui/anatomy';
import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const primary = defineStyle({
  root: {
    maxW: '700px',
    w: '700px',
  },
  tab: {
    p: '.3rem .7rem',
    borderRadius: '10px',
    color: 'green.main',
    _selected: {
      bg: 'green.softActive',
      color: 'green.main',
      fontWeight: 'medium',
    },
  },
});

export const tabsTheme = defineStyleConfig({
  variants: { primary },
});
