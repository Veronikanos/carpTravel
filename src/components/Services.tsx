'use client';

import {FC, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {EffectFade} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import {sliderTitleButtonText, slides} from '@/utils/slides';
import InnerSlider from './InnerSlider';

const Services: FC = () => {
  const [swiperInstance, setSwiperInstance] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [activeBg, setActiveBg] = useState<string>(slides[0].bg);

  const onClickBtn = (index: number) => {
    swiperInstance.slideTo(index);
    setActiveIndex(index);
    setActiveBg(slides[index].bg);
  };

  return (
    <>
      <section id="services" style={{backgroundImage: `url(${activeBg})`}}>
        <div className=" services-section   padding-x">
          <div className="padding-y ">
            <div className="mb-[16px] md:flex  md:justify-between ">
              <h2 className="header-2 mb-[24px]">
                We <span className="font-medium">offer</span>
              </h2>
              <div className="text-[43px] font-thin leading-normal md:text-[67px] md:leading-[78px]">
                0{activeIndex + 1}/
                <span className="text-light-transparent">
                  0{slides.length}
                </span>
              </div>
            </div>
            <div className=" min-h-[213px] pb-[12px] md:flex">
              <div className="  h-full w-full md:flex md:gap-[21px] ">
                <Swiper
                  breakpoints={{
                    768: {
                      width: 463,
                    },
                    1280: {
                      width: 607,
                    },
                  }}
                  modules={[EffectFade]}
                  onSwiper={setSwiperInstance}
                  onSlideChange={() => console.log('slide change')}
                  effect="fade">
                  {slides.map(({picture, title}, index) => {
                    return (
                      <SwiperSlide key={index} className={`bg-cover`}>
                        <InnerSlider
                          picture={picture}
                          title={title}
                        />
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
                <div className=" flex flex-col mt-[12px] md:mt-0">
                  <p className=" block text-right mb-6 text-[12px] leading-loose tracking-[2.4px] md:mb-[34px] md:text-left">
                    {slides[activeIndex].title}
                  </p>

                  <ul className="mb-[34px] services-list flex flex-col gap-[16px] md:order-first md:mb-[25px] xl:text-[28px] xl:gap-[24px]">
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
                    <p className="section-text md:text-[13px] md:text-justify md:leading-[1.53] xl:text-[18px]">
                      {slides[activeIndex].description}
                    </p>
                  </div>
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
