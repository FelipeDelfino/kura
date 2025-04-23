// import { Box, Button, Container, Flex, HStack, Link, Stack, VStack, Text, Separator, Icon, Card, Input, Textarea } from "@chakra-ui/react";
// import { FaCalendarDay, FaChartLine, FaFacebook, FaInstagram, FaLaptopCode, FaUsersGear } from "react-icons/fa6";
// import { Swiper, SwiperSlide } from 'swiper/react';

// import 'swiper/css';

// import { Avatar } from "@/components/ui/avatar"
// import Image from "next/image";
// import * as motion from "motion/react-client"

// import UseAnimationFrame from "@/components/motion/cubic";

// import Back1 from '../../public/back1m.png'
// import BackT from '../../public/backt.png'
// import Logo from '../../public/kura.png'
// import LogoKura from '../../public/logo-kura.png'
// import LogoKuraB from '../../public/logo-kura-black.png'
// import LogoKuraT from '../../public/logo-kura-transparent.png'
// import LogoKuraVertical from '../../public/kura-vertical.png'
// import Cubic from "@/components/motion/cubic";
// import StepFlags from "@/components/motion/flags";
// import { RiInstagramFill } from "react-icons/ri";
// import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
// import { CiInstagram } from "react-icons/ci";
// import { Field } from "@/components/ui/field";
// import Carousel from "@/components/ui/carousel";


// export function Rotate() {
//   return (
//     <motion.div
//       style={box}
//       // animate={{ rotate: 360 }}
//       transition={{ duration: 1 }}
//       initial={{ opacity: 0, x: -100, rotate: 360 }}
//       whileInView={{ opacity: 1, x: 0 }}
//       exit={{ opacity: 0, x: -100 }}

//     >
//       <Image
//         src={LogoKuraT}
//         alt="Picture of the author"
//         width={150}
//         height={150}
//       />
//     </motion.div>
//   )
// }

// const box = {
//   display: "flex",
//   alignItems: "center",
//   paddingBottom: 1,
//   justifyContent: "center",
//   width: 200,
//   height: 200,
//   backgroundColor: "#f29f1e",
//   borderRadius: 5,
//   boxShadow: '0 0 5px #f29f1e, 0 0 30px #f29f1e'

// }

// export default function Home() {
//   return (
//     <>
//       {/* NavBar */}

//       <Box bg={"#2A2A2A"} minH={'10vh'} shadow={'lg'} shadowColor='black'>
//         <Container bg={""} h='10vh'>
//           <Flex align="center" justify="space-between" h={'100%'}>
//             <Box bg={''} maxH={'10vh'}>
//               <Image
//                 src={Logo}
//                 alt="Logo Kura Criativa"
//                 width={150}
//                 height={80}
//               />
//             </Box>
//             <Box>
//               <HStack gap={10}>
//                 <Link href="#"
//                   position="relative"

//                   _after={{
//                     content: '""',
//                     position: "absolute",
//                     width: "100%",
//                     height: "2.5px",
//                     bottom: "0",
//                     left: "0",
//                     bg: "#f29f1e",
//                     transform: "scaleX(0)",
//                     transformOrigin: "right",
//                     transition: "transform 0.3s ease-out",
//                     borderRadius: "full",
//                   }}
//                   _hover={{
//                     textDecoration: "none",
//                     color: "orange.50",
//                     _after: {
//                       transform: "scaleX(1)",
//                       transformOrigin: "left",
//                     },
//                   }}>
//                   Inicio
//                 </Link>
//                 <Link href="#"
//                   position="relative"

//                   _after={{
//                     content: '""',
//                     position: "absolute",
//                     width: "100%",
//                     height: "2.5px",
//                     bottom: "0",
//                     left: "0",
//                     bg: "#f29f1e",
//                     transform: "scaleX(0)",
//                     transformOrigin: "right",
//                     transition: "transform 0.3s ease-out",
//                     borderRadius: "full",
//                   }}
//                   _hover={{
//                     textDecoration: "none",
//                     color: "orange.50",
//                     _after: {
//                       transform: "scaleX(1)",
//                       transformOrigin: "left",
//                     },
//                   }}>
//                   Serviços
//                 </Link>
//                 <Link href="#"
//                   position="relative"

