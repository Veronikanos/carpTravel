'use client'                                                                              

import Image from 'next/image';
import {FC, useEffect, useState} from 'react';
import Slider from './Slider';

const Services: FC = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
      // Fetch data from content.json 
      fetch('/content.json')
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.error('Error fetching data:', error));
    }, []);


  return (
    <section>
      <div className="padding-x services-section">
        <div className="padding-y ">
          <h2 className="header-2 mb-[24px] md:mb-0">
            We <span className="font-medium">offer</span>
          </h2>
          <div className="header-2 ml-auto">
            01/<span className="text-light-transparent">05</span>
          </div>

          <Slider data={data}/>

          <ul className="mb-[34px] services-list flex flex-col gap-[16px]">
            <li className="services-item__active">ATVs Traveling</li>
            <li>Rock climbing</li>
            <li>Hot air ballooning</li>
            <li>Skydiving</li>
            <li>Rafting</li>
          </ul>
          <p>
            Join exciting rafting expeditions on the waterways of the
            Carpathians. Go through challenging waterways and overcome
            gusty waves, feel the adrenaline, and enjoy the incredible
            views of the surrounding mountains.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
