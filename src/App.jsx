import React, { useState } from 'react';
import './App.css';

function App() {
  const [fromAirport, setFromAirport] = useState('');
  const [toAirport, setToAirport] = useState('');
  const [date, setDate] = useState('');
  const [passengers, setPassengers] = useState(1);
  const [log, setLog] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showLogin, setShowLogin] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const logEntry = `From: ${fromAirport}, To: ${toAirport}, Date: ${date}, Passengers: ${passengers}`;
    setLog([...log, logEntry]);
    console.log(logEntry);
    // Add your search logic here
  };

  const handleLogin = (event) => {
    event.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);
    // Add your login logic here
  };

  return (
    <div className="container">
      <button className="Login" onClick={() => setShowLogin(!showLogin)}>
        {showLogin ? 'Login' : 'Login'}
      </button>
      {showLogin && (
        <div className="login">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      )}
      <h1>Flight Comparison</h1>
      <form onSubmit={handleSubmit} className="form-inline">
        <div className="form-group">
          <label htmlFor="from-airport">From:</label>
          <select id="from-airport" value={fromAirport} onChange={(e) => setFromAirport(e.target.value)} required>
            <option value="">Select Airport</option>
            <option value="JFK">John F. Kennedy International Airport (JFK)</option>
            <option value="LAX">Los Angeles International Airport (LAX)</option>
            <option value="ORD">O'Hare International Airport (ORD)</option>
            <option value="DFW">Dallas/Fort Worth International Airport (DFW)</option>
            <option value="DEN">Denver International Airport (DEN)</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="to-airport">To:</label>
          <select id="to-airport" value={toAirport} onChange={(e) => setToAirport(e.target.value)} required>
            <option value="">Select Airport</option>
            <option value="JFK">John F. Kennedy International Airport (JFK)</option>
            <option value="LAX">Los Angeles International Airport (LAX)</option>
            <option value="ORD">O'Hare International Airport (ORD)</option>
            <option value="DFW">Dallas/Fort Worth International Airport (DFW)</option>
            <option value="DEN">Denver International Airport (DEN)</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="passengers">Passengers:</label>
          <input type="number" id="passengers" value={passengers} onChange={(e) => setPassengers(e.target.value)} min="1" required />
        </div>
        <button type="submit">Search Flights</button>
      </form>
      <div className="log">
        <h2>User Log</h2>
        <ul>
          {log.map((entry, index) => (
            <li key={index}>{entry}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;