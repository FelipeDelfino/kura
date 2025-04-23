"use client";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import * as motion from "motion/react-client";

import Image from "next/image";
import Back1 from '../../../public/back1m.png';
import Back2 from '../../../public/back2m.png';

import { Box, Button, Card, Container, Text } from "@chakra-ui/react";

interface CarouselProps {
  spaceBetween?: number;
  slidesPerView?: number;
}

const Carousel: React.FC<CarouselProps> = ({
  spaceBetween = 0,
  slidesPerView = 1,
}) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      loop={true}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("Slide change")}
    >
      {[{
        bg: 'rgba(0, 0, 0, 0.35)',
        img: Back1,
        title: 'Na Kura Criativa, unimos criatividade e tecnologia para ajudar você a crescer de forma consistente e memorável no mundo digital.',
        button: 'Veja Nossos Resultados'
      }, {
        bg: 'rgba(0, 0, 0, 0.55)',
        img: Back2,
        title: 'Transforme sua marca com redes sociais poderosas e estratégias inteligentes.',
        button: 'Conheça Nossos Serviços'
      }].map((slide, index) => (
        <SwiperSlide key={index}>
          <Box maxH='90vh' minH='90vh' position='relative'>
            <Image
              src={slide.img}
              alt={`Slide ${index + 1}`}
              fill
              objectFit="cover"
              style={{ pointerEvents: "none", userSelect: "none" }}
            />
            <Box
              bg={slide.bg}
              position='absolute'
              zIndex="2"
              w='100vw'
              h='100vh'
              display='flex'
              alignItems='initial'
              justifyContent='initial'
            >
              <Container alignItems='center' display='flex'>
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 100 }}
                  transition={{ duration: 0.7 }}
                >
                  <Card.Root
                    width={['90vw', '70vw', '37vw']}
                    bg='transparent'
                    borderColor='transparent'
                    h={['auto', 'auto', '45vh']}
                  >
                    <Card.Body gap="8">
                      <Card.Title
                        mt="2"
                        fontSize={['xl', '2xl', '4xl']}
                      >
                        <Text letterSpacing={1} lineHeight={1.3}>
                          {slide.title}
                        </Text>
                      </Card.Title>
                      <Button
                        bg={'#f29f1e'}
                        maxW={['100%', '60%', '40%']}
                        borderRadius='lg'
                      >
                        {slide.button} <b style={{ marginLeft: '5px' }}>→</b>
                      </Button>
                    </Card.Body>
                  </Card.Root>
                </motion.div>
              </Container>
            </Box>
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;