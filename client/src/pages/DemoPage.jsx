import { Link } from 'react-router-dom'

function DemoPage() {
  return (
    <main className="simple-page">
      <Link className="brand" to="/" aria-label="SalonOS">
        <span className="brand-mark">S</span>
        <span>SalonOS</span>
      </Link>

      <section className="simple-panel">
        <p className="eyebrow">Demo</p>
        <h1>Kerko Demo</h1>
        <p>
          Kjo faqe do te mbaje formen e kontaktit per sallonet qe duan te
          provojne SalonOS.
        </p>
        <Link className="button button-primary" to="/">
          Kthehu ne Kryefaqe
        </Link>
      </section>
    </main>
  )
}

export default DemoPage
