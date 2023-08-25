import {FC} from 'react';
import Image from 'next/image';
import {Karantina} from 'next/font/google';

const karantina = Karantina({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

const Logo: FC = () => {
  return (
    <>
      <Image
        src="/logo.png"
        alt="logo"
        width={59}
        height={21}
        className="object-contain"
      />
      <span
        className={`${karantina.className} text-sm tracking-[2.59px]`}>
        CarpTravel
      </span>
    </>
  );
};

export default Logo;
