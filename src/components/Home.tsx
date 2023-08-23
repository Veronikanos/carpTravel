import {FC} from 'react';
import { Inter } from "next/font/google";
import { About, Hero, Services } from '.';

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "400", "500", "600", "700", "800", "900"],
});

const Home: FC = () => {
  return (
    <main className={`${inter.className} absolute top-0 left-0 right-0`}>
      <Hero />
      <About/>
      <Services/>
    </main>
  );
};

export default Home;
