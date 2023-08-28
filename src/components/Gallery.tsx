'use client';

import {Swiper, SwiperSlide} from 'swiper/react';
import {FC} from 'react';
import {EffectCoverflow, Navigation} from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/effect-coverflow';

import {gallery} from '@/utils/gallery';

const Gallery: FC = () => {
  return (
    <section id="career" className="career-section">
      <div className="padding-x max-width">
        <div className="padding-y ">
          <h2 className="header-2 mb-6">
            Our <span className="font-medium">gallery</span>
          </h2>

          <Swiper
            modules={[EffectCoverflow, Navigation]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1.5}
            loop={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 80,
              depth: 200,
              modifier: 1,
              slideShadows: false,
            }}
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
            }}
            className="w-full h-[213px] sm:h-[370px] xl:h-[429px] mb-[12px] md:mb-0">
            {gallery.map((item) => (
              <SwiperSlide key={item.title}>
                <div className="swiper-slide-inner">
                  <Image
                    src={item.picture}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="navigation-slider flex flex-between uppercase">
            <div className="swiper-button-prev">Back</div>
            <div className="swiper-button-next">Next</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
