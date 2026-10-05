import { useState } from 'react';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted:', { email, password, rememberMe });
    alert(`Sveiki sugrįžę, ${email}!`);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="card-header">
          <span className="card-mark" aria-hidden="true">
            K
          </span>
          <div>
            <p className="card-kicker">Mokomasis darbas</p>
            <h1>Projektas Kuro skaičiuoklė</h1>
          </div>
        </div>
        <p className="subtitle">Įveskite duomenis, kad prisijungtumėte</p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">El. paštas</label>
            <input
              type="email"
              id="email"
              placeholder="vardas@pastas.lt"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Slaptažodis</label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="form-options">
            <label className="remember-me">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              Prisiminti mane
            </label>
            <a href="#forgot" className="forgot-password">
              Pamiršote slaptažodį?
            </a>
          </div>

          <button type="submit" className="login-btn">
            Prisijungti
          </button>
        </form>

        <div className="login-footer">
          <p>
            Neturite paskyros? <a href="#signup">Registruotis</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