//                   _after={{
//                     content: '""',
//                     position: "absolute",
//                     width: "100%",
//                     height: "2.5px",
//                     bottom: "0",
//                     left: "0",
//                     bg: "#f29f1e",
//                     transform: "scaleX(0)",
//                     transformOrigin: "right",
//                     transition: "transform 0.3s ease-out",
//                     borderRadius: "full",
//                   }}
//                   _hover={{
//                     textDecoration: "none",
//                     color: "orange.50",
//                     _after: {
//                       transform: "scaleX(1)",
//                       transformOrigin: "left",
//                     },
//                   }}>
//                   Portfólio
//                 </Link>
//                 <Link href="#"
//                   position="relative"

//                   _after={{
//                     content: '""',
//                     position: "absolute",
//                     width: "100%",
//                     height: "2.5px",
//                     bottom: "0",
//                     left: "0",
//                     bg: "#f29f1e",
//                     transform: "scaleX(0)",
//                     transformOrigin: "right",
//                     transition: "transform 0.3s ease-out",
//                     borderRadius: "full",
//                   }}
//                   _hover={{
//                     textDecoration: "none",
//                     color: "orange.50",
//                     _after: {
//                       transform: "scaleX(1)",
//                       transformOrigin: "left",
//                     },
//                   }}>
//                   Blog
//                 </Link>
//                 <Link href="#"
//                   position="relative"

//                   _after={{
//                     content: '""',
//                     position: "absolute",
//                     width: "100%",
//                     height: "2.5px",
//                     bottom: "0",
//                     left: "0",
//                     bg: "#f29f1e",
//                     transform: "scaleX(0)",
//                     transformOrigin: "right",
//                     transition: "transform 0.3s ease-out",
//                     borderRadius: "full",
//                   }}
//                   _hover={{
//                     textDecoration: "none",
//                     color: "orange.50",
//                     _after: {
//                       transform: "scaleX(1)",
//                       transformOrigin: "left",
//                     },
//                   }}>
//                   Sobre
//                 </Link>
//                 <Link href="#"
//                   position="relative"

//                   _after={{
//                     content: '""',
//                     position: "absolute",
//                     width: "100%",
//                     height: "2.5px",
//                     bottom: "0",
//                     left: "0",
//                     bg: "#f29f1e",
//                     transform: "scaleX(0)",
//                     transformOrigin: "right",
//                     transition: "transform 0.3s ease-out",
//                     borderRadius: "full",
//                   }}
//                   _hover={{
//                     textDecoration: "none",
//                     color: "orange.50",
//                     _after: {
//                       transform: "scaleX(1)",
//                       transformOrigin: "left",
//                     },
//                   }}>
//                   Contato
//                 </Link>
//               </HStack>
//             </Box>
//             <Box>
//               <Button
//                 bg={'#d7a106'}
//                 borderRadius='full'
//                 _hover={{
//                   background: '#c47900'
//                 }}
//               > Solicite um Orçamento
//               </Button>
//             </Box>
//           </Flex>
//         </Container>
//       </Box >


//       {/* Section - Main */}

//       < Box
//         bg=''
//         maxH='90vh'
//         minH='90vh'
//         position='relative'
//       >

//         <Carousel/>
//       </Box >

//       {/* Section - Main */}

