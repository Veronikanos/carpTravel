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
        setActiveIndex(index)
    };
  
    return (
      <>
      

        <section>
        <div className=" services-section  padding-y min-h-[851px] padding-x">
           <div className=" ">
             <h2 className="header-2 mb-[24px]">
               We <span className="font-medium">offer</span>
             </h2>
             <div className="text-[43px] font-thin leading-normal ">0{activeIndex + 1}/
             <span className='text-light-transparent'>0{slides.length}</span>
             </div>
        </div>
             <div className=" min-h-[213px] pb-[12px]"> 
                {/* //TODO: add background */}
             {/* <div className="my-[16px] max-w-[463px] md:max-w-[463px] xl:max-w-[607px]"> */}

          <div className="  h-full w-full ">
            <Swiper modules={[EffectFade]} onSwiper={setSwiperInstance} 
              onSlideChange={() => console.log('slide change')} effect="fade">
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
            <div className=" flex flex-col mt-[12px]">

          <p className=" block text-right mb-6 text-[12px] leading-loose tracking-[2.4px]">
            {slides[activeIndex].title}
          </p>

          <ul className="mb-[34px] services-list flex flex-col gap-[16px]">
            {sliderTitleButtonText.map((item, index) => {
              return (
                <li
                  key={index}
                  className={
                    index === activeIndex
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