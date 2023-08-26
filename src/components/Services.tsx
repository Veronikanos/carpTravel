'use client';

import {FC, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
// import {EffectFade} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import {sliderTitleButtonText, slides} from '@/utils/slides';
import InnerSlider from './InnerSlider';
import {Controller, EffectFade, Navigation} from 'swiper/modules';
import Image from 'next/image';

const Services: FC = () => {
  const [swiperInstance, setSwiperInstance] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [activeBg, setActiveBg] = useState<string>(slides[0].bg);

//   const onClickBtn = (index: number) => {

//     swiperInstance.slideTo(index);
//   };

  const [controlledSwiper, setControlledSwiper] = useState<any>(null);
  return (
    <>
      <section id="services">
        <div className="services-section  max-width">
          <Swiper
            modules={[Controller, EffectFade, Navigation]}
            controller={{control: controlledSwiper}}
            slidesPerView={1}
                onSlideChange={() => console.log(controlledSwiper)}
                >
            {slides.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <div className="w-full flex flex-col items-center justify-center relative">
                    {/* The next/image component */}
                    <div className="absolute inset-0 z-[-1]">
                      <Image
                        src={item.bg}
                        alt={item.title}
                        layout="fill"
                        objectFit="cover"
                        priority
                        loading="eager"
                        className="object-cover"
                      />
                    </div>

                    {/* Content inside the slide */}
                    <div className="relative z-10 text-center p-8 bg-black bg-opacity-50 text-white">
                      <h2 className="text-2xl font-semibold mb-4">
                        {item.title}
                      </h2>
                      <p className="text-base">{item.description}</p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          {/* Controlled Swiper -> store swiper instance */}
          <div className="w-[200px] h-[400px] relative">
            <Swiper
              modules={[Controller]}
              onSwiper={setControlledSwiper}>
                  {slides.map((item) => {
              return (<SwiperSlide key={item.title}>
                      <div className="w-full h-full relative">
                        <Image
                          src={item.picture}
                          alt="Nested Slide Image"
                          width={307}
                          height={229}
                          objectFit="cover"
                          priority
                          loading="eager"
                          className="object-cover"
                        />
                      </div>
                    </SwiperSlide>
                    )
                  })}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
