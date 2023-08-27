'use client';

import {FC, useState} from 'react';
import 'swiper/css';
import 'swiper/css/effect-fade';

import {sliderTitleButtonText, slides} from '@/utils/slides';
import SliderBackground from './Slider/SliderBackground';
import InnerSlider from './Slider/InnerSlider';

const Services: FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [controlledSwiper, setControlledSwiper] = useState<any>(null);
  const [instanceSwiper, setInstanceSwiper] = useState<any>(null);

  const handleSlideChange = (index: number) => {
    controlledSwiper.slideTo(index);
    instanceSwiper.slideTo(index);
    setActiveIndex(index);
  };

  return (
    <section id="services">
      <h2 className="w-0 h-0 mt-[-1px] text-transparent">We offer</h2>
      <div className="services-section  relative ">
        <SliderBackground setControlledSwiper={setControlledSwiper} />
        <div className="absolute inset-0 padding-x my-14">
          {/* text-block */}
          <div className="relative z-10 flex flex-col h-full  md:grid  md:gap-x-[20px] md:gap-y-[36px] md:grid-flow-row md:auto-rows-max">
            <div className="header-2 mb-[24px] md:mb-0">
              We <span className="font-medium">offer</span>
            </div>
            <div className="text-[43px] mb-[16px] font-thin ml-auto leading-normal md:text-[67px] md:leading-[78px]  md:mb-0 md:col-start-2">
              0{activeIndex + 1}/
              <span className="text-light-transparent">
                0{slides.length}
              </span>
            </div>
            <div className="md:row-start-2 md:col-start-1">
              <InnerSlider setInstanceSwiper={setInstanceSwiper} />
            </div>
            <div className="flex flex-col grow md:col-start-2 md:row-start-2 xl:grid xl:grid-flow-cols xl:gap-x-[60px] xl:gap-y-[23]">
              <p className="block text-right mb-6 text-[12px] leading-loose tracking-[2.4px] md:mb-[34px] md:text-left xl:col-start-2">
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
  );
};

export default Services;