//       < Box bg='' maxH='100vh' minH='75vh' pt={20} >
//         <Container bg='' minH='75vh'>
//           <Flex align="center" justify="center" gap='24' minH='75vh'>
//             <motion.div
//               initial={{ opacity: 0, x: -100 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: -100 }}
//               transition={{ duration: 0.7 }}
//             >
//               <Box bg='' h={450}>
//                 <Flex direction='column' justify="">
//                   <Box bg=''>
//                     <Flex justifyContent='center'>
//                       <Rotate />
//                       {/* <Cubic /> */}
//                     </Flex>
//                   </Box>
//                   <Box mt='12' bg=''>
//                     <Flex direction='column' justifyContent='center'>
//                       <Text fontSize='3xl' fontWeight='bold' letterSpacing={2}>
//                         MAIS QUE UMA AGÊNCIA,
//                       </Text>
//                       <Text fontSize='3xl' fontWeight='bold' letterSpacing={2} color='#f29f1e'>
//                         UMA UNIÃO DE TALENTOS
//                       </Text>
//                     </Flex>
//                   </Box>
//                 </Flex>
//               </Box>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: 100 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: 100 }}
//               transition={{ duration: 0.7 }}
//             >
//               <Box bg='' maxW={550} h={450}>
//                 <motion.div
//                   initial={{ opacity: 0, y: 100 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: 100 }}
//                   transition={{ duration: 0.7 }}
//                 >
//                   <Text fontSize='4xl' fontWeight='black' letterSpacing={3} color='#f29f1e'>
//                     KURA CRIATIVA
//                   </Text>
//                 </motion.div>
//                 <Text fontSize='md' fontWeight='light' color='#D3D3D3'>
//                   <br />
//                   Consultoria de Imagem + Tecnologia = Marketing Digital com Propósito. Na Kura Criativa, somos a combinação perfeita entre criatividade e estratégia.
//                   <br /><br />
//                   Aline, especialista em imagem e comunicação visual, uniu forças com Paulo, expert em tecnologia e processos, para criar soluções inovadoras que transformam marcas em histórias de sucesso.
//                   <br /><br />
//                   Nossa história nasceu da paixão por ajudar pessoas a se expressarem melhor. Inicialmente, começamos como uma consultoria de imagem, mas logo percebemos que poderíamos levar esse mesmo impacto para o mundo dos negócios. Assim, unimos criatividade e tecnologia para oferecer um serviço completo de marketing digital, focado em resultados.
//                 </Text>
//               </Box>
//             </motion.div>
//           </Flex>
//         </Container>
//       </Box >


//       {/* SECTION - NOSSO PROPÓSITO */}


//       < Box bg='' maxH='100vh' minH='75vh' pt={10} >
//         <Container bg='' h=''>
//           <Flex align="center" justify="center" gap='24' h='100%'>
//             <Box bg='' h=''>
//               <motion.div
//                 initial={{ opacity: 0, x: -100 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: -100 }}
//                 transition={{ duration: 0.7 }}
//               >
//                 <Flex direction='column' justifyContent='center' alignItems='center'>
//                   <motion.div
//                     initial={{ opacity: 0, y: 100 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: 100 }}
//                     transition={{ duration: 0.7 }}>
//                     <Text fontSize='4xl' fontWeight='black' letterSpacing={3} color='#f29f1e'>
//                       NOSSO PROPÓSITO
//                     </Text>
//                   </motion.div>


//                   <Text fontSize='md' fontWeight='light' color='#D3D3D3'>
//                     <br />
//                     <br />
//                     Criatividade que conecta, estratégia que transforma. Acreditamos que cada marca possui uma essência única. Nossa missão é traduzir essa essência em resultados concretos, construindo conexões autênticas e desenvolvendo estratégias personalizadas que impulsionam o seu negócio.
//                   </Text>

//                 </Flex>
//                 {/* <StepFlags /> */}
//                 <motion.div
//                   initial={{ opacity: 0, x: -100 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   exit={{ opacity: 0, x: -100 }}
//                   transition={{ duration: 0.7 }}
//                 >
//                   <Flex direction='row' gap='8' justifyContent='space-between' mt={14}>
//                     <Box
//                       bg=''
//                       minW='300px'
//                       maxW='400px'
//                     >
//                       <Flex
//                         alignItems='center'
//                         // bg='blue'
//                         mb='8'
//                       >
//                         <Flex
//                           minW='3vw'
//                           minH='6vh'
//                           bg='#2A2A2A'
//                           // mb='8'
//                           align='center'
//                           justifyContent='center'
//                           borderRadius='md'

