import Image from 'next/image';
import {FC} from 'react';

const Services: FC = () => {
  return (
    <section>
      <div className="padding-x services-section">
        <div className="padding-y ">
          <h2 className='header-2 mb-[24px] md:mb-0'>We <span className='font-medium'>offer</span></h2>
          <div className='header-2 ml-auto'>01/<span className='text-light-transparent'>05</span></div>

         <div className='my-[16px] max-w-[463px] md:max-w-[463px] xl:max-w-[607px]'>
         <Image
      src="/atvs.jpg"
    width={607}
    height={429}
    sizes="(max-width: 320px) 280px, (max-width: 768px) 463px, (max-width: 1280px) 607px"
    alt="Picture of the author"
    layout="responsive"

    /> 
         </div> 
         <p className='mb-[24px]'>Feel the adrenaline rush</p>
<ul className='mb-[34px] services-list flex flex-col gap-[16px]'>
    <li className='services-item__active'>ATVs Traveling</li>
    <li>Rock climbing</li>
    <li>Hot air ballooning</li>
    <li>Skydiving</li>
    <li>Rafting</li>
</ul>
<p>Join exciting rafting expeditions on the waterways of the Carpathians. Go through challenging waterways and overcome gusty waves, feel the adrenaline, and enjoy the incredible views of the surrounding mountains.</p>


        </div>
      </div> 
    </section>
  );
};

export default Services;