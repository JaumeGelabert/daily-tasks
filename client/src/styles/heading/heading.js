import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const hero = defineStyle({
  color: 'gray.400',
  fontWeight: 'bold',
  fontSize: '3rem',
  marginBottom: '.25rem',
});

const subhero = defineStyle({
  color: 'gray.200',
  fontWeight: 'medium',
  fontSize: '1.75rem',
  marginBottom: '.25rem',
});

const featureTitle = defineStyle({
  color: 'gray.400',
  fontWeight: 'semibold',
  fontSize: '2rem',
});

export const headingTheme = defineStyleConfig({
  variants: { hero, subhero, featureTitle },
});
