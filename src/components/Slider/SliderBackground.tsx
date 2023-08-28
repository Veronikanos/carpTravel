import {Swiper, SwiperSlide} from 'swiper/react';
import {Dispatch, FC} from 'react';
import {EffectFade} from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/effect-fade';

import { slides} from '@/utils/slides';

interface SliderProps {
    setControlledSwiper: Dispatch<any>;
  }

const SliderBackground:  FC<SliderProps> = ({setControlledSwiper}) => {
    return (
        <Swiper
        modules={[EffectFade]}
        slidesPerView={1}
        effect="fade"
        onSwiper={setControlledSwiper}
        noSwipingClass="no-swipe">
        {slides.map((item) => {
          return (
            <SwiperSlide key={item.id} className="no-swipe">
              <div className="w-full h-[851px] sm:h-[950px] md:h-[621px] xl:h-[779px]   relative">
                <Image
                  src={item.bg}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    );
  };

  export default SliderBackground