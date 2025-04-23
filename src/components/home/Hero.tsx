// src/components/sections/Hero.tsx
'use client';

import { Box, Container, Flex, Text } from "@chakra-ui/react";
import * as motion from "motion/react-client";
import Rotate from "../motion/Rotate";
import Carousel from "components/ui/carousel";

export default function Hero() {
  return (
    <>
      <Box bg="" maxH="90vh" minH="90vh" position="relative">
        <Carousel />
      </Box>

      <Box display='flex' maxH='100vh' minH='65vh' alignItems='center' pt={{ base: 12, md: 0 }}>
        <Container centerContent>
          <Flex direction={{ base: 'column', lg: 'row' }} gap={24} align="center">
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.7 }}
            >
              <Box>
                <Flex direction='column'>
                  <Box>
                    <Flex justifyContent='center'>
                      <Rotate />
                    </Flex>
                  </Box>
                  <Box mt='12'>
                    <Flex direction='column' justifyContent='center' textAlign={{ base: 'center', lg: 'start' }}>
                      <Text fontSize={['xl', '2xl', '3xl']} fontWeight='bold' letterSpacing={2}>
                        MAIS QUE UMA AGÊNCIA,
                      </Text>
                      <Text fontSize={['xl', '2xl', '3xl']} fontWeight='bold' letterSpacing={2} color='#f29f1e'>
                        UMA UNIÃO DE TALENTOS
                      </Text>
                    </Flex>
                  </Box>
                </Flex>
              </Box>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{ duration: 0.7 }}
            >
              <Box maxW={550} textAlign={{ base: 'center', lg: 'left' }}>
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 100 }}
                  transition={{ duration: 0.7 }}
                >
                  <Text fontSize={['2xl', '3xl', '4xl']} fontWeight='black' letterSpacing={3} color='#f29f1e'>
                    KURA CRIATIVA
                  </Text>
                </motion.div>
                <Text fontSize={['sm', 'md']} fontWeight='light' color='#D3D3D3'>
                  <br />
                  Consultoria de Imagem + Tecnologia = Marketing Digital com Propósito. Na Kura Criativa, somos a combinação perfeita entre criatividade e estratégia.
                  <br /><br />
                  Aline, especialista em imagem e comunicação visual, uniu forças com Paulo, expert em tecnologia e processos, para criar soluções inovadoras que transformam marcas em histórias de sucesso.
                  <br /><br />
                  Nossa história nasceu da paixão por ajudar pessoas a se expressarem melhor. Inicialmente, começamos como uma consultoria de imagem, mas logo percebemos que poderíamos levar esse mesmo impacto para o mundo dos negócios. Assim, unimos criatividade e tecnologia para oferecer um serviço completo de marketing digital, focado em resultados.
                </Text>
              </Box>
            </motion.div>
          </Flex>
        </Container>
      </Box>
    </>
  );
}