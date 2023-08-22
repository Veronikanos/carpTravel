import {FC} from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero: FC = () => {
  return (
    <section>
      <div className="padding-x ">
        <div className="flex flex-col gap-6">
            <h1 className="header-1 first-letter:font-medium w-[118px] ml-auto tracking-[1.66px] leading-normal">
            7days
            <span className="tracking-[9.48px] text-xs font-light block leading-normal">
                journey
            </span>
            </h1>
            <h2 className="header-2 first-line:font-medium">
            Uncover Carpathian's secrets
            </h2>
            <p className='text-[10px] font-extralight leading-4 max-w-[157px]'>
            Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr Lake /
            Bukovel
            </p>
            <p>
            We offer you unforgettable trips to the most beautiful parts
            of the Carpathians. Enjoy stunning views, exciting
            expeditions, and the best service!
            </p>
        <Link className="button-hero" href="/contacts">JOIN NOW
            </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
