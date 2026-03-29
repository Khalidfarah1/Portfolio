'use client'
import { useEffect, useRef } from 'react'

export default function About() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible') },
      { threshold: 0.08 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="section reveal" id="about">
      <div className="section-header">
        <span className="section-num" style={{ color: 'var(--accent)' }}>01</span>
        <h2 className="section-title">About Me</h2>
        <div className="section-line" style={{ background: 'linear-gradient(to right, var(--accent), transparent)' }} />
      </div>
      <div className="about-grid">
        <div className="about-text">
          <p>I&apos;m a <strong>Full Stack Developer</strong> and a <strong>BSc Computer Science</strong> student at <strong>Queen Mary University of London</strong>, with a passion for building clean, functional web applications that solve real problems. I work comfortably across the entire stack — from building responsive, accessible UIs to architecting RESTful APIs and managing databases.</p>
          <p>I take pride in writing maintainable, well-structured code and approaching every project with attention to detail. Whether working independently or as part of a team, I bring both technical depth and a pragmatic mindset to the work.</p>
          <p>I&apos;m currently open to freelance projects and full-time roles where I can continue to grow and contribute to meaningful products.</p>
          <a href="#contact" className="btn btn-primary" style={{ marginTop: '1.5rem' }}>Start a Conversation</a>
        </div>
        <div>
          <div className="about-stats">
            <div className="stat-item"><span className="stat-num" style={{ color: 'var(--accent)' }}>1+</span><span className="stat-lbl">Years Experience</span></div>
            <div className="stat-item"><span className="stat-num" style={{ color: 'var(--green)' }}>6+</span><span className="stat-lbl">Projects Delivered</span></div>
            <div className="stat-item"><span className="stat-num" style={{ color: 'var(--orange)' }}>∞</span><span className="stat-lbl">Cups of Coffee</span></div>
            <div className="stat-item"><span className="stat-num" style={{ color: 'var(--pink)' }}>8+</span><span className="stat-lbl">Languages &amp; Frameworks</span></div>
          </div>
        </div>
      </div>
    </section>
  )
}
