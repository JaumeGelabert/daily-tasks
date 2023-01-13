import { Badge } from '@chakra-ui/react';

export default function NumTasksBadge({ num }) {
  return (
    <>
      <Badge ml=".5rem" bg="green.main" color="white" borderRadius="5px" minW="20px">
        {num}
      </Badge>
    </>
  );
}
