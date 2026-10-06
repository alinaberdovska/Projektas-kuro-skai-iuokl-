import { useState } from 'react';
import './Profile.css';

function Profile({ email, profile, onSave, onBack, onLogout }) {
  const [name, setName] = useState(profile.name);
  const [phone, setPhone] = useState(profile.phone);
  const [message, setMessage] = useState('');

  const initials = name.trim()
    ? name.trim().split(/\s+/).slice(0, 2).map((part) => part[0]).join('').toLocaleUpperCase('lt-LT')
    : (email[0] || 'V').toLocaleUpperCase('lt-LT');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSave({ name: name.trim(), phone: phone.trim() });
    setMessage('Profilio pakeitimai išsaugoti.');
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
          <div>
            <p className="profile-kicker">Paskyros nustatymai</p>
            <h1 id="profile-title">Mano profilis</h1>
            <p className="profile-subtitle">Tvarkykite savo paskyros informaciją.</p>
          </div>
        </div>

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
