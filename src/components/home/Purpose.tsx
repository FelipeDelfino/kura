// src/components/home/Purpose.tsx
'use client';

import { Box, Container, Flex, Text, Button } from "@chakra-ui/react";
import * as motion from "motion/react-client";

export default function Purpose() {
  return (
    <Box as="section" display='flex' maxH='100vh' minH='65vh' alignItems='center' pt={{ base: 20, md: 0 }}>
      <Container centerContent>
        <Flex direction='column' gap={16} h='100%' w='100%'>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.7 }}
          >
            <Flex direction='column' justifyContent='center' alignItems='center' textAlign='center'>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 100 }}
                transition={{ duration: 0.7 }}
              >
                <Text fontSize={['2xl', '3xl', '4xl']} fontWeight='black' letterSpacing={3} color='#f29f1e'>
                  NOSSO PROPÓSITO
                </Text>
              </motion.div>
              <Text fontSize={['sm', 'md']} fontWeight='light' color='#D3D3D3' mt={4} maxW='800px'>
                Criatividade que conecta, estratégia que transforma. Acreditamos que cada marca possui uma essência única. Nossa missão é traduzir essa essência em resultados concretos, construindo conexões autênticas e desenvolvendo estratégias personalizadas que impulsionam o seu negócio.
              </Text>
            </Flex>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.7 }}
          >
            <Flex direction={{ base: 'column', md: 'row' }} gap={8} justifyContent='center' wrap='wrap'>
              {[{
                title: 'CRIATIVIDADE',
                desc: 'Criatividade para conectar com o seu público de forma autêntica.'
              }, {
                title: 'ESTRATÉGIA',
                desc: 'Estratégias personalizadas para impulsionar o seu negócio com resultados concretos.'
              }, {
                title: 'RESULTADOS CONCRETOS',
                desc: 'Traduzimos a essência da sua marca em resultados tangíveis e mensuráveis.'
              }].map((item, i) => (
                <Box key={i} minW={['100%', '300px']} maxW='400px'>
                  <Flex alignItems='center' mb={4}>
                    <Flex minW='40px' minH='40px' bg='#2A2A2A' align='center' justifyContent='center' borderRadius='md'>
                      <Text fontSize='lg' fontWeight='bold'>{i + 1}</Text>
                    </Flex>
                    <Text fontSize={['md', 'lg']} fontWeight='black' letterSpacing={1} pl={4}>
                      {item.title}
                    </Text>
                  </Flex>
                  <Text color='#D3D3D3' fontSize={['sm', 'md']}>
                    {item.desc}
                  </Text>
                </Box>
              ))}
            </Flex>
          </motion.div>

          <Flex direction='column' align='center' gap={4} mt={12} textAlign='center'>
            <Text color='#D3D3D3' fontSize={['sm', 'md']}>
              Quer saber como podemos transformar a sua marca?
            </Text>
            <Button variant='solid' borderRadius='lg' bg='#f29f1e'>Entre em Contato</Button>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
