import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const categories = [
  'Berber',
  'Sallon Flokesh',
  'Sallon Thonjsh',
  'Sallon Bukurie',
  'Studio Tatuazhesh',
  'Spa',
  'Tjeter',
]

const initialValues = {
  ownerName: '',
  email: '',
  phone: '',
  password: '',
  confirmPassword: '',
  businessName: '',
  businessCategory: '',
}

function RegisterPage() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [message, setMessage] = useState('')
  const [formError, setFormError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  useEffect(() => {
    document.title = 'Regjistro Biznesin | SalonOS'

    let description = document.querySelector('meta[name="description"]')
    if (!description) {
      description = document.createElement('meta')
      description.setAttribute('name', 'description')
      document.head.appendChild(description)
    }

    description.setAttribute(
      'content',
      'Krijo llogarine e biznesit tend dhe menaxho rezervimet, klientet, stafin dhe sherbimet ne nje platforme te thjeshte per sallone.',
    )
  }, [])

  function handleChange(event) {
    const { name, value } = event.target

    setValues((currentValues) => ({
      ...currentValues,
      [name]: value,
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

    if (!values.ownerName.trim()) {
      nextErrors.ownerName = 'Emri i plote i pronarit eshte i detyrueshem.'
    }

    if (!values.email.trim()) {
      nextErrors.email = 'Email eshte i detyrueshem.'
    } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
      nextErrors.email = 'Shkruaj nje email te vlefshem.'
    }

    if (!values.phone.trim()) {
      nextErrors.phone = 'Numri i telefonit eshte i detyrueshem.'
    } else if (!/^[\d\s()+.-]{7,}$/.test(values.phone)) {
      nextErrors.phone = 'Shkruaj nje numer telefoni te vlefshem.'
    }

    if (!values.password) {
      nextErrors.password = 'Fjalekalimi eshte i detyrueshem.'
    } else if (values.password.length < 8) {
      nextErrors.password = 'Fjalekalimi duhet te kete te pakten 8 karaktere.'
    }

    if (!values.confirmPassword) {
      nextErrors.confirmPassword = 'Konfirmo fjalekalimin.'
    } else if (values.confirmPassword !== values.password) {
      nextErrors.confirmPassword = 'Fjalekalimet nuk perputhen.'
    }

    if (!values.businessName.trim()) {
      nextErrors.businessName = 'Emri i biznesit eshte i detyrueshem.'
    }

    if (!values.businessCategory) {
      nextErrors.businessCategory = 'Zgjidh kategorine e biznesit.'
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
      <section
        className="auth-shell auth-shell-register"
        aria-label="SalonOS registration"
      >
        <div className="auth-form-side">
          <Link className="auth-brand" to="/" aria-label="SalonOS">
            <span className="brand-mark">S</span>
            <span>SalonOS</span>
          </Link>

          <div className="auth-card register-card">
            <p className="auth-kicker">Konfigurim biznesi</p>
            <h1>Krijo llogari biznesi</h1>
            <p className="auth-subtitle">
              Shto te dhenat kryesore tani. Sherbimet, stafi dhe rregullat e
              rezervimit mund te shtohen me pas.
            </p>

            <form className="auth-form" onSubmit={handleSubmit} noValidate>
              <div className="form-grid">
                <label className="field-group" htmlFor="ownerName">
                  <span>Emri i plote i pronarit</span>
                  <input
                    id="ownerName"
                    name="ownerName"
                    type="text"
                    autoComplete="name"
                    placeholder="Arta Krasniqi"
                    value={values.ownerName}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.ownerName)}
                    aria-describedby={
                      errors.ownerName ? 'ownerName-error' : undefined
                    }
                  />
                  {errors.ownerName && (
                    <small className="field-error" id="ownerName-error">
                      {errors.ownerName}
                    </small>
                  )}
                </label>

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

                <label className="field-group" htmlFor="phone">
                  <span>Numri i telefonit</span>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="+1 555 123 4567"
                    value={values.phone}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                  />
                  {errors.phone && (
                    <small className="field-error" id="phone-error">
                      {errors.phone}
                    </small>
                  )}
                </label>

                <label className="field-group" htmlFor="businessName">
                  <span>Emri i biznesit</span>
                  <input
                    id="businessName"
                    name="businessName"
                    type="text"
                    autoComplete="organization"
                    placeholder="Glow Studio"
                    value={values.businessName}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.businessName)}
                    aria-describedby={
                      errors.businessName ? 'businessName-error' : undefined
                    }
                  />
                  {errors.businessName && (
                    <small className="field-error" id="businessName-error">
                      {errors.businessName}
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
                      autoComplete="new-password"
                      placeholder="Te pakten 8 karaktere"
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

                <label className="field-group" htmlFor="confirmPassword">
                  <span>Konfirmo fjalekalimin</span>
                  <span className="password-field">
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={showConfirmPassword ? 'text' : 'password'}
                      autoComplete="new-password"
                      placeholder="Perserit fjalekalimin"
                      value={values.confirmPassword}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.confirmPassword)}
                      aria-describedby={
                        errors.confirmPassword
                          ? 'confirmPassword-error'
                          : undefined
                      }
                    />
                    <button
                      className="password-toggle"
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword((current) => !current)
                      }
                      aria-label={
                        showConfirmPassword
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
                  {errors.confirmPassword && (
                    <small className="field-error" id="confirmPassword-error">
                      {errors.confirmPassword}
                    </small>
                  )}
                </label>

                <label
                  className="field-group form-grid-full"
                  htmlFor="businessCategory"
                >
                  <span>Kategoria e biznesit</span>
                  <select
                    id="businessCategory"
                    name="businessCategory"
                    value={values.businessCategory}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.businessCategory)}
                    aria-describedby={
                      errors.businessCategory
                        ? 'businessCategory-error'
                        : undefined
                    }
                  >
                    <option value="">Zgjidh nje kategori</option>
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                  {errors.businessCategory && (
                    <small className="field-error" id="businessCategory-error">
                      {errors.businessCategory}
                    </small>
                  )}
                </label>
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
                {isSubmitting ? 'Duke krijuar...' : 'Krijo llogari biznesi'}
              </button>

              <p className="auth-switch">
                Ke tashme nje llogari? <Link to="/login">Hyr</Link>
              </p>

              {message && <p className="form-success">{message}</p>}
            </form>
          </div>
        </div>

        <aside className="auth-showcase" aria-label="SalonOS preview">
          <div className="showcase-copy">
            <p className="showcase-kicker">Fillo me qartesi</p>
            <h2>Nise sot hapesiren e punes per sallonin tend.</h2>
            <p>
              Krijo profilin e biznesit, shto sherbimet dhe menaxho rezervimet
              e para.
            </p>
          </div>

          <div className="showcase-preview" aria-hidden="true">
            <div className="preview-topbar">
              <span></span>
              <strong>Konfigurimi</strong>
              <em>72%</em>
            </div>
            <div className="preview-stats">
              <div>
                <span>Sherbime</span>
                <strong>12</strong>
              </div>
              <div>
                <span>Stafi</span>
                <strong>5</strong>
              </div>
            </div>
            <div className="preview-queue">
              <div>
                <span>Profili</span>
                <strong>Te dhenat e biznesit</strong>
                <em>Perfunduara</em>
              </div>
              <div>
                <span>Hapi tjeter</span>
                <strong>Shto menune e sherbimeve</strong>
                <em>Gati</em>
              </div>
              <div>
                <span>Pastaj</span>
                <strong>Fto stafin</strong>
                <em>Opsionale</em>
              </div>
            </div>
          </div>
        </aside>
      </section>
    </main>
  )
}

export default RegisterPage