//                         >
//                           <Text
//                             fontSize='xl'
//                             fontWeight='bold'
//                           >
//                             1
//                           </Text>
//                         </Flex>
//                         <Text
//                           fontSize='xl'
//                           fontWeight='black'
//                           letterSpacing={1}
//                           color=''
//                           pl='8'
//                         >
//                           CRIATIVIDADE
//                         </Text>
//                       </Flex>
//                       <Text color='#D3D3D3'>
//                         Criatividade para conectar com o seu público de forma autêntica.
//                       </Text>
//                     </Box>
//                     <Box bg='' minW='300px' maxW='400px'>
//                       <Flex
//                         alignItems='center'
//                         // bg='blue'
//                         mb='8'
//                       >
//                         <Flex
//                           minW='3vw'
//                           minH='6vh'
//                           bg='#2A2A2A'
//                           // mb='8'
//                           align='center'
//                           justifyContent='center'
//                           borderRadius='md'

//                         >
//                           <Text
//                             fontSize='xl'
//                             fontWeight='bold'
//                           >
//                             2
//                           </Text>
//                         </Flex>
//                         <Text
//                           fontSize='xl'
//                           fontWeight='black'
//                           letterSpacing={1}
//                           color=''
//                           pl='8'
//                         >
//                           ESTRATÉGIA
//                         </Text>
//                       </Flex>
//                       <Text color='#D3D3D3'>
//                         Estratégias personalizadas para impulsionar o seu negócio com resultados concretos.
//                       </Text>
//                     </Box>
//                     <Box bg='' minW='300px' maxW='400px'>
//                       <Flex
//                         alignItems='center'
//                         // bg='blue'
//                         mb='8'
//                       >
//                         <Flex
//                           minW='3vw'
//                           minH='6vh'
//                           bg='#2A2A2A'
//                           // mb='8'
//                           align='center'
//                           justifyContent='center'
//                           borderRadius='md'

//                         >
//                           <Text
//                             fontSize='xl'
//                             fontWeight='bold'
//                           >
//                             3
//                           </Text>
//                         </Flex>
//                         <Text
//                           fontSize='xl'
//                           fontWeight='black'
//                           letterSpacing={1}
//                           color=''
//                           pl='8'
//                         >
//                           RESULTADOS CONCRETOS
//                         </Text>
//                       </Flex>
//                       <Text color='#D3D3D3' fontSize='md'>
//                         Traduzimos a essência da sua marca em resultados tangíveis e mensuráveis.
//                       </Text>
//                     </Box>
//                   </Flex>
//                 </motion.div>
//                 <Flex direction='row' mt={16} alignItems='center' gap={4}>
//                   <Text color='#D3D3D3'>
//                     Quer saber como podemos transformar a sua marca?
//                   </Text>
//                   <Button variant='solid' colorPalette='orange' borderRadius='full'> Entre em Contato</Button>
//                 </Flex>
//               </motion.div>
//             </Box>
//           </Flex >
//         </Container >
//       </Box >



//       {/* SECTION - QUEM SOMOS */}


//       < Box
//         bg='#d7a106'
//         maxH=''
//         minH='65vh'
//         position='relative'
//       >
//         <Image
//           src={BackT}
//           alt="Logo Kura Criativa"
//           objectPosition=" 0 "
//           fill
//           objectFit="contain"
//         // width={400}
//         />

//         <Container bg='' minH='65vh'>
//           <Flex align="center" gap='24' h='65vh' p='6' justifyContent='' bg=''>
//             <Flex
//               gap={24}
//               bg=''
//               w='100%'
//               justify='space-between'
//             >
//               <Box bg='' h=''>
//                 <Flex direction='column' justify="" alignItems='' justifyContent=''>
//                   <Image
//                     src={LogoKuraVertical}
//                     alt="Logo Kura Criativa"
//                     width={450}
//                   />
//                 </Flex>
//               </Box>

