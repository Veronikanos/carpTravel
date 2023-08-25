import {FC} from 'react';
import Link from 'next/link';

const Hero: FC = () => {
  return (
    <section className="padding-x hero-section ">
      <div className="py-14 pt-[105px] md:pt-[122px] xl:pt-[130px]">
        <div className="flex flex-col gap-6 md:gap-x-12 md:gap-y-0 md:grid md:grid-rows-3 md:grid-cols-5 md:grid-flow-col ">
          <h1 className="header-1 first-letter:font-medium w-[118px] ml-auto  md:col-span-2 hero-right">
            7days
            <span className="tracking-[9.48px] text-xs font-light block leading-normal md:leading-none md:text-sm md:tracking-[25.9px] xl:text-base xl:tracking-[36.48px]">
              journey
            </span>
          </h1>
          <div className="md:-order-1 md:row-span-3 md:col-span-3 ">
            <h2 className="header-2 first-line:font-medium mb-6 md:mb-[58px] max-w-xs  md:max-w-fit xl:max-w-[646px] ">
              Uncover Carpathian's secrets
            </h2>

            <p className="text-[10px] font-extralight leading-4 max-w-[157px] md:text-sm  md:tracking-[1.26px] md:max-w-[262px] xl:text-base xl:leading-6 xl:tracking-[1.44px] xl:md:max-w-full ">
              Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr
              Lake / Bukovel
            </p>
          </div>
          <div className=" md:row-span-2 col-span-2 flex flex-col justify-end hero-right">
            <p className="mb-[24px] placeholder:md:mb-[28px] text-sm text-justify md:text-base font-extralight md:leading-5  xl:text-lg xl:leading-6">
              We offer you unforgettable trips to the most beautiful
              parts of the Carpathians. Enjoy stunning views, exciting
              expeditions, and the best service!
            </p>
            <Link href="contacts" className="button-hero">
              JOIN NOW
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
