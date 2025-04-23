// src/app/servicos/page.tsx
'use client';

import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import { Box, Container, Flex, Text, VStack, Heading, Card, Icon, Button } from '@chakra-ui/react';
import { FaCheck } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function ServicesPage() {
  const cardBaseProps = {
    minW: ['90vw', '40vw', '15vw'],
    maxW: ['90vw', '40vw', '15vw'],
    mt: 8,
  };

  const renderList = (items: string[], color: string) => (
    <VStack align="start" gap={2}>
      {items.map((item, i) => (
        <Flex key={i} align="center">
          <Icon as={FaCheck} color={color} mr={2} />
          <Text>{item}</Text>
        </Flex>
      ))}
    </VStack>
  );

  const MotionBox = motion(Box);
  const MotionCard = motion(Card.Root);

  const cascadeProps = (index: number) => ({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay: index * 0.2 },
    viewport: { once: true }
  });

  return (
    <>
      <Navbar />
      <Container maxW="8xl" py={12}>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.7 }}
        >
          <VStack gap={4} textAlign="center" mb={12} px={4}>
            <Text fontSize={['2xl', '3xl', '4xl']} fontWeight='black' color='#f29f1e'>Soluções sob medida para sua marca</Text>
            <Text fontSize={['md', 'lg']}>
              Do planejamento à execução, cuidamos de tudo para garantir seu sucesso digital.
            </Text>
          </VStack>
        </motion.div>

        <MotionBox py={8} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          <Heading size={['2xl', '3xl']} textAlign="center" mb={8}>Pacotes Recorrentes</Heading>
          <Flex direction='row' gap={8} wrap="wrap" justify="center">
            {[{
              title: 'Plano Inicial',
              items: ['Ideal para quem está começando no digital.', 'Inclui planejamento básico.', '8 postagens mensais.'],
              color: 'green.600'
            }, {
              title: 'Plano Avançado',
              items: ['Gestão completa de redes sociais.', 'Postagens semanais.', 'Monitoramento.', 'Engajamento Estratégico.'],
              color: 'blue.600'
            }, {
              title: 'Plano Premium',
              items: ['Gestão completa de redes sociais.', 'Postagens semanais.', 'Campanhas Pagas.', 'Relatórios Personalizados.', 'Monitoramento.', 'Consultorias Exclusivas.'],
              color: 'red.600'
            }].map((plan, index) => (
              <MotionCard key={index} {...cardBaseProps} {...cascadeProps(index)}>
                <Card.Body gap={6}>
                  <Card.Title fontSize='2xl' textAlign='center'>{plan.title}</Card.Title>
                  {renderList(plan.items, plan.color)}
                </Card.Body>
                <Card.Footer justifyContent="center">
                  <Button borderRadius='lg' bg={plan.color}>Solicite um Orçamento</Button>
                </Card.Footer>
              </MotionCard>
            ))}
          </Flex>
        </MotionBox>

        <MotionBox mt={16} px={4} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          <Heading size={['2xl', '3xl']} textAlign="center" mb={8}>Serviços Pontuais</Heading>
          <Flex direction='row' gap={8} wrap="wrap" justify="center">
            {[{
              title: 'Criação de artes',
              items: ['Artes personalizadas para eventos.', 'Campanhas e ações promocionais.'],
              color: 'yellow.600'
            }, {
              title: 'Consultorias únicas',
              items: ['Sessões específicas para estruturação de conteúdo.', 'Planejamento estratégico.'],
              color: 'yellow.600'
            }].map((service, index) => (
              <MotionCard key={index} {...cardBaseProps} {...cascadeProps(index)}>
                <Card.Body gap={8}>
                  <Card.Title fontSize='2xl' textAlign='center'>{service.title}</Card.Title>
                  {renderList(service.items, service.color)}
                </Card.Body>
                <Card.Footer justifyContent="center">
                  <Button borderRadius='lg' bg={service.color}>Solicite um Orçamento</Button>
                </Card.Footer>
              </MotionCard>
            ))}
          </Flex>
        </MotionBox>

        <MotionBox mt={16} px={4} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          <Heading size={['2xl', '3xl']} textAlign="center" mb={8}>Para Pessoas Físicas</Heading>
          <Flex direction='row' gap={8} wrap="wrap" justify="center">
            {[{
              title: 'Influenciadores',
              items: ['Planejamento de conteúdo alinhado ao nicho.', 'Fortalecimento de marca pessoal.', 'Apoio criativo para reels, posts e stories.'],
              color: 'purple.500'
            }, {
              title: 'Autônomos',
              items: ['Criação de presença digital forte.', 'Consultoria personalizada para serviços.', 'Materiais visuais de apresentação profissional.'],
              color: 'purple.500'
            }].map((person, index) => (
              <MotionCard key={index} {...cardBaseProps} {...cascadeProps(index)}>
                <Card.Body gap={8}>
                  <Card.Title fontSize='2xl' textAlign='center'>{person.title}</Card.Title>
                  {renderList(person.items, person.color)}
                </Card.Body>
                <Card.Footer justifyContent="center">
                  <Button borderRadius='lg' bg={person.color}>Solicite um Orçamento</Button>
                </Card.Footer>
              </MotionCard>
            ))}
          </Flex>
        </MotionBox>
      </Container>
      <Footer />
    </>
  );
}