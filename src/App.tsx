import { HeroParallax } from './components/HeroParallax'
import Navbar from './components/Navbar'
import { products } from './constants'
import { FloatingDock } from "./components/FloatingDoc";
import { IconHome } from "@tabler/icons-react";
import About from './components/About';
import Techs from './components/Techs';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import ContactMe from './components/ContactMe';
import { Contact, Github, Linkedin, NotebookText, UserCheck } from 'lucide-react';

const App = () => {
  return (
    <main className='min-h-screen w-screen bg-zinc-950'>

      <Navbar />

      <HeroParallax
        products={products}
      />

      <div className="relative h-full w-full bg-zinc-950  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] items-center justify-center flex flex-col">

        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-zinc-950 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

        <About />

        <Techs />

        <Projects />

        <Testimonials />

        <ContactMe />

      </div>

      <FloatingDock
        items={links}
        desktopClassName="sticky bottom-6 w-fit shadow z-100"
        mobileClassName="sticky bottom-6 right-6 ml-4 z-100"
      />
    </main>

  )
}

export default App

const links = [
  {
    title: "Home",
    icon: (
      <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
    newTab: false
  },

  {
    title: "About",
    icon: (
      <NotebookText className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#projects",
    newTab: false
  },
  {
    title: "Testimonials",
    icon: (
      <UserCheck className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#testimonials",
    newTab: false
  },
  {
    title: "Contact",
    icon: (
      <Contact  className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#contact",
    newTab: false
  },
  {
    title: "LinkedIn",
    icon: (
      <Linkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://www.linkedin.com/in/yosef-hershberg-111975264/",
    newTab: true
  },
  {
    title: 'Github',
    icon: (
      <Github className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: 'https://github.com/YosefHershberg',
    newTab: true
  }
];