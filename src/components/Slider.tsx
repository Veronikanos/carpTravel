import Image from 'next/image';
import {ContentItem} from './types';


interface SliderProps {
  data: ContentItem[];
}

const Slider: React.FC<SliderProps> = ({data}) => {
  return (
    <>
      {data.map((item, index) => (
        <div key={index} className="">
          <div className="my-[16px] max-w-[463px] md:max-w-[463px] xl:max-w-[607px]">
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
        </div>
      ))}
    </>
  );
};

export default Slider;
