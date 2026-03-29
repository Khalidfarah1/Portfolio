export default function Footer() {
  return (
    <footer>
      <div className="footer-left">
        &copy; {new Date().getFullYear()} <span>Khalid Farah</span> &mdash; Full Stack Developer
      </div>
      <div className="footer-right">
        <a href="mailto:khalidfarah9@gmail.com">Email</a>
        <a href="https://github.com/khalidfarah1" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/khalid-farah-435691147" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </footer>
  )
}
