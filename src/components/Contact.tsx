'use client'
import { useEffect, useRef, useState, FormEvent } from 'react'

export default function Contact() {
  const ref = useRef<HTMLElement>(null)
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

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

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://formspree.io/f/mykbkbdq', {
        method: 'POST',
        body: new FormData(e.currentTarget),
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('success')
        ;(e.target as HTMLFormElement).reset()
        setTimeout(() => setStatus('idle'), 5000)
      } else throw new Error()
    } catch {
      setStatus('error')
    }
  }

  return (
    <div id="contact-section">
      <section ref={ref} className="section reveal" id="contact">
        <div className="section-header">
          <span className="section-num" style={{ color: 'var(--green)' }}>05</span>
          <h2 className="section-title">Get In Touch</h2>
          <div className="section-line" style={{ background: 'linear-gradient(to right, var(--green), transparent)' }} />
        </div>
        <div className="contact-wrap">
          <div>
            <div className="contact-info-title">Let&apos;s work together.</div>
            <p className="contact-info-text">Whether you have a project to build, a role to fill, or just want to have a conversation — feel free to reach out through any channel below or use the form.</p>
            <div className="contact-cards">
              <a href="mailto:khalidfarah9@gmail.com" className="contact-card">
                <div className="contact-card-icon">
                  <svg viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7 10-7"/></svg>
                </div>
                <div><div className="contact-card-label">Email</div><div className="contact-card-val">khalidfarah9@gmail.com</div></div>
              </a>
              <a href="tel:+447517796530" className="contact-card">
                <div className="contact-card-icon">
                  <svg viewBox="0 0 24 24"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1A19.5 19.5 0 0 1 5.4 13a19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7A2 2 0 0 1 22 16.9z"/></svg>
                </div>
                <div><div className="contact-card-label">Phone</div><div className="contact-card-val">+44 7517 796 530</div></div>
              </a>
              <a href="https://github.com/khalidfarah1" target="_blank" rel="noopener noreferrer" className="contact-card">
                <div className="contact-card-icon">
                  <svg viewBox="0 0 24 24"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                </div>
                <div><div className="contact-card-label">GitHub</div><div className="contact-card-val">github.com/khalidfarah1</div></div>
              </a>
              <a href="https://www.linkedin.com/in/khalid-farah-435691147" target="_blank" rel="noopener noreferrer" className="contact-card">
                <div className="contact-card-icon">
                  <svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                </div>
                <div><div className="contact-card-label">LinkedIn</div><div className="contact-card-val">linkedin.com/in/khalid-farah-435691147</div></div>
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="field"><label>Name</label><input type="text" name="name" placeholder="Jane Smith" required /></div>
              <div className="field"><label>Email</label><input type="email" name="email" placeholder="jane@example.com" required /></div>
            </div>
            <div className="field"><label>Subject</label><input type="text" name="subject" placeholder="Project enquiry / collaboration / role..." /></div>
            <div className="field"><label>Message</label><textarea name="message" placeholder="Tell me about your project or opportunity..." required /></div>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={status === 'sending'}
              style={{ alignSelf: 'flex-start', ...(status === 'success' ? { background: '#43d9ad' } : {}) }}
            >
              {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message sent ✓' : 'Send Message →'}
            </button>
            {status === 'success' && <p style={{ marginTop: '0.75rem', fontSize: '0.85rem', color: '#43d9ad' }}>✓ Message sent! I&apos;ll get back to you soon.</p>}
            {status === 'error' && <p style={{ marginTop: '0.75rem', fontSize: '0.85rem', color: '#ff79c6' }}>Something went wrong. Please try emailing me directly.</p>}
          </form>
        </div>
      </section>
    </div>
  )
}
