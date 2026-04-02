'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'

const terminalLines = [
  '<span class="t-punc">{</span>',
  '&nbsp;&nbsp;<span class="t-key">"name"</span><span class="t-punc">:</span> <span class="t-str">"Khalid Farah"</span><span class="t-punc">,</span>',
  '&nbsp;&nbsp;<span class="t-key">"role"</span><span class="t-punc">:</span> <span class="t-str">"Full Stack Developer"</span><span class="t-punc">,</span>',
  '&nbsp;&nbsp;<span class="t-key">"location"</span><span class="t-punc">:</span> <span class="t-str">"United Kingdom"</span><span class="t-punc">,</span>',
  '&nbsp;&nbsp;<span class="t-key">"focus"</span><span class="t-punc">:</span> <span class="t-punc">[</span>',
  '&nbsp;&nbsp;&nbsp;&nbsp;<span class="t-str">"Frontend"</span><span class="t-punc">,</span>',
  '&nbsp;&nbsp;&nbsp;&nbsp;<span class="t-str">"Backend"</span><span class="t-punc">,</span>',
  '&nbsp;&nbsp;&nbsp;&nbsp;<span class="t-str">"APIs &amp; Databases"</span>',
  '&nbsp;&nbsp;<span class="t-punc">],</span>',
  '&nbsp;&nbsp;<span class="t-key">"available"</span><span class="t-punc">:</span> <span class="t-val">true</span>',
  '<span class="t-punc">}</span>',
  '<span class="t-comment">// open to new opportunities</span> <span class="t-cursor"></span>',
]

export default function Hero() {
  const terminalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = terminalRef.current
    if (!el) return
    let index = 0
    function typeLine() {
      if (!el || index >= terminalLines.length) return
      const div = document.createElement('div')
      if (index === terminalLines.length - 1) div.style.marginTop = '0.5rem'
      div.innerHTML = terminalLines[index]
      div.style.opacity = '0'
      div.style.transform = 'translateY(4px)'
      div.style.transition = 'opacity 0.2s, transform 0.2s'
      el.appendChild(div)
      requestAnimationFrame(() => {
        div.style.opacity = '1'
        div.style.transform = 'translateY(0)'
      })
      index++
      setTimeout(typeLine, 80)
    }
    const timer = setTimeout(typeLine, 600)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="hero">
      <div className="hero-left">
        <div className="hero-eyebrow">Full Stack Developer</div>
        <div className="hero-name-row">
          <div className="hero-avatar">
            <Image src="/Khalid-farah-avatar.png" alt="Khalid Farah" width={160} height={160} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }} />
          </div>
          <h1>Khalid<br />Farah</h1>
        </div>
        <p className="hero-role">Building for the <em>web</em>, front to back.</p>
        <p className="hero-bio">
          I design and develop high-quality web applications — from polished, accessible interfaces to scalable server-side systems. Based in the UK and open to freelance and full-time opportunities.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">View Projects</a>
          <a href="#contact" className="btn btn-ghost">Get In Touch</a>
        </div>
      </div>

      <div className="hero-right">
        <div className="terminal">
          <div className="terminal-bar">
            <span className="t-dot t-red" />
            <span className="t-dot t-yellow" />
            <span className="t-dot t-green" />
            <span className="terminal-title">khalid.json</span>
          </div>
          <div className="terminal-body" ref={terminalRef} />
        </div>
      </div>
    </section>
  )
}
