// src/components/home/Services.tsx
'use client';

import { Box, Container, Flex, Text, Button, Icon, Stack, Card, HStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FeedbackCard } from "../ui/feedbackCard";


export default function FeedBack() {
    // const isMobile = useBreakpointValue({ base: true, md: false });

    return (
        <Box as="section" maxH="" minH="80dvh" display="flex" alignItems="center" py={12} bg=''>
            <Container maxW="8xl" centerContent h='50dvh' bg=''>
                <Flex justify='space-between' direction='column' align='center' bg='' h='100%'>
                    <Text fontSize={['2xl', '3xl', '4xl']} fontWeight="black" letterSpacing={3} color="#f29f1e">
                        SINTA OQUE É <span style={{ color: 'WHITE' }}>SATISFAÇÃO</span>
                    </Text>
                    <HStack mt={12}>

                        <FeedbackCard
                            name="Maria Oliveira"
                            role="Diretora de Marketing"
                            company="Inova Bem"
                            testimony="Profissionalismo, criatividade e foco em resultados. A equipe da Kura é fantástica! Nossas campanhas de marketing nunca foram tão eficientes."
                        />
                        <FeedbackCard
                            name="Ricardo Silva"
                            role="CEO"
                            company="Gremio"
                            testimony="Trabalho impecável."
                        />
                        <FeedbackCard
                            name="Maria Oliveira"
                            role="Diretora de Marketing"
                            company="Inova Bem"
                            testimony="Profissionalismo, criatividade e foco em resultados. A equipe da Kura é fantástica! Nossas campanhas de marketing nunca foram tão eficientes."
                        />
                        <FeedbackCard
                            name="Maria Oliveira"
                            role="Diretora de Marketing"
                            company="Inova Bem"
                            testimony="Profissionalismo, criatividade e foco em resultados. A equipe da Kura é fantástica! Nossas campanhas de marketing nunca foram tão eficientes."
                        />

                    </HStack>
                </Flex>
            </Container>
        </Box>
    );
}
