import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <main className="simple-page">
      <section className="simple-panel">
        <p className="eyebrow">404</p>
        <h1>Faqja nuk u gjet</h1>
        <p>Rruga qe kerkove nuk ekziston ende ne SalonOS.</p>
        <Link className="button button-primary" to="/">
          Kthehu ne Kryefaqe
        </Link>
      </section>
    </main>
  )
}

export default NotFoundPage
