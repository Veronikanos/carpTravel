import {FC} from 'react';
import { Hero } from '..';
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "400", "500", "600", "700", "800", "900"],
});

const Home: FC = () => {
  return (
    <main className={`${inter.className} absolute top-0`}>
      <Hero />
    </main>
  );
};

export default Home;
