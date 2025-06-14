// src/components/sections/Hero.tsx
'use client';

import { Box, Container, Flex, Stack, Text, Grid, GridItem } from "@chakra-ui/react";
import { Image as ChakraImage } from "@chakra-ui/react"
import * as motion from "motion/react-client";
import Rotate from "../motion/Rotate";
import Carousel from "components/ui/carousel";
import Image from "next/image";
import LogoKuraVertical from "../../../public/kura-vertical.png";

export default function Clients() {
    return (
        <>
            <Box display='flex' maxH='100vh' minH='15vh' alignItems='center' pt={{ base: 12, md: 0 }} bg='#f29f1e' >
                <Container centerContent>
                    <Text fontSize='4xl' fontWeight='semibold'> O TOM DE VOZ ADEQUADO A VOCÊ </Text>
                </Container>
            </Box>
            <Flex direction='column' maxH='100vh' minH='45vh'>
                <Grid templateColumns="repeat(3, 1fr)" bg='white' w='100%' >
                    <GridItem>
                        <Box
                            bg=''
                            h='10vh'
                            display='flex'
                            alignItems='center'
                            justifyContent='center'
                        >
                            <Text
                                fontSize='3xl'
                                fontWeight='medium'
                                color='black'
                            >
                                ESPORTIVO
                            </Text>

                        </Box>
                    </GridItem>
                    <GridItem>
                        <Box
                            bg='#171717'
                            transform="skewX(-16deg)"
                            transformOrigin='bottom right'
                            h='10vh'
                            display='flex'
                            alignItems='center'
                            justifyContent='center'
                        >
                            <Text
                                transform="skewX(16deg)"
                                transformOrigin='bottom right'
                                color='#f29f1e'
                                fontSize='3xl'
                                fontWeight='medium'
                            >
                                PROFISSIONAL
                            </Text>
                        </Box>
                    </GridItem>
                    <GridItem>
                        <Box
                            bg='white'
                            h='10vh'
                            display='flex'
                            alignItems='center'
                            justifyContent='center'
                        >
                            <Text
                                fontSize='3xl'
                                fontWeight='medium'
                                color='black'
                            >
                                UNICO
                            </Text>
                        </Box>
                    </GridItem>
                </Grid>
                <Grid templateColumns="repeat(3, 1fr)" w='100%' bg='' h='40vh'>
                    <GridItem bg=''>
                        <Box bg='' minH='100%'>
                            <ChakraImage
                                fit="cover"
                                src="https://gkfykfburbyl7hji.public.blob.vercel-storage.com/ft2-v2S0l37TOgRpae8lBySPMblLA5Pe2B.png"
                                alt="Dan Abramov"
                            />
                        </Box>
                    </GridItem>
                    <GridItem bg=''>
                        <Box bg='' minH='100%'>
                            <ChakraImage
                                src="https://gkfykfburbyl7hji.public.blob.vercel-storage.com/ft2-v2S0l37TOgRpae8lBySPMblLA5Pe2B.png"
                                alt="Dan Abramov"
                            />
                        </Box>
                    </GridItem>
                    <GridItem bg=''>
                        <Box bg='' minH='100%'>
                            <ChakraImage
                                src="https://gkfykfburbyl7hji.public.blob.vercel-storage.com/ft2-v2S0l37TOgRpae8lBySPMblLA5Pe2B.png"
                                alt="Dan Abramov"
                            />
                        </Box>
                    </GridItem>
                </Grid>
                <Flex alignItems='center' justify='center' minH='15vh'>
                    <Text fontSize='3xl' fontWeight=''> os <b style={{color: '#f29f1e'}}>CLIENTES</b> | que elevaram sua criatividade</Text>
                </Flex>
                <Grid templateColumns="repeat(3, 1fr)" w='100%' bg='white' h='20vh'>
                    <GridItem bg=''>
                        <Box bg='' minH='100%'>
                            <ChakraImage
                                fit="cover"
                                // src="https://gkfykfburbyl7hji.public.blob.vercel-storage.com/ft2-v2S0l37TOgRpae8lBySPMblLA5Pe2B.png"
                                alt="Dan Abramov"
                            />
                        </Box>
                    </GridItem>
                    <GridItem bg=''>
                        <Box bg='' minH='100%'>
                            <ChakraImage
                                // src="https://gkfykfburbyl7hji.public.blob.vercel-storage.com/ft2-v2S0l37TOgRpae8lBySPMblLA5Pe2B.png"
                                alt="Dan Abramov"
                            />
                        </Box>
                    </GridItem>
                    <GridItem bg=''>
                        <Box bg='' minH='100%'>
                            <ChakraImage
                                // src="https://gkfykfburbyl7hji.public.blob.vercel-storage.com/ft2-v2S0l37TOgRpae8lBySPMblLA5Pe2B.png"
                                alt="Dan Abramov"
                            />
                        </Box>
                    </GridItem>
                </Grid>
                {/* <Container centerContent>
          <Flex direction={{ base: 'column', lg: 'row' }}  align="center" justify='space-between' w='100%'>
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
                      <Text fontSize={['xl', '2xl', '3xl']} fontWeight='bold' letterSpacing={2} color='black'>
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
                <Text fontSize={['md', 'lg']} fontWeight='bold' color='#D3D3D3'>
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
        </Container> */}
            </Flex >
        </>
    );
}