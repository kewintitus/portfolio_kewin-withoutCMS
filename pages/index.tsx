import Head from 'next/head';
import Image from 'next/image';
import About from '../components/About';
import Header from '../components/Header';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div
      className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll 
    overflow-x-hidden z-0  scrollbar-track-gray-700/20 scrollbar-thumb-red-700 scrollbar-thin"
    >
      <Head>
        <title>Kewin Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <section id="about" className="snap-center">
        <About />
      </section>
    </div>
  );
}
