import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Certificates from '@/components/Certificates'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <div className="divider"><hr /></div>
      <About />
      <div className="divider"><hr /></div>
      <Skills />
      <div className="divider"><hr /></div>
      <Projects />
      <div className="divider"><hr /></div>
      <Certificates />
      <div className="divider"><hr /></div>
      <Contact />
      <Footer />
    </>
  )
}
