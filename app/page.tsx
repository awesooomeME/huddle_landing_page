import Image from 'next/image'
import {TiSocialFacebook, TiSocialTwitter, TiSocialInstagram} from "react-icons/ti";
import logo from '@/public/images/logo.svg'
import illustration from '@/public/images/illustration-mockups.svg'
import bg_desktop from '@/public/images/bg-desktop.svg'
import bg_mobile from '@/public/images/bg-mobile.svg'

export default function Home() {
  return (
    <main className="min-h-screen grid place-content-center bg-violet px-10
      text-white gap-[5em] relative max-h-screen overflow-hidden">
      <picture className='absolute top-0 left-0 w-full h-auto cursor-none'>
        <source srcSet={bg_desktop.src} media='min-width: 1000px'/>
        <Image src={bg_mobile} alt='' className='w-full h-full'/>
      </picture>
      <header className='z-10 w-full'>
        <Image src={logo} alt="Huddle logo- bubble chat with the word huddle"
          width={150}/>
      </header>
      <div className='z-10 flex flex-col gap-[4em] desktop:flex-row 
        desktop:justify-between w-full'>
        <Image src={illustration} alt="showing mockups for desktop and mobile"
          />
        <section className='grid gap-5 max-w-[700px] max-h-[250px]'>
          <h1 className='text-center font-heavy text-2xl desktop:text-left
            desktop:text-4xl tracking-wide leading-[5rem]'>
            Build The Community Your Fans Will Love
          </h1>
          <p className='text-center desktop:text-left'>
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as 
            you engage in genuine discussion.
          </p>
          <button className='text-violet bg-white rounded-full w-3/4
            translate-x-1/4 py-2 shadow-2xl desktop:translate-x-0
            desktop:w-1/2'>
            Register
          </button>
        </section>
      </div>
      <footer className='flex justify-center gap-4 desktop:justify-end 
        z-10 w-full'>
        <div className='p-1 border-2 border-white rounded-full text-2xl'>
          <TiSocialFacebook/>
        </div>
        <div className='p-1 border-2 border-white rounded-full text-2xl'>
          <TiSocialTwitter/>
        </div>
        <div className='p-1 border-2 border-white rounded-full text-2xl'>
          <TiSocialInstagram/>
        </div>
      </footer>
    </main>
  )
}
