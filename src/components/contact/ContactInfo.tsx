// src/components/contact/ContactInfo.tsx
'use client';

import { Box, Container, Flex, Text, Link, Separator } from "@chakra-ui/react";

export default function ContactInfo() {
  return (
    <Box bg='' display='flex' alignItems='center' py={8}>
      <Container maxW="4xl" centerContent>
        <Flex align="center" justify="center" gap={8} direction="column" w="full">
          <Flex
            direction={{ base: 'column', md: 'row' }}
            justify="center"
            align="center"
            gap={12}
            pb={12}
            w="full"
          >
            <Flex direction="column" gap={2} align={{ base: 'center', md: 'flex-start' }}>
              <Text fontSize="lg" color="#f29f1e" textAlign={{ base: 'center', md: 'left' }}>
                Fale com a gente! É só clicar aqui:
              </Text>
              <Link>Whats da KC</Link>
              <Text fontSize="lg" color="#f29f1e">Ou se preferir, ligue para:</Text>
              <Link>(11)97215-7732</Link>
            </Flex>

            <Separator orientation={{ base: 'horizontal', md: 'vertical' }} color="#f29f1e" />

            <Flex direction="column" gap={2} align={{ base: 'center', md: 'flex-start' }}>
              <Text fontSize="lg" color="#f29f1e">Mande um Email:</Text>
              <Link>contato@kuracriativa.com.br</Link>
              <Text fontSize="lg" color="#f29f1e">Endereço:</Text>
              <Link textAlign={{ base: 'center', md: 'left' }}>
                R. Jurubatuba, 1350 - CJ 717 - Centro, São Bernardo do Campo - SP, 09725-000
              </Link>
            </Flex>
          </Flex>

          <Text
            fontSize="lg"
            fontWeight="medium"
            textAlign={{ base: 'center', md: 'left' }}
            maxW="2xl"
          >
            Quer saber por onde começar? Mande uma mensagem e receba uma análise gratuita da sua presença digital!
          </Text>
        </Flex>
      </Container>
    </Box>
  );
}