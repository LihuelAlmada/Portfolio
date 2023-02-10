import type { GetStaticProps } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import WorkExperience from '../components/WorkExperience'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import ContactMe from '../components/ContactMe'
import Link from 'next/link'
import { Experience, PageInfo, Project, Skill, Social } from '../typings'
import { fetchPageInfo } from '../utils/fetchPageInfo';
import { fetchExperiences } from '../utils/fetchExperiences';
import { fetchProjects } from '../utils/fetchProjects';
import { fetchSkills } from '../utils/fetchSkills';
import { fetchSocials } from '../utils/fetchSocials';

type Props = {
  experiences: Experience[],
  pageInfo:   PageInfo,
  projects:    Project[],
  skills:      Skill[],
  socials:     Social[],
}
const Home = ( { experiences, pageInfo, projects, skills, socials }:Props) => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Head>
        <title>Lihuel's Portfolio</title>
      </Head>
      <Header socials={socials}/>
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

export default Home;


export const getStaticProps: GetStaticProps<Props> = async () => {
  const experiences: Experience[] = await fetchExperiences();
  const pageInfo: PageInfo = await fetchPageInfo();
  const projects: Project[] = await fetchProjects();
  const skills: Skill[] = await fetchSkills();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      experiences,
      projects,
      skills,
      socials,
    },
    revalidate: 1000,
  }
}
