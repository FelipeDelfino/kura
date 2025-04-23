// src/components/layout/Footer.tsx
'use client';

import {
  Box,
  Container,
  Flex,
  Text,
  Link,
  Icon,
  VStack,
  HStack,
  Stack,
  Separator
} from '@chakra-ui/react';
import Image from 'next/image';
import Logo from '../../../public/kura.png';
import { FaInstagram, FaFacebookSquare } from 'react-icons/fa';

export default function Footer() {
  return (
    <Box as="footer" bg='#111111' py={12} mt={8}>
      <Container maxW="5xl">
        <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" wrap="wrap" gap={10}>
          <Box>
            <Image src={Logo} alt="Logo Kura Criativa" width={200} height={200} />
          </Box>

          <Stack direction={{ base: 'column', sm: 'row' }} gap={10} flexWrap="wrap">
            <VStack align="start" gap={2}>
              <Text fontWeight='bold' color='gray.100'>Navegação</Text>
              <Link href="/#home">Inicio</Link>
              <Link href="/servicos">Serviços</Link>
              <Link href="#">Portfólio</Link>
            </VStack>

            <VStack align="start" gap={2}>
              <Text fontWeight='bold' color='gray.100'>Empresa</Text>
              {/* <Link href="#">Blog</Link> */}
              <Link href="/#about">Sobre</Link>
              <Link href="/#contact">Contato</Link>
            </VStack>

            <VStack align="start" gap={2}>
              <Text fontWeight='bold' color='gray.100'>Suporte</Text>
              <Link href="/#contact">Fale Conosco</Link>
            </VStack>

            <VStack align="start" gap={2}>
              <Text fontWeight='black' fontSize='lg' color='#f29f1e'>Siga-nos</Text>
              <HStack gap={4}>
                <Link href='https://instagram.com' >
                  <Icon as={FaInstagram} fontSize='25px' />
                </Link>
                <Link href='https://facebook.com' >
                  <Icon as={FaFacebookSquare} fontSize='25px' />
                </Link>
              </HStack>
            </VStack>
          </Stack>
        </Flex>

        <Separator my={8} borderColor='gray.700' />

        <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" align={{ base: 'start', md: 'center' }}>
          <Text fontSize='sm' color='gray.500'>© 2025 Todos os direitos reservados.</Text>
          <Text fontSize='sm' color='gray.500'>Desenvolvido por KURA CRIATIVA</Text>
        </Flex>
      </Container>
    </Box>
  );
}
