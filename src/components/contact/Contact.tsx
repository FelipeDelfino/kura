// src/components/contact/Contact.tsx
'use client';

import { Box, Container, Flex, Text } from "@chakra-ui/react";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <Box as="section" minH="75vh" pt={{ base: 12, md: 20 }}>
      <Container maxW="8xl">
        <Flex direction="column" gap={12}>
          <Text
            fontSize={["2xl", "3xl", "4xl"]}
            fontWeight="black"
            letterSpacing={3}
            color="#f29f1e"
            textAlign={{ base: "center", md: "left" }}
          >
            PRONTO PARA LEVAR SUA MARCA PARA O PRÓXIMO NÍVEL?
          </Text>

          <Flex
            direction={{ base: "column", md: "row" }}
            gap={8}
            justify="space-between"
            align="stretch"
          >
            <Box flex={1}><ContactForm /></Box>
            <Box flex={1}><ContactInfo /></Box>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
