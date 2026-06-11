import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const initialValues = {
  email: '',
  password: '',
  rememberMe: false,
}

function LoginPage() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [message, setMessage] = useState('')
  const [formError, setFormError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  useEffect(() => {
    document.title = 'Hyrje per Biznes | SalonOS'

    let description = document.querySelector('meta[name="description"]')
    if (!description) {
      description = document.createElement('meta')
      description.setAttribute('name', 'description')
      document.head.appendChild(description)
    }

    description.setAttribute(
      'content',
      'Hyr ne panelin e biznesit per te menaxhuar rezervimet, klientet, stafin dhe sherbimet e sallonit tend.',
    )
  }, [])

  function handleChange(event) {
    const { checked, name, type, value } = event.target

    setValues((currentValues) => ({
      ...currentValues,
      [name]: type === 'checkbox' ? checked : value,
    }))

    setErrors((currentErrors) => ({
      ...currentErrors,
      [name]: '',
    }))
    setMessage('')
    setFormError('')
  }

  function validateForm() {
    const nextErrors = {}

    if (!values.email.trim()) {
      nextErrors.email = 'Email eshte i detyrueshem.'
    } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
      nextErrors.email = 'Shkruaj nje email te vlefshem.'
    }

    if (!values.password) {
      nextErrors.password = 'Fjalekalimi eshte i detyrueshem.'
    } else if (values.password.length < 8) {
      nextErrors.password = 'Fjalekalimi duhet te kete te pakten 8 karaktere.'
    }

    return nextErrors
  }

  function handleSubmit(event) {
    event.preventDefault()

    const nextErrors = validateForm()
    setErrors(nextErrors)
    setMessage('')

    if (Object.keys(nextErrors).length > 0) {
      setFormError('Kontrollo fushat e shenuara dhe provo perseri.')
      return
    }

    setFormError('')
    setIsSubmitting(true)

    window.setTimeout(() => {
      setIsSubmitting(false)
      setMessage('Te dhenat duken ne rregull. Lidhja me backend vjen me pas.')
    }, 700)
  }

  return (
    <main className="auth-page">
      <section className="auth-shell auth-shell-login" aria-label="SalonOS login">
        <div className="auth-form-side">
          <Link className="auth-brand" to="/" aria-label="SalonOS">
            <span className="brand-mark">S</span>
            <span>SalonOS</span>
          </Link>

          <div className="auth-card">
            <p className="auth-kicker">Hyrje per biznes</p>
            <h1>Mire se u ktheve</h1>
            <p className="auth-subtitle">
              Hyr per te menaxhuar rezervimet, klientet, stafin dhe kujtesat.
            </p>

            <form className="auth-form" onSubmit={handleSubmit} noValidate>
              <label className="field-group" htmlFor="email">
                <span>Email</span>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="owner@salon.com"
                  value={values.email}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <small className="field-error" id="email-error">
                    {errors.email}
                  </small>
                )}
              </label>

              <label className="field-group" htmlFor="password">
                <span>Fjalekalimi</span>
                <span className="password-field">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    autoComplete="current-password"
                    placeholder="Shkruaj fjalekalimin"
                    value={values.password}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.password)}
                    aria-describedby={
                      errors.password ? 'password-error' : undefined
                    }
                  />
                  <button
                    className="password-toggle"
                    type="button"
                    onClick={() => setShowPassword((current) => !current)}
                    aria-label={
                      showPassword
                        ? 'Fshih fjalekalimin'
                        : 'Shfaq fjalekalimin'
                    }
                  >
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </button>
                </span>
                {errors.password && (
                  <small className="field-error" id="password-error">
                    {errors.password}
                  </small>
                )}
              </label>

              <div className="auth-options">
                <label className="remember-option" htmlFor="rememberMe">
                  <input
                    id="rememberMe"
                    name="rememberMe"
                    type="checkbox"
                    checked={values.rememberMe}
                    onChange={handleChange}
                  />
                  <span>Me mbaj mend</span>
                </label>

                <a className="auth-link" href="mailto:support@salonos.com">
                  Ke harruar fjalekalimin?
                </a>
              </div>

              {formError && (
                <p className="form-error" role="alert">
                  {formError}
                </p>
              )}

              <button
                className="button button-primary auth-submit"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Duke hyre...' : 'Hyr'}
              </button>

              <p className="auth-switch">
                I ri ne SalonOS?{' '}
                <Link to="/register">Krijo llogari biznesi</Link>
              </p>

              {message && <p className="form-success">{message}</p>}
            </form>
          </div>
        </div>

        <aside className="auth-showcase" aria-label="SalonOS preview">
          <div className="showcase-copy">
            <p className="showcase-kicker">Qendra premium per sallonin</p>
            <h2>Menaxho diten e sallonit me me pak stres.</h2>
            <p>
              Rezervimet, radha e klienteve, stafi dhe kujtesat ne nje hapesire
              te thjeshte pune.
            </p>
          </div>

          <div className="showcase-preview" aria-hidden="true">
            <div className="preview-topbar">
              <span></span>
              <strong>Sot</strong>
              <em>Radha live</em>
            </div>
            <div className="preview-stats">
              <div>
                <span>Rezervime</span>
                <strong>28</strong>
              </div>
              <div>
                <span>Te ardhura</span>
                <strong>$3.4k</strong>
              </div>
            </div>
            <div className="preview-queue">
              <div>
                <span>09:30</span>
                <strong>Mia R.</strong>
                <em>Ngjyrosje flokesh</em>
              </div>
              <div>
                <span>10:15</span>
                <strong>Ava K.</strong>
                <em>Manikyr</em>
              </div>
              <div>
                <span>11:00</span>
                <strong>Noah P.</strong>
                <em>Prerje berberi</em>
              </div>
            </div>
          </div>
        </aside>
      </section>
    </main>
  )
}

export default LoginPage
