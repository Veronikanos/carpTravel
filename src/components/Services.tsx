'use client'

import Image from 'next/image';
import { FC, useEffect, useState, useRef, MutableRefObject } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { EffectFade } from 'swiper/modules';
import 'swiper/css/effect-fade';
import { sliderTitleButtonText, slides } from '@/utils/slides';
import InnerSlider from './InnerSlider';



const Services: FC = () => {
    const [swiperInstance, setSwiperInstance] = useState<any>(null);
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const onClickBtn = (index: number) => {
        swiperInstance.slideTo(index);
        setActiveIndex(index + 1)
    };
  
    return (
      <>
      
        {/* <section
          className="section  services h-[850px] relative md:h-[620px] xl:h-[784px]"
          id="services"
        > */}
        <section>
        <div className=" services-section relative padding-y min-h-[851px]">
           <div className="absolute z-10">
             <h2 className="header-2 mb-[24px] md:mb-0 z-20">
               We <span className="font-medium">offer</span>
             </h2>
             <div className="header-2 ml-auto">0{activeIndex + 1}/0{slides.length}
             </div>
             </div>
             <div className=" relative"> 
                {/* //TODO: add background */}
             {/* <div className="my-[16px] max-w-[463px] md:max-w-[463px] xl:max-w-[607px]"> */}

          <div className="swiper-container absolute top-[202px] left-0  h-full w-full ">
            <Swiper modules={[EffectFade]} onSwiper={setSwiperInstance} effect="fade">
              {slides.map(
                ({ picture, bg, title }, index, arr) => {
  
                  return (
                    <SwiperSlide key={index} className={`bg-cover`}>
                      <InnerSlider
                        picture={picture}
                        bg={bg}
                        title={title}
    
                      />
                    </SwiperSlide>
                  );
                }
              )}
            </Swiper>          
            <div className=" flex flex-col ">
          <p className="text-[67px] font-thin mb-10 leading-[1.16]">
            0{activeIndex}/<span className="text-white/20 ">0{slides.length}</span>
          </p>

          <p className=" block text-right mb-6 text-[12px] leading-loose tracking-[2.4px] md:hidden">
            {slides[activeIndex].title}
          </p>

          <ul className="mb-[34px] services-list flex flex-col gap-[16px]">
            {sliderTitleButtonText.map((item, index) => {
              return (
                <li
                  key={index}
                  className={
                    index === activeIndex - 1
                      ? 'services-item__active'
                      : ''
                  }
                  onClick={() => {
                    console.log(index);
                    onClickBtn(index);
                  }}>
                  {item}
                </li>
              );
            })}
          </ul>

          <div className=" grow flex flex-col justify-between">
            <p className="section-text md:text-[13px] md:text-justify md:leading-[1.53]">
              {slides[activeIndex].description}
            </p>
          </div>
        </div>
          </div>

          </div>
          
          </div>
        </section>
      </>
    );

    
  };
  
  export default Services;