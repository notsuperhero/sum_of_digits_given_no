import { useState } from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState(null);

  const calculateSum = (inputStr) => {
    // Remove any non-digit characters just in case, though type="number" helps
    const cleanStr = inputStr.replace(/[^0-9]/g, '');
    
    if (!cleanStr) {
      setResult(null);
      return;
    }

    const digits = cleanStr.split('');
    const sum = digits.reduce((acc, curr) => acc + parseInt(curr, 10), 0);
    setResult(sum);
  };

  const handleChange = (e) => {
    const val = e.target.value;
    setNumber(val);
    calculateSum(val);
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Digit Sum Calculator</h1>
        <p className="subtitle">Enter a number to see the sum of its digits</p>
        
        <div className="input-group">
          <input
            type="number"
            placeholder="e.g. 12345"
            value={number}
            onChange={handleChange}
            className="number-input"
          />
        </div>

        {result !== null && (
          <div className="result-display">
            <span className="label">Sum:</span>
            <span className="value">{result}</span>
          </div>
        )}
        
        <div className="digits-preview">
          {number && number.split('').map((digit, index) => (
            <span key={index} className="digit-pill">{digit}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
