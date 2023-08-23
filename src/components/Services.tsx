'use client'

import Image from 'next/image';
import { FC, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { ContentItem } from './types';
import { Controller, Navigation, Pagination, Scrollbar, A11y,  EffectFade } from 'swiper/modules';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Slider from './Slider';


const Services: FC = () => {
    const [data, setData] = useState<ContentItem[]>([]);
    const [controlledSwiper, setControlledSwiper] = useState<any>(null);
    const [activeItem, setActiveItem] = useState<number>(0); // Initialize activeItem state
 
    useEffect(() => {
      // Fetch data from content.json 
      fetch('/content.json')
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.error('Error fetching data:', error));
    }, []);


  // Access activeIndex from controlledSwiper
  const activeIndex = controlledSwiper?.activeIndex ?? 0;

  // Update the activeItem state with a new value
  const handleActiveItemChange = (newActiveItem: number) => {
    setActiveItem(newActiveItem);
  };
    return (
      <section>
        <div className="padding-x services-section">
          <div className="padding-y">
            <h2 className="header-2 mb-[24px] md:mb-0">
              We <span className="font-medium">offer</span>
            </h2>
            <div className="header-2 ml-auto">01/0{data.length}
            </div>
  
            <div className="my-[16px] max-w-[463px] md:max-w-[463px] xl:max-w-[607px]">

              
              
              <Swiper 
              modules={[Controller, Navigation, Pagination, Scrollbar, A11y]}
            //   modules={[EffectFade]} effect="fade"
                spaceBetween={50}
                slidesPerView={1}
                pagination={{clickable: true}}
                
                controller={{ control: controlledSwiper }}
    //   onSlideChange={(swiper) => handleActiveItemChange(swiper.activeIndex)}
      onSlideChange={(swiper) => console.log(swiper)}
              >
                {data.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="">
                      <Image
                        src={item.image}
                        width={607}
                        height={429}
                        sizes="(max-width: 320px) 280px, (max-width: 768px) 463px, (max-width: 1280px) 607px"
                        alt={item.alt}
                        layout="responsive"
                      />
                    </div>
                    <p className="mb-[24px]">{item.title}</p>
                    <Slider/>
            <p>
              {item.description}
            </p>
   
                  </SwiperSlide>
                ))}
              </Swiper>

              <Swiper
        modules={[Controller]}
        onSwiper={setControlledSwiper}
      >
             <SwiperSlide> {activeIndex}</SwiperSlide> 
             <SwiperSlide> {activeIndex}</SwiperSlide> 
             <SwiperSlide> {activeIndex}</SwiperSlide> 
             <SwiperSlide> {activeIndex}</SwiperSlide> 
             <SwiperSlide> {activeIndex}</SwiperSlide> 
      </Swiper>


            </div>
  
            {/* <ul className="mb-[34px] services-list flex flex-col gap-[16px]">
              {data.map((item, index) => (
                <li
                  key={index}
                  className={index === activeSlide ? 'services-item__active' : ''}
                  onClick={() => handleListItemClick(index)}
                >
                  {item.title}
                </li>
              ))}
            </ul> */}
  

          </div>
        </div>
      </section>
    );
  };
  
  export default Services;