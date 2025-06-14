// src/components/home/Services.tsx
'use client';

import { Box, Container, Flex, Text, Button, Icon, Stack, Card } from "@chakra-ui/react";
import { FaUsersGear, FaCalendarDay, FaLaptopCode, FaChartLine } from "react-icons/fa6";
import { motion } from "framer-motion";
import ServiceCarousel from "components/ui/serviceCarousel";
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
    <Box as="section" maxH="100%" minH="80dvh" display="flex" alignItems="center" py={12} bg='#f29f1e'>
      <Container maxW="8xl" centerContent>
        {/* <Box> */}
        <Text fontSize={['2xl', '3xl', '4xl']} fontWeight="black" letterSpacing={3} color="">
          OQUE VOCÊ <span style={{ color: 'black' }}>PRECISA</span> E MUITO <span style={{ color: 'black' }}>MAIS!</span>
        </Text>
        <Text fontSize={['sm', 'md', 'lg']} fontWeight="bold" color="black" mt={2}>
          NOSSOS SERVIÇOS
        </Text>
        <ServiceCarousel />
      </Container>
    </Box>
  );
}
