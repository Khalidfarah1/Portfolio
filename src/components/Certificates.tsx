'use client'
import { useEffect, useRef } from 'react'

const certs = [
  { emoji: '🎓', bg: 'rgba(79,195,247,0.12)',   date: 'Jan 2024', name: 'Google IT Support Professional Certificate',        issuer: 'Google · Coursera',                        link: '#' },
  { emoji: '⚛️', bg: 'rgba(67,217,173,0.12)',   date: 'Mar 2024', name: 'Meta Front-End Developer Professional Certificate', issuer: 'Meta · Coursera',                          link: '#' },
  { emoji: '☁️', bg: 'rgba(189,147,249,0.12)',  date: 'Jun 2024', name: 'AWS Cloud Practitioner Essentials',                 issuer: 'Amazon Web Services · AWS Skill Builder',  link: '#' },
  { emoji: '🟨', bg: 'rgba(255,184,108,0.12)',  date: 'Aug 2024', name: 'JavaScript Algorithms and Data Structures',         issuer: 'freeCodeCamp',                             link: '#' },
  { emoji: '🔷', bg: 'rgba(255,121,198,0.12)',  date: 'Oct 2024', name: 'Responsive Web Design',                            issuer: 'freeCodeCamp',                             link: '#' },
  { emoji: '🐍', bg: 'rgba(79,195,247,0.12)',   date: 'Dec 2024', name: 'Python for Everybody Specialisation',               issuer: 'University of Michigan · Coursera',        link: '#' },
]

export default function Certificates() {
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
    <section ref={ref} className="section reveal" id="certs">
      <div className="section-header">
        <span className="section-num" style={{ color: 'var(--pink)' }}>04</span>
        <h2 className="section-title">Certificates</h2>
        <div className="section-line" />
      </div>

      <div className="certs-grid">
        {certs.map(({ emoji, bg, date, name, issuer, link }) => (
          <div key={name} className="cert-card">
            <div className="cert-issuer-row">
              <div className="cert-badge" style={{ background: bg }}>{emoji}</div>
              <span className="cert-date">{date}</span>
            </div>
            <div className="cert-name">{name}</div>
            <div className="cert-issuer">{issuer}</div>
            <a href={link} className="cert-link">View Certificate ↗</a>
          </div>
        ))}
      </div>
    </section>
  )
}
