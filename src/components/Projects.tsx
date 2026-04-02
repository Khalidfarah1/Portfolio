'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'

const projects = [
  {
    name: 'Bartho Bank',
    tags: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Prisma', 'JWT'],
    desc: 'A full-stack personal banking app with a REST API backend, JWT authentication, and a PostgreSQL database via Prisma ORM. Features real-time balance tracking, money transfers, spending analytics with category breakdowns, editable account details, and bank details with one-tap copy. Backend has 29 tests with full route and middleware coverage.',
    image: '/bartho-bank-preview.jpeg',
    demo: 'https://bartho-bank.vercel.app/',
    github: 'https://github.com/Khalidfarah1/Bartho-Bank',
  },
  {
    name: 'Spotify Stats Dashboard',
    tags: ['React', 'TypeScript', 'Vite', 'Spotify API', 'OAuth 2.0'],
    desc: 'A personal Spotify stats dashboard built with React and the Spotify Web API. Features OAuth 2.0 PKCE authentication, top tracks and artists with time range filtering, genre breakdown, audio profile (energy, danceability, happiness), recently played history, animated stats, light/dark mode, and a shareable Top 5 card.',
    image: '/spotify-dashboard-preview.jpeg',
    demo: 'https://spotify-dashboard-tau.vercel.app',
    github: 'https://github.com/Khalidfarah1/spotify-dashboard',
  },
  {
    name: "It's a Date",
    tags: ['HTML', 'CSS', 'JavaScript', 'localStorage'],
    desc: "A premium e-commerce website for a home-owned dates & chocolate business. Features a product catalogue with basket management, promo codes, a login/sign-up flow, and a Rituals.com-inspired design with animated gradients and a purple/gold palette.",
    image: '/its-a-date-preview.jpeg',
    demo: 'https://it-s-a-date-lmm2dy5f6-khalidfarah1s-projects.vercel.app/index.html',
    github: 'https://github.com/Khalidfarah1/It-s-a-Date',
  },
]

export default function Projects() {
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
    <section ref={ref} className="section reveal" id="projects">
      <div className="section-header">
        <span className="section-num" style={{ color: 'var(--orange)' }}>03</span>
        <h2 className="section-title">Featured Projects</h2>
        <div className="section-line" style={{ background: 'linear-gradient(to right, var(--orange), transparent)' }} />
      </div>

      <div className="projects-list">
        {projects.map(({ name, tags, desc, image, demo, github }) => (
          <div key={name} className="project-row">
            <div>
              <div className="project-row-tags">
                {tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
              </div>
              <div className="project-row-name">{name}</div>
              <div className="project-row-desc">{desc}</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.75rem', flexShrink: 0 }}>
              <Image src={image} alt={`${name} preview`} width={160} height={100} className="project-row-img" />
              <div className="project-row-links">
                <a href={demo} target="_blank" rel="noopener noreferrer" className="proj-link">Live Demo ↗</a>
                <a href={github} target="_blank" rel="noopener noreferrer" className="proj-link">GitHub →</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
