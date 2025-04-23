// src/components/layout/Navbar.tsx
'use client';

import {
  Box,
  Container,
  Flex,
  HStack,
  Link,
  Button,
  IconButton,
  VStack,
  CloseButton,
  Drawer
} from '@chakra-ui/react';
import { FiMenu } from 'react-icons/fi';
import Image from 'next/image';
import { useState } from 'react';
import Logo from '../../../public/kura.png';

const links = [
  { label: 'Inicio', href: '/#home' },
  { label: 'Serviços', href: '/servicos' },
  { label: 'Portfólio', href: '#' },
  { label: 'Sobre', href: '/#about' },
  { label: 'Contato', href: '/#contact' }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <Box bg="#2A2A2A" minH="10vh" shadow="lg" position="sticky" top={0} zIndex={10}>
      <Container maxW="8xl" h="10vh">
        <Flex align="center" justify="space-between" h="100%">
          <Box>
            <Image src={Logo} alt="Logo Kura Criativa" width={150} height={80} />
          </Box>

          {/* Desktop Links */}
          <HStack gap={10} display={{ base: 'none', md: 'flex' }}>
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                position="relative"
                _after={{
                  content: '""',
                  position: 'absolute',
                  width: '100%',
                  height: '2.5px',
                  bottom: '0',
                  left: '0',
                  bg: '#f29f1e',
                  transform: 'scaleX(0)',
                  transformOrigin: 'right',
                  transition: 'transform 0.3s ease-out',
                  borderRadius: 'full'
                }}
                _hover={{
                  textDecoration: 'none',
                  color: 'orange.50',
                  _after: {
                    transform: 'scaleX(1)',
                    transformOrigin: 'left'
                  }
                }}
              >
                {link.label}
              </Link>
            ))}
          </HStack>

          {/* Desktop Button */}
          <Box display={{ base: 'none', md: 'block' }}>
            <Button bg="#f29f1e" borderRadius="full" _hover={{ background: '#c47900' }}>
              Solicite um Orçamento
            </Button>
          </Box>

          {/* Mobile Menu Icon */}
          <IconButton
            aria-label="Abrir menu"
            variant='outline'
            display={{ base: 'inline-flex', md: 'none' }}
            onClick={() => setOpen(true)}
          >
            <FiMenu  />
          </IconButton>
        </Flex>
      </Container>

      {/* Mobile Drawer (Chakra UI 3.x compliant) */}
      <Drawer.Root open={open} onOpenChange={(e) => setOpen(e.open)}>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content bg="#2A2A2A">
            <Drawer.Header>
              <Flex justify="space-between" align="center">
                <Box color="white">Menu</Box>
                <Drawer.CloseTrigger asChild>
                  <CloseButton color="white" />
                </Drawer.CloseTrigger>
              </Flex>
            </Drawer.Header>
            <Drawer.Body>
              <VStack align="start" gap={6} mt={4}>
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    color="white"
                    fontSize="lg"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <Button
                  mt={6}
                  bg="#f29f1e"
                  borderRadius="lg"
                  _hover={{ bg: '#c47900' }}
                  onClick={() => setOpen(false)}
                >
                  Solicite um Orçamento
                </Button>
              </VStack>
            </Drawer.Body>
          </Drawer.Content>
        </Drawer.Positioner>
      </Drawer.Root>
    </Box>
  );
}