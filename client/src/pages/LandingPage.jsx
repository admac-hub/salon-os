import { Link } from 'react-router-dom'

const stats = [
  { label: 'Kliente Totale', value: '235' },
  { label: 'Termine', value: '345' },
  { label: 'Te Ardhura', value: '€2,450' },
]

const features = [
  {
    title: 'Rezervime Online',
    text: 'Lejo klientet te rezervojne sherbime dhe orare pa telefonata te panevojshme.',
  },
  {
    title: 'Menaxhim Stafi',
    text: 'Organizo oraret, ngarkesen dhe performancen e ekipit ne nje panel te qarte.',
  },
  {
    title: 'Raporte Biznesi',
    text: 'Shiko te ardhurat, trendet dhe aktivitetin e sallonit me raporte te thjeshta.',
  },
]

const clientLogos = ['Bella Studio', 'Glow Bar', 'Luxe Hair', 'Nail Room']

const growthSections = [
  {
    title: 'Create and automate email and SMS campaigns',
    text: 'Do both, equally well. Invite customers back through your doors again and again with email and SMS campaigns that are truly “set it and forget it.”',
    visual: 'campaigns',
  },
  {
    title: 'Sell more services with automatic upselling',
    text: 'Give employees and customers the option to bundle recommended services during bookings and check-ins.',
    visual: 'upsell',
    reverse: true,
  },
  {
    title: 'Maximize your client visits with both walk-ins and appointments',
    text: 'With real-time provider assignment, you can invite new guests into a timeslot without delaying loyal guests from booking the same timeslot.',
    visual: 'calendar',
  },
]

function LandingPage() {
  return (
    <main className="salon-page">
      <nav className="navbar" aria-label="Kryesore">
        <Link className="brand" to="/" aria-label="SalonOS">
          <span className="brand-mark">S</span>
          <span>SalonOS</span>
        </Link>
        <div className="nav-links" aria-label="Navigimi">
          <Link to="/">Platforma</Link>
          <Link to="/services">Sherbime</Link>
          <Link to="/demo">Demo</Link>
        </div>
      </nav>

      <section className="hero-section" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Software per sallone moderne</p>
          <h1>
            Platforma moderne per sallone bukurie{' '}
            <span className="highlight">all-in-one</span>
          </h1>
          <p className="hero-text">
            Menaxho terminet, klientet, stafin dhe rezervimet ne nje vend te
            vetem.
          </p>
          <div className="hero-actions" id="demo">
            <Link className="button button-primary" to="/demo">
              Kerko Demo
            </Link>
            <a className="button button-secondary" href="#features">
              Meso Me Shume
            </a>
          </div>
        </div>

        <div className="dashboard-card" aria-label="Paneli i SalonOS">
          <div className="dashboard-topbar">
            <div>
              <p className="dashboard-label">Pamje mujore</p>
              <h2>SalonOS Dashboard</h2>
            </div>
            <span className="status-pill">Live</span>
          </div>

          <div className="stats-grid">
            {stats.map((item) => (
              <div className="stat-card" key={item.label}>
                <p>{item.label}</p>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>

          <div className="schedule-panel">
            <div className="schedule-header">
              <span>Terminet e dites</span>
              <strong>12 aktive</strong>
            </div>
            <div className="appointment">
              <span className="time">09:30</span>
              <div>
                <strong>Arta K.</strong>
                <p>Ngjyrosje flokesh</p>
              </div>
            </div>
            <div className="appointment">
              <span className="time">11:00</span>
              <div>
                <strong>Elira M.</strong>
                <p>Manikyr klasik</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="client-logo-space" aria-label="Klientet tane">
        <p>Trusted by growing salons</p>
        <div className="client-logo-row">
          {clientLogos.map((logo) => (
            <span key={logo}>{logo}</span>
          ))}
        </div>
      </section>

      <section className="growth-section" aria-label="Salon growth tools">
        <h2>Maximize your revenue, efficiency, and client satisfaction</h2>

        <div className="growth-grid">
          {growthSections.map((section) => (
            <article
              className={`growth-row ${section.reverse ? 'growth-row-reverse' : ''}`}
              key={section.title}
            >
              <div className="growth-copy">
                <h3>{section.title}</h3>
                <p>{section.text}</p>
              </div>
              <div className={`product-visual product-visual-${section.visual}`}>
                {section.visual === 'campaigns' && (
                  <div className="monitor-mockup" aria-hidden="true">
                    <div className="mockup-window">
                      <div className="mockup-tabs">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                      <div className="campaign-grid">
                        <span>THANKS</span>
                        <span>BOOK NOW</span>
                        <span>Reminder</span>
                        <span>50% OFF</span>
                        <span>New look</span>
                        <span>Details</span>
                      </div>
                      <div className="mockup-bar"></div>
                    </div>
                    <div className="monitor-stand"></div>
                  </div>
                )}

                {section.visual === 'upsell' && (
                  <div className="tablet-mockup" aria-hidden="true">
                    <div className="tablet-header">
                      <span>Back</span>
                      <strong>Jan, what service would you like to book?</strong>
                      <span>Continue</span>
                    </div>
                    <div className="tablet-body">
                      <div className="service-line"></div>
                      <div className="upsell-panel">
                        <strong>What Add-ons would you like to add?</strong>
                        <div className="addon-grid">
                          <span>Hot Towel</span>
                          <span>Hair Oil</span>
                          <span>Bang trim</span>
                          <span>Styling</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {section.visual === 'calendar' && (
                  <div className="calendar-mockup" aria-hidden="true">
                    <div className="calendar-toolbar"></div>
                    <div className="calendar-board">
                      {Array.from({ length: 28 }).map((_, index) => (
                        <span key={index}></span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="features-section" id="features" aria-label="Vecorite">
        {features.map((feature) => (
          <article className="feature-card" key={feature.title}>
            <div className="feature-icon" aria-hidden="true">
              {feature.title.charAt(0)}
            </div>
            <h2>{feature.title}</h2>
            <p>{feature.text}</p>
          </article>
        ))}
      </section>
    </main>
  )
}

export default LandingPage
