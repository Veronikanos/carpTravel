import {FC} from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero: FC = () => {
  return (
    <section>
      <div className="padding-x hero-section">
        <div className="flex flex-col gap-6 md:h-[345px]  md:gap-x-12 md:gap-y-0 md:grid md:grid-rows-3 md:grid-cols-5 md:grid-flow-col xl:gap-x-[281px]">
            
            <h1 className="header-1 first-letter:font-medium w-[118px] ml-auto tracking-[1.66px] leading-normal md:w-auto md:col-span-2 hero-right">
            7days
                <span className="tracking-[9.48px] text-xs font-light block leading-normal md:text-sm md:tracking-[25.9px]">
                    journey
                </span>
            </h1>
            <div className="md:-order-1 md:row-span-3 md:col-span-3 ">
                <h2 className="header-2 first-line:font-medium ">
                Uncover Carpathian's secrets
                </h2>
            
                <p className='text-[10px] font-extralight leading-4 max-w-[157px] md:text-sm  md:tracking-[1.26px] md:max-w-[262px]'>
                Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr Lake /
                Bukovel
                </p>
            
            </div>
            <div className="md:row-span-2 col-span-2 flex flex-col justify-end hero-right">
                <p className='md:mb-[28px] text-sm text-justify md:text-base font-extralight md:leading-5'>
                We offer you unforgettable trips to the most beautiful parts
                of the Carpathians. Enjoy stunning views, exciting
                expeditions, and the best service!
                </p>
            <Link className="button-hero" href="/contacts">JOIN NOW
                </Link>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
