import Image from 'next/image';
import {FC} from 'react';
import {ServicesSlideProps} from './types';

const InnerSlider: FC<ServicesSlideProps> = ({
  picture,
  title,
}) => {
  return (
          <Image
            src={picture}
            alt={title}
            sizes="100vw"
            style={{
              width: '100%',
              height: 'auto',
            }}
            width={607}
            height={429}
          />

  );
};

export default InnerSlider;
