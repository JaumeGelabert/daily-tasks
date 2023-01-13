import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const pill = defineStyle({
  field: {
    border: '1px solid',
    borderColor: 'gray.border',
    background: 'gray.50',
    color: 'gray.400',
    fontSize: '1rem',
    fontWeight: 'medium',
    _hover: {
      borderColor: 'gray.borderHover',
    },
  },

  addon: {
    border: '1px solid',
    borderColor: 'gray.200',
    background: 'gray.200',
    borderRadius: 'full',
    color: 'gray.500',
  },
});

export const inputTheme = defineStyleConfig({
  variants: { pill },
});
