// src/components/home/Services.tsx
'use client';

import { Box, Container, Flex, Text, Button, Icon, Stack, Card } from "@chakra-ui/react";
import { FaUsersGear, FaCalendarDay, FaLaptopCode, FaChartLine } from "react-icons/fa6";
import { motion } from "framer-motion";
// import { Card } from "../ui/card";

const services = [
  {
    icon: <FaUsersGear />,
    title: "Gestão de Redes Sociais",
    description:
      "Configuração e otimização de perfis em redes sociais (Instagram, Facebook, LinkedIn, TikTok) com interação e gestão de mensagens."
  },
  {
    icon: <FaCalendarDay />,
    title: "Planejamento de Calendário de Postagens",
    description:
      "Estratégia de conteúdo personalizada com foco em datas comemorativas, campanhas e metas para máximo engajamento."
  },
  {
    icon: <FaLaptopCode />,
    title: "Produção de Conteúdo",
    description:
      "Criação de artes e vídeos curtos otimizados para posts, stories e reels, com textos criativos e CTAs."
  },
  {
    icon: <FaChartLine />,
    title: "Análise e Relatórios",
    description:
      "Monitoramento de métricas (alcance, engajamento, crescimento) com relatórios mensais e insights para otimização."
  }
];

const MotionCard = motion(Card.Root);

const cascadeProps = (index: number) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 30 },
  transition: { duration: 0.5, delay: index * 0.2 },
  viewport: { once: true },
});

export default function Services() {
  // const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box as="section" maxH="100%" minH="75vh" display="flex" alignItems="center" py={12}>
      <Container maxW="8xl" centerContent>
        <Stack gap={12} textAlign="center" w="full">
          <Box>
            <Text fontSize={['2xl', '3xl', '4xl']} fontWeight="black" letterSpacing={3} color="#f29f1e">
              NOSSOS SERVIÇOS
            </Text>
            <Text fontSize={['sm', 'md', 'lg']} fontWeight="bold" color="#D3D3D3" mt={2}>
              Soluções completas para sua presença digital
            </Text>
          </Box>

          <Flex direction="row" gap={8} wrap="wrap" justify="center">
            {services.map((service, index) => (
              <MotionCard
                key={index}
                width={['90vw', '45vw', '320px']}
                {...cascadeProps(index)}
              >
                <Card.Body gap="2">
                  <Icon fontSize="40px">{service.icon}</Icon>
                  <Card.Title mt="2">{service.title}</Card.Title>
                  <Card.Description>{service.description}</Card.Description>
                </Card.Body>
                <Card.Footer justifyContent="flex-end">
                  <Button borderRadius="lg" bg={'#f29f1e'}>Solicite um Orçamento</Button>
                </Card.Footer>
              </MotionCard>
            ))}
          </Flex>
        </Stack>
      </Container>
    </Box>
  );
}
