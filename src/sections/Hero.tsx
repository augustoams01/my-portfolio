import memojiImage from '@/assets/images/memoji-computer.png';
import Image from 'next/image';
import grainImage from '@/assets/images/grain.jpg';
import ArrowDown from "@/assets/icons/arrow-down.svg";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from '@/assets/icons/sparkle.svg';
import { HeroOrbit } from '@/components/HeroOrbit';

export const HeroSection = () => {
  return (
  <div className='py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip'>

    <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">

      <div className='absolute inset-0 -z-30 opacity-50 bg-cover' style={{backgroundImage: `url(${grainImage.src})`}}></div>

      <div className='hero-circle'></div>
      <div className='hero-circle size-[900px]'></div>
      <div className='hero-circle size-[1080px]'></div>
      <div className='hero-circle size-[1220px]'></div> 

      <HeroOrbit size={800} rotation={-72}>
        <StarIcon className="size-28 text-sky-300"/>
      </HeroOrbit>

      <HeroOrbit size={550} rotation={20}>
        <StarIcon className="size-12 text-sky-300"/>
      </HeroOrbit>

      <HeroOrbit size={590} rotation={98}>
        <StarIcon className="size-8 text-sky-300"/>
      </HeroOrbit>

      <HeroOrbit size={430} rotation={-14}>
        <SparkleIcon className="size-8 text-sky-300/20"/>
      </HeroOrbit>

      <HeroOrbit size={440} rotation={79}>
        <SparkleIcon className="size-5 text-sky-300/20"/>
      </HeroOrbit>

      <HeroOrbit size={580} rotation={178}>
        <SparkleIcon className="size-10 text-sky-300/20"/>
      </HeroOrbit>

      <HeroOrbit size={710} rotation={143}>
        <SparkleIcon className="size-14 text-sky-300/20"/>
      </HeroOrbit>

      <HeroOrbit size={720} rotation={0}>
        <div className="size-3 rounded-full bg-sky-300/20"/>
      </HeroOrbit>

      <HeroOrbit size={720} rotation={85}>
        <div className="size-3 rounded-full bg-sky-300/20"/>
      </HeroOrbit>

      <HeroOrbit size={580} rotation={230}>
        <div className="size-3 rounded-full bg-sky-300/20"/>
      </HeroOrbit>

    </div>
    

    <div className="container relative">

      <div className='flex flex-col items-center'>
        <Image src={memojiImage} className='size-[100px] lg:size-[120px] relative top-[10px]' alt='Person behind a leptop'/>
        <div className='bg-gray-950 border border-gray-800 items-center gap-4 px-4 py-1.5 inline-flex rounded-lg'>
          <div className='bg-sky-500 size-2.5 rounded-full relative'>
          <div className='bg-sky-500 absolute inset-0 rounded-full animate-ping-large'>
            
          </div>
          </div>
          
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
