'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import styles from './serviceCarousel.module.css';

const movies = [
  {
    title: 'Thor: Ragnarok',
    image: 'https://gkfykfburbyl7hji.public.blob.vercel-storage.com/gremio-pYIUmg13WqJpDqEbLwAM37Au3MPOCY.png',
    description: 'Thor must race to return to Asgard and stop Ragnarok.',
  },
  {
    title: 'The Suicide Squad',
    image: 'https://gkfykfburbyl7hji.public.blob.vercel-storage.com/gremio-pYIUmg13WqJpDqEbLwAM37Au3MPOCY.png',
    description: 'Harley Quinn and team embark on a dangerous mission.',
  },
  {
    title: 'Doctor Strange',
    image: 'https://gkfykfburbyl7hji.public.blob.vercel-storage.com/gremio-pYIUmg13WqJpDqEbLwAM37Au3MPOCY.png',
    description: 'Strange is chased by a demon while searching for the Book of Vishanti.',
  },
  {
    title: 'Eternals',
    image: 'https://gkfykfburbyl7hji.public.blob.vercel-storage.com/gremio-pYIUmg13WqJpDqEbLwAM37Au3MPOCY.png',
    description: 'The Eternals reunite to battle the Deviants and save Earth.',
  },
];

const ServiceCarousel: React.FC = () => {
  return (
    <div className={styles.container}>
      <Swiper
        // effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        spaceBetween={30}
        slidesPerView={3}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 0,
          // modifier: 2.5,
          // slideShadows: false,
        }}
        pagination={{ clickable: true }}
        // navigation
        modules={
          [ 
            // EffectCoverflow, 
            Pagination, 
            Navigation, 
            Autoplay
          ]
        }
        className={styles.swiper}
      >
        {movies.map((movie, index) => (
          <SwiperSlide key={index} className={styles.slide}>
            <img src={movie.image} alt={movie.title} className={styles.image} />
            <div className={styles.info}>
              <h3>{movie.title}</h3>
              {/* <p>{movie.description}</p> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ServiceCarousel;
