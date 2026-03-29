'use client'
import { useEffect, useRef } from 'react'

const skills = [
  { category: 'Frontend',       color: 'var(--accent)',  tags: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Responsive Design', 'Accessibility'] },
  { category: 'Backend',        color: 'var(--green)',   tags: ['Node.js', 'Express', 'Python', 'Java', 'Object-Oriented Programming', 'FastAPI', 'PHP', 'REST APIs', 'JWT / Auth'] },
  { category: 'Databases',      color: 'var(--orange)',  tags: ['PostgreSQL', 'MySQL', 'MongoDB', 'Prisma', 'SQL'] },
  { category: 'Tools & DevOps', color: 'var(--pink)',    tags: ['Git', 'GitHub', 'Docker', 'Linux', 'CI/CD', 'Vercel', 'VS Code'] },
]

const languages = [
  { name: 'JavaScript / TypeScript', pct: '95%', w: 0.95, color: 'var(--accent)' },
  { name: 'HTML & CSS',              pct: '98%', w: 0.98, color: 'var(--accent)' },
  { name: 'Node.js',                 pct: '88%', w: 0.88, color: 'var(--green)'  },
  { name: 'Python',                  pct: '80%', w: 0.80, color: 'var(--green)'  },
  { name: 'SQL',                     pct: '82%', w: 0.82, color: 'var(--orange)' },
  { name: 'PHP',                     pct: '70%', w: 0.70, color: 'var(--green)'  },
  { name: 'Bash / Shell',            pct: '62%', w: 0.62, color: 'var(--pink)'   },
]

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null)
  const langRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible') },
      { threshold: 0.08 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const el = langRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll<HTMLElement>('.lang-bar-fill').forEach((bar, i) => {
            const w = parseFloat(bar.dataset.w ?? '0')
            bar.style.transition = `transform 0.9s cubic-bezier(0.16,1,0.3,1) ${i * 0.09}s`
            bar.style.transform = `scaleX(${w})`
          })
        }
      },
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="section reveal" id="skills">
      <div className="section-header">
        <span className="section-num" style={{ color: 'var(--purple)' }}>02</span>
        <h2 className="section-title">Skills &amp; Technologies</h2>
        <div className="section-line" style={{ background: 'linear-gradient(to right, var(--purple), transparent)' }} />
      </div>

      <div className="skills-cols">
        {skills.map(({ category, color, tags }) => (
          <div key={category} className="skill-block" style={{ '--cat-color': color } as React.CSSProperties}>
            <div className="skill-block-title">{category}</div>
            <div className="skill-tags">
              {tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
            </div>
          </div>
        ))}
      </div>

      <div className="lang-sub-header">
        <span className="section-num" style={{ fontSize: '0.68rem', color: 'var(--purple)' }}>lang</span>
        <h3 className="section-title" style={{ fontSize: '1.05rem', fontWeight: 600 }}>Language Proficiency</h3>
        <div className="section-line" style={{ background: 'linear-gradient(to right, var(--purple), transparent)' }} />
      </div>

      <div className="lang-list" ref={langRef}>
        {languages.map(({ name, pct, w, color }) => (
          <div key={name} className="lang-row">
            <div className="lang-meta">
              <span className="lang-name-label">{name}</span>
              <span className="lang-pct" style={{ color }}>{pct}</span>
            </div>
            <div className="lang-bar-track">
              <div className="lang-bar-fill" data-w={String(w)} style={{ background: color }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
