import { useState } from 'react';
import { calculateTripFuel } from '../utils/fuel';
import './FuelCalculator.css';

function parsePositiveNumber(value) {
  const trimmed = value.trim().replace(',', '.');
  const number = Number(trimmed);
  if (!trimmed || Number.isNaN(number) || number <= 0) {
    return null;
  }
  return number;
}

function formatNumber(value, suffix) {
  return `${value.toLocaleString('lt-LT', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })} ${suffix}`;
}

function formatQuantity(value, suffix) {
  return `${value.toLocaleString('lt-LT', {
    maximumFractionDigits: 2,
  })} ${suffix}`;
}

function FuelCalculator({ userEmail, onLogout, onProfile }) {
  const [distanceKm, setDistanceKm] = useState('');
  const [consumption, setConsumption] = useState('');
  const [fuelType, setFuelType] = useState('Benzinas');
  const [price, setPrice] = useState('');
  const [peopleCount, setPeopleCount] = useState('4');
  const [error, setError] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const parsedDistance = parsePositiveNumber(distanceKm);
    const parsedConsumption = parsePositiveNumber(consumption);
    const parsedPrice = parsePositiveNumber(price);
    const parsedPeopleCount = Number(peopleCount);

    if (!parsedDistance) {
      setResult(null);
      setError('Įveskite teigiamą nuvažiuotų kilometrų skaičių.');
      return;
    }

    if (!parsedConsumption) {
      setResult(null);
      setError('Įveskite teigiamas automobilio sąnaudas (l/100 km).');
      return;
    }

    if (!parsedPrice) {
      setResult(null);
      setError('Įveskite teigiamą kuro kainą (€/l).');
      return;
    }

    if (!Number.isInteger(parsedPeopleCount) || parsedPeopleCount <= 0) {
      setResult(null);
      setError('Įveskite bent 1 kelionės dalyvį.');
      return;
    }

    setError('');
    setResult({
      ...calculateTripFuel({
        distanceKm: parsedDistance,
        consumptionPer100km: parsedConsumption,
        pricePerLiter: parsedPrice,
      }),
      fuelType,
      distanceKm: parsedDistance,
      peopleCount: parsedPeopleCount,
    });
  };

  return (
    <div className="fuel-container">
      <div className="fuel-card">
        <div className="fuel-header">
          <div className="fuel-title-row">
            <span className="fuel-mark" aria-hidden="true">
              ⛽
            </span>
            <div>
              <p className="fuel-kicker">Kuro sąnaudos</p>
              <h1>Kuro skaičiuoklė</h1>
            </div>
          </div>
          <div className="fuel-header-actions">
            <button type="button" className="fuel-profile" onClick={onProfile}>
              Profilis
            </button>
            <button type="button" className="fuel-logout" onClick={onLogout}>
              Atsijungti
            </button>
          </div>
        </div>
        <p className="fuel-subtitle">
          {userEmail
            ? `Sveiki, ${userEmail}. Įveskite kelionės duomenis ir apskaičiuokite kuro kiekį bei kainą.`
            : 'Įveskite kelionės duomenis ir apskaičiuokite kuro kiekį bei kainą.'}
        </p>

        <form onSubmit={handleSubmit}>
          <div className="fuel-form-group">
            <label htmlFor="fuelType">Kuro rūšis</label>
            <select
              id="fuelType"
              value={fuelType}
              onChange={(e) => setFuelType(e.target.value)}
            >
              <option value="Benzinas">Benzinas</option>
              <option value="Dyzelinas">Dyzelinas</option>
              <option value="LPG">LPG</option>
              <option value="Savo kaina">Kita kuro rūšis / savo kaina</option>
            </select>
          </div>

          <div className="fuel-form-group">
            <label htmlFor="distanceKm">Nuvažiuoti kilometrai</label>
            <input
              id="distanceKm"
              type="number"
              inputMode="decimal"
              min="0"
              step="any"
              placeholder="pvz. 250"
              value={distanceKm}
              onChange={(e) => setDistanceKm(e.target.value)}
              required
            />
          </div>

          <div className="fuel-form-group">
            <label htmlFor="consumption">Sąnaudos (l/100 km)</label>
            <input
              id="consumption"
              type="number"
              inputMode="decimal"
              min="0"
              step="any"
              placeholder="pvz. 6.5"
              value={consumption}
              onChange={(e) => setConsumption(e.target.value)}
              required
            />
          </div>

          <div className="fuel-form-group">
            <label htmlFor="price">Kuro kaina (€/l)</label>
            <input
              id="price"
              type="number"
              inputMode="decimal"
              min="0"
              step="any"
              placeholder="Įrašykite kainą, pvz. 1,59"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>

          <div className="fuel-form-group">
            <label htmlFor="peopleCount">Žmonių skaičius</label>
            <input
              id="peopleCount"
              type="number"
              inputMode="numeric"
              min="1"
              step="1"
              value={peopleCount}
              onChange={(e) => setPeopleCount(e.target.value)}
              required
            />
          </div>

          {error ? <p className="fuel-error">{error}</p> : null}

          <button type="submit" className="fuel-btn">
            Apskaičiuoti
          </button>
        </form>

        {result ? (
          <div className="fuel-results">
            <div className="fuel-result-heading">
              <span className="fuel-result-icon" aria-hidden="true">🚗</span>
              <div>
                <span className="fuel-result-label">Kelionės atstumas</span>
                <div className="fuel-result-distance">
                  {formatQuantity(result.distanceKm, 'km')}
                </div>
              </div>
              <span className="fuel-result-type">{result.fuelType}</span>
            </div>
            <div className="fuel-result-stats">
              <div className="fuel-result-card">
                <span className="fuel-result-label">Reikės kuro</span>
                <div className="fuel-result-value">{formatQuantity(result.fuelLiters, 'l')}</div>
              </div>
              <div className="fuel-result-card">
                <span className="fuel-result-label">Kelionės kaina</span>
                <div className="fuel-result-value">💶 {formatNumber(result.totalCost, '€')}</div>
              </div>
              <div className="fuel-result-card fuel-result-share">
                <span className="fuel-result-label">Vienam žmogui</span>
                <div className="fuel-result-value">
                  👤 {formatNumber(result.totalCost / result.peopleCount, '€')}
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default FuelCalculator;
