import { Link } from 'react-router-dom'

function ServicesPage() {
  return (
    <main className="simple-page">
      <Link className="brand" to="/" aria-label="SalonOS">
        <span className="brand-mark">S</span>
        <span>SalonOS</span>
      </Link>

      <section className="simple-panel">
        <p className="eyebrow">Sherbime</p>
        <h1>Sherbimet e SalonOS</h1>
        <p>
          Ketu mund te ndertojme faqen per rezervime online, menaxhim stafi,
          kliente, pagesa dhe raporte.
        </p>
        <Link className="button button-primary" to="/">
          Kthehu ne Kryefaqe
        </Link>
      </section>
    </main>
  )
}

export default ServicesPage
