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
        {/* <h2>We offer</h2> */}
        <div className="services-section  max-width relative ">
          <Swiper
            modules={[Controller, EffectFade, Navigation]}
            controller={{control: controlledSwiper}}
            slidesPerView={1}
            // noSwiping={true}
            onSlideChange={() => console.log(controlledSwiper)}>
            {slides.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <div className="w-full h-[851px] md:h-[621px] xl:h-[779px]   relative">
                    {/* The next/image component */}
                    {/* <div className="absolute inset-0 z-[-1]"> */}
                      <Image
                        src={item.bg}
                        alt={item.title}
                        layout="fill"
                        objectFit="cover"
                        className="object-cover"
                      />
                    {/* </div> */}

                    {/* Content inside the slide */}
                    {/* <div className="relative text-center p-8 bg-black bg-opacity-50 text-white">
                      <h2 className="text-2xl font-semibold mb-4">
                        {item.title}
                      </h2>
                      <p className="text-base">{item.description}</p>
                    </div> */}
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          {/* Controlled Swiper -> store swiper instance */}
          <div className="absolute inset-0 padding-x">
            {/* text-block */}
        <div className="relative">
            <span className="header-2">We offer</span>
            </div>


          <Swiper modules={[Controller]} onSwiper={setControlledSwiper} className='w-full h-[213px] sm:h-[370px] xl:h-[429px] sm:w-[463px] md:w-[463px] lg:w-[607px]' 

          >
            {slides.map((item) => (
              <SwiperSlide key={item.title} >
                    <Image
                      src={item.picture}
                      alt="Nested Slide Image"
                      layout="fill"
                      objectFit="cover"
                      className="object-cover"
                    />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        </div>
      </section>
    </>
  );
};

export default Services;
