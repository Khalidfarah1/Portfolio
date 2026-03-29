import Link from 'next/link'

export default function NotFound() {
  return (
    <div style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      textAlign: 'center', padding: '2rem', position: 'relative', zIndex: 1,
    }}>
      <div style={{ fontFamily: 'var(--font-jetbrains-mono), monospace', fontSize: '6rem', fontWeight: 700, color: 'var(--accent)', lineHeight: 1, marginBottom: '1rem' }}>
        404
      </div>
      <p style={{ fontSize: '1.2rem', color: 'var(--text-dim)', marginBottom: '0.5rem' }}>Page not found</p>
      <p style={{ fontFamily: 'var(--font-jetbrains-mono), monospace', fontSize: '0.8rem', color: 'var(--text-dim)', marginBottom: '2.5rem' }}>
        {'// this route doesn\'t exist'}
      </p>
      <Link href="/" className="btn btn-ghost">← Back to portfolio</Link>
    </div>
  )
}
