import memojiImage from '@/assets/images/memoji-computer.png';
import Image from 'next/image';
import grainImage from '@/assets/images/grain.jpg';
import ArrowDown from "@/assets/icons/arrow-down.svg";
import StarIcon from "@/assets/icons/star.svg";
import { HeroOrbit } from '@/components/HeroOrbit';

export const HeroSection = () => {
  return (
  <div className='py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip'>

    <div className='absolute inset-0 -z-30 opacity-30 bg-cover' style={{backgroundImage: `url(${grainImage.src})`}}></div>

    <div className='hero-circle'></div>
    <div className='hero-circle size-[900px]'></div>
    <div className='hero-circle size-[1080px]'></div>
    <div className='hero-circle size-[1220px]'></div>

    <HeroOrbit size={800} rotation={-72}>
      <StarIcon className="size-28 text-emerald-300"/>
    </HeroOrbit>

    <div className="container">

      <div className='flex flex-col items-center'>
        <Image src={memojiImage} className='size-[100px] lg:size-[120px] relative top-[10px]' alt='Person behind a leptop'/>
        <div className='bg-gray-950 border border-gray-800 items-center gap-4 px-4 py-1.5 inline-flex rounded-lg'>
          <div className='bg-green-500 size-2.5 rounded-full '></div>
          <div className='text-sm font-medium'>Disponivel para novos projetos</div>
        </div>
      </div>

      <div className='max-w-lg mx-auto lg:max-w-screen-md'>
        <h1 className='font-serif text-3xl text-center mt-8 tracking-wide md:text-5xl'>Projetando sua imaginação de maneira incrivel!</h1>
        <p className='mt-4 text-center text-white/60 md:text-lg'>Sou especializado em transformar designs em aplicações funcionais e de alta perfomance. Vamos conversar sobre seu novo projeto.</p>
      </div>

      <div className='flex flex-col items-center mt-8 gap-4 md:flex-row justify-center'>
        <button className='inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl'>
          <span className='font-semibold'>Explore Meu Trabalho</span>
          <ArrowDown className="size-4"/>
        </button>
        <button className='inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl'>
          <span>👋</span>
          <span className='font-semibold'>Vamos Conversar</span>
        </button>
      </div>

    </div>

  </div>
  );
};
