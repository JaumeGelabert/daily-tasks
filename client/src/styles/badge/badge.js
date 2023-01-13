import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const fecha = defineStyle({
  backgroundColor: '#DADEE4',
  color: 'gray.200',
  fontWeight: 'medium',
  borderRadius: '5px',
  px: '.5rem',
});

export const badgeTheme = defineStyleConfig({
  variants: { fecha },
});
