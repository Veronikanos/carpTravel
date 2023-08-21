import {FC} from 'react';
import {Hero, Header} from '..';


const Home: FC = () => {
  return (     
    <>
  {/* <header className="absolute inset-x-0 top-0 z-50"> */}
  <header className="">
        <Header />
      </header>
    <main className="overflow-hidden">


      <Hero />
    </main></> 
  );
};

export default Home;
