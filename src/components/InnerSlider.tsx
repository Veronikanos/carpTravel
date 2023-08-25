import Image from 'next/image';
import {FC} from 'react';
import {ServicesSlideProps} from './types';

const InnerSlider: FC<ServicesSlideProps> = ({
  className,
  picture,
  bg,
  title,
}) => {
  return (
    <div className={className}>
      <div className="container flex  flex-col  h-[739px] md:flex-row md:gap-[18px] md:h-[493px] xl:hidden">
        <div>
          <Image
            src={picture}
            alt={title}
            width={607}
            height={429}
            sizes="(max-width: 320px) 280px, (max-width: 768px) 463px, (max-width: 1280px) 607px"
            className="object-cover h-[214px]  mb-4 w-full md:h-[378px] md:mb-0"
          />
        </div>

      </div>
    </div>
  );
};

export default InnerSlider;