//               <Box bg='' maxW={550} >
//                 <Card.Root size='lg' bg='#171717' >
//                   <Card.Body gap="6">
//                     <Text fontSize='4xl' fontWeight='black' letterSpacing={3} color=''>
//                       QUEM SOMOS
//                     </Text>
//                     <Card.Title mt="2" fontSize='xl' color='#d3d3d3'>Criatividade e Tecnologia para Resultados Reais</Card.Title>
//                     <Card.Description fontSize='md'>
//                       A Kura Criativa nasceu da união de uma criativa e um nerd, com o propósito de transformar pequenos negócios em marcas memoráveis. Desde consultorias personalizadas até estratégias completas de marketing digital, estamos aqui para construir conexões reais e resultados impactantes para nossos clientes.
//                     </Card.Description>
//                   </Card.Body>
//                   <Card.Footer justifyContent="flex-end">
//                     <Button variant='outline'>Saiba Mais Sobre Nós</Button>
//                   </Card.Footer>
//                 </Card.Root>
//               </Box>
//             </Flex>
//           </Flex>
//         </Container>
//       </Box >

//       {/* NOSSOS SERVIÇOS */}

//       <Box bg='' maxH='100vh' minH='75vh' pt=''>
//         <Container bg='' h=''>
//           <Flex align="" justifyContent="Center" gap='12' h='75VH' direction='column' bg=''>
//             <Box bg='' h=''>
//               <Flex direction='column' justifyContent='' alignItems=''>
//                 <Text fontSize='4xl' fontWeight='black' letterSpacing={3} color='#f29f1e'>
//                   NOSSOS SERVIÇOS
//                 </Text>
//                 <Text fontSize='lg' fontWeight='bold' color='#D3D3D3'>
//                   <br />
//                   Soluções completas para sua presença digital
//                 </Text>
//               </Flex>
//             </Box>
//             <Box bg='' maxW='' h=''>
//               <Flex direction='row' gap='8'>

//                 <Card.Root width="320px" >
//                   <Card.Body gap="2">
//                     <Icon fontSize="40px">
//                       <FaUsersGear />
//                     </Icon>
//                     <Card.Title mt="2">Gestão de Redes Sociais</Card.Title>
//                     <Card.Description>
//                       Configuração e otimização de perfis em redes sociais (Instagram, Facebook, LinkedIn, TikTok) com interação e gestão de mensagens.
//                     </Card.Description>
//                   </Card.Body>
//                   <Card.Footer justifyContent="flex-end">
//                     <Button bg={'#d7a106'} borderRadius=''>Solicite um Orçamento</Button>
//                   </Card.Footer>
//                 </Card.Root>

//                 <Card.Root width="320px">
//                   <Card.Body gap="2">
//                     <Icon fontSize="40px">
//                       <FaCalendarDay />
//                     </Icon>
//                     <Card.Title mt="2">
//                       Planejamento de Calendário de Postagens
//                     </Card.Title>
//                     <Card.Description>
//                       Estratégia de conteúdo personalizada com foco em datas comemorativas, campanhas e metas para máximo engajamento.
//                     </Card.Description>
//                   </Card.Body>
//                   <Card.Footer justifyContent="flex-end">
//                     <Button bg={'#d7a106'} borderRadius=''>Solicite um Orçamento</Button>
//                   </Card.Footer>
//                 </Card.Root>

