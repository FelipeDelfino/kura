// src/components/ui/card.tsx
import { Box, Flex, Text, BoxProps, FlexProps } from "@chakra-ui/react";
import { ReactNode } from "react";

function Root({ children, ...rest }: { children: ReactNode } & BoxProps) {
  return (
    <Box
      bg="gray.900"
      borderRadius="xl"
      p={6}
      boxShadow="md"
      w="full"
      {...rest}
    >
      {children}
    </Box>
  );
}

function Body({ children, gap = "4" }: { children: ReactNode; gap?: string }) {
  return (
    <Flex direction="column" gap={gap}>
      {children}
    </Flex>
  );
}

function Title({ children, ...rest }: { children: ReactNode } & BoxProps) {
  return (
    <Text fontSize="xl" fontWeight="bold" color="white" {...rest}>
      {children}
    </Text>
  );
}

function Description({ children, ...rest }: { children: ReactNode } & BoxProps) {
  return (
    <Text fontSize="md" color="gray.300" {...rest}>
      {children}
    </Text>
  );
}

function Footer({ children, direction = "row", ...rest }: { children: ReactNode } & FlexProps) {
  return (
    <Flex pt={4} direction={direction} {...rest}>
      {children}
    </Flex>
  );
}

export const Card = {
  Root,
  Body,
  Title,
  Description,
  Footer,
};
