import { useState } from 'react';
import './Profile.css';

function Profile({ email, profile, onSave, onBack, onLogout }) {
  const [name, setName] = useState(profile.name);
  const [phone, setPhone] = useState(profile.phone);
  const [message, setMessage] = useState('');
  const [defaultConsumption, setDefaultConsumption] = useState('7.5');
  const [currency, setCurrency] = useState('EUR');
  const [preferencesMessage, setPreferencesMessage] = useState('');

  const initials = name.trim()
    ? name.trim().split(/\s+/).slice(0, 2).map((part) => part[0]).join('').toLocaleUpperCase('lt-LT')
    : 'JJ';
  const displayName = name.trim() || 'Jonas Jonaitis';

  const handleSubmit = (event) => {
    event.preventDefault();
    onSave({ name: name.trim(), phone: phone.trim() });
    setMessage('Profilio pakeitimai išsaugoti.');
  };

  const handlePreferencesSubmit = (event) => {
    event.preventDefault();
    setPreferencesMessage('Numatytosios nuostatos išsaugotos.');
  };

  return (
    <main className="profile-page">
      <section className="profile-card" aria-labelledby="profile-title">
        <header className="profile-header">
          <button type="button" className="profile-back" onClick={onBack}>
            <span aria-hidden="true">←</span> Grįžti į skaičiuoklę
          </button>
          <button type="button" className="profile-logout" onClick={onLogout}>
            Atsijungti
          </button>
        </header>

        <div className="profile-intro">
          <div className="profile-avatar" aria-hidden="true">{initials}</div>
          <div className="profile-identity">
            <p className="profile-kicker">Paskyros nustatymai</p>
            <h1 id="profile-title">{displayName}</h1>
            <p className="profile-subtitle">{email || 'jonas@example.com'}</p>
            <div className="profile-badges" aria-label="Paskyros būsena">
              <span className="profile-badge">Vairuotojas</span>
              <span className="profile-badge profile-badge-active">
                <span className="profile-status-dot" aria-hidden="true" /> Aktyvus narys
              </span>
            </div>
          </div>
        </div>

        <section className="profile-stats" aria-labelledby="profile-stats-title">
          <div className="profile-section-heading">
            <div>
              <p className="profile-kicker">Jūsų aktyvumas</p>
              <h2 id="profile-stats-title">Kelionių statistika</h2>
            </div>
            <span className="profile-stats-period">Viso laiko</span>
          </div>
          <div className="profile-stats-grid">
            <article className="profile-stat-card">
              <span className="profile-stat-icon" aria-hidden="true">#</span>
              <p className="profile-stat-label">Atlikta skaičiavimų</p>
              <p className="profile-stat-value">12 <span>skaičiavimų</span></p>
            </article>
            <article className="profile-stat-card">
              <span className="profile-stat-icon profile-stat-icon-blue" aria-hidden="true">↗</span>
              <p className="profile-stat-label">Apskaičiuotas atstumas</p>
              <p className="profile-stat-value">1 450 <span>km</span></p>
            </article>
            <article className="profile-stat-card">
              <span className="profile-stat-icon profile-stat-icon-cyan" aria-hidden="true">⛽</span>
              <p className="profile-stat-label">Mėgstamiausias kuras</p>
              <p className="profile-stat-value">Dyzelinas</p>
            </article>
          </div>
        </section>

        <section className="profile-preferences" aria-labelledby="profile-preferences-title">
          <div className="profile-section-heading">
            <div>
              <p className="profile-kicker">Programėlė</p>
              <h2 id="profile-preferences-title">Numatytosios nuostatos</h2>
            </div>
          </div>
          <form className="preferences-form" onSubmit={handlePreferencesSubmit}>
            <div className="preferences-fields">
              <div className="profile-field">
                <label htmlFor="default-consumption">Numatytosios kuro sąnaudos (l/100 km)</label>
                <input
                  id="default-consumption"
                  type="number"
                  min="0.1"
                  max="100"
                  step="0.1"
                  inputMode="decimal"
                  value={defaultConsumption}
                  onChange={(event) => {
                    setDefaultConsumption(event.target.value);
                    setPreferencesMessage('');
                  }}
                  required
                />
              </div>
              <div className="profile-field">
                <label htmlFor="preferred-currency">Pageidaujama valiuta</label>
                <select
                  id="preferred-currency"
                  value={currency}
                  onChange={(event) => {
                    setCurrency(event.target.value);
                    setPreferencesMessage('');
                  }}
                >
                  <option value="EUR">EUR (€)</option>
                  <option value="USD">USD ($)</option>
                </select>
              </div>
            </div>
            <div className="preferences-footer" aria-live="polite">
              <p className="profile-message">{preferencesMessage}</p>
              <button type="submit" className="profile-save">Išsaugoti nuostatas</button>
            </div>
          </form>
        </section>

        <form className="profile-form" onSubmit={handleSubmit}>
          <div className="profile-field">
            <label htmlFor="profile-name">Vardas ir pavardė</label>
            <input
              id="profile-name"
              type="text"
              autoComplete="name"
              placeholder="Įrašykite vardą ir pavardę"
              value={name}
              onChange={(event) => { setName(event.target.value); setMessage(''); }}
              maxLength={80}
            />
          </div>

          <div className="profile-field">
            <label htmlFor="profile-email">El. paštas</label>
            <input id="profile-email" type="email" value={email} readOnly />
            <span className="profile-hint">El. pašto adresas naudojamas prisijungimui.</span>
          </div>

          <div className="profile-field">
            <label htmlFor="profile-phone">Telefono numeris <span>(nebūtina)</span></label>
            <input
              id="profile-phone"
              type="tel"
              autoComplete="tel"
              placeholder="+370 600 00000"
              value={phone}
              onChange={(event) => { setPhone(event.target.value); setMessage(''); }}
              maxLength={30}
            />
          </div>

          <div className="profile-form-footer" aria-live="polite">
            <p className="profile-message">{message}</p>
            <button type="submit" className="profile-save">Išsaugoti pakeitimus</button>
          </div>
        </form>
      </section>
    </main>
  );
}

export default Profile;