//                 <Card.Root width="320px">
//                   <Card.Body gap="2">
//                     <Icon fontSize="40px">
//                       <FaLaptopCode />
//                     </Icon>
//                     <Card.Title mt="2"> Produção de Conteúdo </Card.Title>
//                     <Card.Description>
//                       Criação de artes e vídeos curtos otimizados para posts, stories e reels, com textos criativos e CTAs.
//                     </Card.Description>
//                   </Card.Body>
//                   <Card.Footer justifyContent="flex-end">
//                     <Button bg={'#d7a106'} borderRadius=''>Solicite um Orçamento</Button>
//                   </Card.Footer>
//                 </Card.Root>

//                 <Card.Root width="320px">
//                   <Card.Body gap="2">
//                     <Icon fontSize="40px">
//                       <FaChartLine />
//                     </Icon>
//                     <Card.Title mt="2">Análise e Relatórios</Card.Title>
//                     <Card.Description>
//                       Monitoramento de métricas (alcance, engajamento, crescimento) com relatórios mensais e insights para otimização.
//                     </Card.Description>
//                   </Card.Body>
//                   <Card.Footer justifyContent="flex-end">
//                     <Button bg={'#d7a106'} borderRadius=''>Solicite um Orçamento</Button>
//                   </Card.Footer>
//                 </Card.Root>

//               </Flex>
//             </Box>
//           </Flex>
//         </Container>
//       </Box>



//       {/* Contato */}

//       <Box bg='' maxH='100vh' minH='75vh' pt=''>
//         <Container bg='' h=''>
//           <Flex align="" justifyContent="Center" gap='12' h='75VH' direction='column' bg=''>
//             <Box bg='' h=''>
//               <Text fontSize='4xl' fontWeight='black' letterSpacing={3} color='#f29f1e'>
//                 PRONTO PARA LEVAR SUA MARCA PARA O PRÓXIMO NÍVEL?
//               </Text>
//             </Box>
//             <Box bg='' maxW='' h=''>
//               <Flex direction='row' gap='8'>
//                 <Flex direction='column' bg='#111111' p='6' gap='4'>
//                   <Text>
//                     Mande uma <span style={{ color: 'orange' }}>mensagem</span> que entraremos em contato!
//                   </Text>
//                   <Flex direction='column' gap={5} p='' minW='20vw' bg='#111111' borderRadius='lg'>
//                     <Flex gap={5}>
//                       <Field
//                         label="Nome"
//                         // helperText="Digite seu Nome"
//                         errorText="Nome é Obrigatório"
//                         required
//                       // colorPalette='yellow'
//                       >
//                         <Input type="text" placeholder="Digite seu Nome" />
//                       </Field>
//                       <Field
//                         label="Marca"
//                         // helperText="Digite sua Marca"
//                         optionalText='Opcional'
//                       >
//                         <Input type="text" placeholder="Digite sua Marca" />
//                       </Field>
//                     </Flex>
//                   </Flex>
//                   <Flex gap={5}>
//                     <Field
//                       label="Email"
//                       // helperText="Digite seu Email"
//                       errorText="Email é Obrigatório"
//                       required
//                     >
//                       <Input type="email" placeholder="Digite seu Email" />
//                     </Field>
//                     <Field
//                       label="Telefone"
//                       // helperText="Digite seu Telefone"
//                       errorText="Telefone é Obrigatório"
//                       required
//                     >
//                       <Input type="tel" placeholder="Digite seu Telefone" />
//                     </Field>
//                   </Flex>
//                   <Field
//                     label="Mensagem"
//                     // helperText="Digite sua Mensagem"
//                     errorText="Texto Obrigatório"
//                     required>
//                     <Textarea placeholder="Escreva aqui sua mensagem..." />
//                   </Field>
//                   <Button variant='outline' mt='2'>Enviar</Button>
//                 </Flex>
//                 <Flex gap={5} bg='' justifyContent='center' direction='column' pl='4'>
//                   <Flex gap={5} direction='row'>
//                     <Flex direction='column' gap={2}>
//                       <Text fontSize='lg' color='orange'>Fale com a gente! É só clicar aqui: </Text>
//                       <Link> Whats da KC </Link>
//                       <Text fontSize='lg' color='orange'>Ou se preferir, ligue para: </Text>
//                       <Link>(11)97215-7732 </Link>
//                     </Flex>
//                     <Separator orientation="vertical" size='sm' h='100%' color='' />
//                     <Flex direction='column' gap={2}>
//                       <Text fontSize='lg' color='orange'>Mande um Email: </Text>
//                       <Link> contato@kuracriativa.com.br </Link>
//                       <Text fontSize='lg' color='orange'>Endereço: </Text>
//                       <Link> R. Jurubatuba, 1350 - CJ 717 - Centro, São Bernardo do Campo - SP, 09725-000 </Link>
//                     </Flex>
//                   </Flex>
//                   <Text fontSize='lg' fontWeight='medium' pt='2'>
//                     Quer saber por onde começar? Mande uma mensagem e receba uma análise gratuita da sua presença digital!
//                   </Text>
//                 </Flex>
//               </Flex>
//             </Box>
//           </Flex>
//         </Container>
//       </Box>



