import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import WorkExperience from '../components/WorkExperience'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import ContactMe from '../components/ContactMe'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Head>
        <title>Lihuel's Portfolio</title>
      </Head>
      <Header/>
      <section id="hero" className='snap-start'>
        <Hero />
      </section>
      <section id='about' className='snap-center'>
        <About />
      </section>
      <section id='experience' className='snap-center'>
        <WorkExperience />
      </section>
      <section id='skills' className='snap-start'>
        <Skills />
      </section>
      <section id='projects' className='snap-start'>
        <Projects />
      </section>
      <section id='contact' className='snap-start'>
        <ContactMe />
      </section>

      <Link href="#hero">
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex items-center justify-center'>
            <img 
              className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0'
              src='https://media-exp1.licdn.com/dms/image/C4D03AQF26LYC6KtHYA/profile-displayphoto-shrink_800_800/0/1636391899518?e=1675900800&v=beta&t=vHv54Ktdj7jNJnuSTlEhZDsew9gxyzgeSfM77nHbpb4'
              alt=''
            />
          </div>
        </footer>
      </Link>
    </div>
  )
}

export default Home
