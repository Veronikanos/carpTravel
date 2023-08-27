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
import SliderDescription from './Slider/SliderDescription';

const Services: FC = () => {
  const [swiperInstance, setSwiperInstance] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [activeBg, setActiveBg] = useState<string>(slides[0].bg);

  //   const onClickBtn = (index: number) => {

  //     swiperInstance.slideTo(index);
  //   };

  const handleSlideChange = (index: number) => {
        controlledSwiper.slideTo(index);
        instanceSwiper.slideTo(index);
      setActiveIndex(index);
  };


  const [controlledSwiper, setControlledSwiper] = useState<any>(null);
  const [instanceSwiper, setInstanceSwiper] = useState<any>(null);
  return (
    <>
      <section id="services">
        {/* <h2>We offer</h2> */}
        <div className="services-section  relative ">
          <Swiper
            modules={[Controller, EffectFade, Navigation]}
            slidesPerView={1}
            effect="fade"
            onSwiper={setControlledSwiper}
            noSwipingClass="no-swipe"
            >
            {slides.map((item) => {
              return (
                <SwiperSlide key={item.id} className='no-swipe'>
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
          <div className="absolute inset-0 padding-x my-14">
            {/* text-block */}
            <div className="relative z-10 flex flex-col h-full  md:grid  md:gap-x-[20px] md:gap-y-[36px] md:grid-flow-row md:auto-rows-max">
            {/* <div className="flex flex-col"> */}
                <div className="header-2 mb-[24px] md:mb-0">We <span className="font-medium">offer</span>
                </div>
                <div className="text-[43px] mb-[16px] font-thin ml-auto leading-normal md:text-[67px] md:leading-[78px]  md:mb-0 md:col-start-2">
                0{activeIndex + 1}/
                <span className="text-light-transparent">
                  0{slides.length}
                </span>
              </div>
               {/* </div> */}
            

<div className="md:row-start-2 md:col-start-1">
          <Swiper modules={[Controller, EffectFade]} 
          effect="fade" 
          controller={{control: controlledSwiper}}  
          onSwiper={setInstanceSwiper}
        //   noSwiping={true}
        noSwipingClass="no-swipe"

          className='w-full h-[213px] sm:h-[370px] xl:h-[429px] sm:w-[463px] md:w-[463px] lg:w-[607px] mb-[12px] md:mb-0' 

          >
            {slides.map((item) => (
              <SwiperSlide key={item.title} 
              className='no-swipe'>
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

          <div className=" flex flex-col grow md:col-start-2 md:row-start-2 xl:grid xl:grid-flow-cols xl:gap-x-[60px] xl:gap-y-[23]">
                  <p className=" block text-right mb-6 text-[12px] leading-loose tracking-[2.4px] md:mb-[34px] md:text-left xl:col-start-2">
                    {slides[activeIndex].title}
                  </p>

                  <ul className="services-list flex flex-col gap-[16px] md:order-first md:mb-[25px] xl:text-[28px] xl:gap-[24px]">
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
                            handleSlideChange(index);
                          }}>
                          {item}
                        </li>
                      );
                    })}
                  </ul>

                  <div className="flex-grow flex items-end  xl:row-start-2 xl:col-span-2">
                    <p className="section-text md:text-[13px] md:text-justify md:leading-[1.53] xl:text-[18px]">
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