//       {/* Footer */}

//       <Box bg='#111111' maxH='' minH='30vh' mt='8'>
//         <Flex align="center" justify="center" gap='24' h='100%' direction='column' pt={12}>
//           <Container>
//             <Box bg='' h=''>
//               <Flex direction='Row' justifyContent='center' alignItems='initial' gap='20' pb={12}>
//                 <Flex direction='column'>
//                   <Image
//                     src={Logo}
//                     alt="Logo Kura Criativa"
//                     width={200}
//                     height={200}
//                   />
//                 </Flex>
//                 <Flex direction='column' gap={2}>
//                   <Link>
//                     Inicio
//                   </Link>
//                   <Link>
//                     Serviços
//                   </Link>
//                   <Link>
//                     Portfólio
//                   </Link>
//                 </Flex>
//                 <Flex direction='column' gap={2}>
//                   <Link>
//                     Blog
//                   </Link>
//                   <Link>
//                     Sobre
//                   </Link>
//                   <Link>
//                     Contato
//                   </Link>
//                 </Flex>
//                 <Flex direction='column' gap={2}>
//                   <Text fontWeight='bold'>
//                     Suporte
//                   </Text>
//                   <Link>
//                     Fale Conosco
//                   </Link>
//                 </Flex>
//                 <Button bg={'#f29f1e'} borderRadius='full'>Solicite um Orçamento</Button>
//                 <Flex direction='column' gap={2}>
//                   <Text fontWeight='black' color='#f29f1e' fontSize='lg'>
//                     Siga-nos
//                   </Text>
//                   <Flex direction='row' gap={2}>
//                     <Icon fontSize="25px">
//                       <FaInstagram />
//                     </Icon>
//                     <Icon fontSize="25px">
//                       <FaFacebookSquare />
//                     </Icon>
//                   </Flex>
//                 </Flex>
//               </Flex>
//             </Box>
//             <Separator />
//             <Flex bg='' justifyContent='space-between' w='100%' pt={8}>
//               <Text fontSize='md' fontWeight='' color='gray'>
//                 © 2025 Todos os direitos reservados.
//               </Text>
//               <Text fontSize='md' fontWeight='' color='gray'>
//                 Desenvolvido por KURA CRIATIVA
//               </Text>
//             </Flex>
//           </Container>
//         </Flex>
//       </Box>

//     </>
//   );
// }
// src/app/page.tsx

import Contact from "components/contact/Contact";
import About from "components/home/About";
import Hero from "components/home/Hero";
import Purpose from "components/home/Purpose";
import Services from "components/home/Services";
import Footer from "components/layout/Footer";
import Navbar from "components/layout/Navbar";
import { Toaster } from "@/components/ui/toaster";

export default function Home() {
  return (
    <>
      <div id="home">
      <Navbar />
        <Hero />
      </div>
      <Purpose />
      <div id="about">
        <About />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="contact">
        <Contact />

      </div>
      <Footer />
      <Toaster/>
    </>
  );
}
