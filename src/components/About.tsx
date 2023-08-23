import {FC} from 'react';
import Image from 'next/image';
import Link from 'next/link';

const About: FC = () => {
  return (
    <section>
      <div className="padding-x about-section">
        <div className="padding-y ">
          <h2 className='header-2 mb-[8px]'>WHO <span className='font-medium'>WE ARE</span></h2>
          <div className="flex flex-col gap-[40px]">
          <div className="w-[180px] flex flex-col gap-[20px]">
            <p className=''>
                <span className='font-normal'>a team of enthusiasts</span> who are fully committed to the
                mission of creating unforgettable and extraordinary trips
                to the most beautiful parts of the Carpathians. Our goal
                is not just to show you the natural wonders of the
                mountains, but to provide you with a deep immersion in
                their magical atmosphere.
            </p>
            <p className=''>
            <span className='font-normal'>We believe</span> that nature has the power to inspire,
                strengthen character and provide new perspectives.
                Therefore, each of our tours is aimed at unlocking your
                potential, enriching your spiritual world and creating
                unforgettable memories.{' '}
            </p>
          </div>
          <div className="w-[180px] flex flex-col self-end">
            <span className="uppercase font-normal">From vacationers </span>
            <span className="uppercase font-normal self-end">to active travelers</span>
            <span className='tracking-[-0.14px]'>we have a tour for everyone.</span>
          </div>
          <p>
          <span className='font-normal'>We use methods</span> that are time-tested and proven. Our expert
            guides with in-depth knowledge of the Carpathian
            landscapes lead you safely through the mysteries of these
            mountains.{' '}
          </p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
