import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const featureText = defineStyle({
  color: 'gray.200',
  fontWeight: 'normal',
  fontSize: '1.15rem',
});

export const textTheme = defineStyleConfig({
  variants: { featureText },
});
