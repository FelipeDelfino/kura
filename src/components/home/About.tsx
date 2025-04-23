// src/components/home/About.tsx
'use client';

import { Box, Container, Flex, Text, Card, useBreakpointValue } from "@chakra-ui/react";
import Image from "next/image";
import LogoKuraVertical from "../../../public/kura-vertical.png";

export default function About() {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box
      bgGradient="to-r" gradientFrom="#fcebd2" gradientTo="#f29f1e"
      minH="80vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      mt={{ base: 12, md: 0 }}
      pt={{ base: 12, md: 0 }}
      pb={{ base: 12, md: 0 }}
      px={{ base: 4, md: 0 }}
    >
      <Container maxW="8xl">
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="space-between"
          gap={{ base: 12, md: 24 }}
        >
          <Flex justify="center">
            <Image
              src={LogoKuraVertical}
              alt="Logo Kura Criativa"
              width={isMobile ? 220 : 450}
              style={{ height: "auto" }}
            />
          </Flex>

          <Box
            w={{ base: "100%", md: "35vw" }}
            minH={{ base: "auto", md: "80vh" }}
            bg="#09090B"
            borderRadius={{base:"lg", md:"0", lg:"0"}}
            display="flex"
            alignItems="center"
            justifyContent="center"
            p={{ base: 6, md: 10 }}
          >
            <Card.Root bg="transparent" variant="subtle" size="lg" gap="6">
              <Card.Header gap={4}>
                <Text
                  fontSize={{ base: "2xl", md: "4xl" }}
                  fontWeight="black"
                  letterSpacing={3}
                  color="#f29f1e"
                >
                  QUEM SOMOS
                </Text>
                <Card.Title fontSize={{ base: "lg", md: "xl" }}>
                  Criatividade e Tecnologia para Resultados Reais
                </Card.Title>
              </Card.Header>
              <Card.Body>
                <Card.Description fontSize={{ base: "sm", md: "md" }} color="gray.200">
                  A Kura Criativa nasceu da união de uma criativa e um nerd, com o propósito de transformar pequenos negócios em marcas memoráveis. Desde consultorias personalizadas até estratégias completas de marketing digital, estamos aqui para construir conexões reais e resultados impactantes para nossos clientes.
                </Card.Description>
              </Card.Body>
            </Card.Root>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}