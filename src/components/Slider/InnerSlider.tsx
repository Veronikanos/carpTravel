import {Swiper, SwiperSlide} from 'swiper/react';
import {Dispatch, FC} from 'react';
import {EffectFade} from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/effect-fade';

import {slides} from '@/utils/slides';

interface SliderProps {
  setInstanceSwiper: Dispatch<any>;
}

const InnerSlider: FC<SliderProps> = ({setInstanceSwiper}) => {
  return (
    <Swiper
      modules={[EffectFade]}
      effect="fade"
      onSwiper={setInstanceSwiper}
      noSwipingClass="no-swipe"
      className="w-full h-[213px] sm:h-[370px] xl:h-[429px] sm:w-[463px] md:w-[463px] lg:w-[607px] mb-[12px] md:mb-0">
      {slides.map((item) => (
        <SwiperSlide key={item.title} className="no-swipe">
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
  );
};

export default InnerSlider;
