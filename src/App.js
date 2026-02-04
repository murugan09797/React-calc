import { useState } from 'react';
import './App.css';

const KEYS = [
  ['AC', '+/-', '%', '/'],
  ['7', '8', '9', '*'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
  ['0', '.', '='],
];

const LABELS = {
  '/': '÷',
  '*': '×',
  '-': '−',
  '+': '+',
  '=': '=',
  'AC': 'AC',
  '+/-': '+/−',
  '%': '%',
  '.': '.',
};

const formatNumber = (value) => {
  if (value === 'Error') {
    return value;
  }
  const numberValue = Number(value);
  if (Number.isNaN(numberValue)) {
    return '0';
  }
  const [integer, decimal] = value.split('.');
  const formattedInteger = Number(integer).toLocaleString('en-US');
  if (decimal !== undefined) {
    return `${formattedInteger}.${decimal}`;
  }
  return formattedInteger;
};

function App() {
  const [display, setDisplay] = useState('0');
  const [storedValue, setStoredValue] = useState(null);
  const [pendingOperator, setPendingOperator] = useState(null);
  const [waitingForNext, setWaitingForNext] = useState(false);

  const resetAll = () => {
    setDisplay('0');
    setStoredValue(null);
    setPendingOperator(null);
    setWaitingForNext(false);
  };

  const inputDigit = (digit) => {
    if (waitingForNext) {
      setDisplay(digit);
      setWaitingForNext(false);
      return;
    }

    setDisplay((prev) => (prev === '0' ? digit : `${prev}${digit}`));
  };

  const inputDecimal = () => {
    if (waitingForNext) {
      setDisplay('0.');
      setWaitingForNext(false);
      return;
    }

    setDisplay((prev) => (prev.includes('.') ? prev : `${prev}.`));
  };

  const toggleSign = () => {
    setDisplay((prev) => {
      if (prev === '0') {
        return prev;
      }
      return prev.startsWith('-') ? prev.slice(1) : `-${prev}`;
    });
  };

  const percent = () => {
    setDisplay((prev) => {
      const numberValue = Number(prev);
      if (Number.isNaN(numberValue)) {
        return prev;
      }
      return String(numberValue / 100);
    });
  };

  const calculate = (firstValue, secondValue, operator) => {
    const first = Number(firstValue);
    const second = Number(secondValue);

    if (Number.isNaN(first) || Number.isNaN(second)) {
      return 'Error';
    }

    switch (operator) {
      case '+':
        return String(first + second);
      case '-':
        return String(first - second);
      case '*':
        return String(first * second);
      case '/':
        return second === 0 ? 'Error' : String(first / second);
      default:
        return String(second);
    }
  };

  const handleOperator = (operator) => {
    if (display === 'Error') {
      resetAll();
      return;
    }

    if (pendingOperator && storedValue !== null && !waitingForNext) {
      const result = calculate(storedValue, display, pendingOperator);
      setDisplay(result);
      setStoredValue(result);
    } else if (storedValue === null) {
      setStoredValue(display);
    }

    setPendingOperator(operator === '=' ? null : operator);
    setWaitingForNext(true);
  };

  const handleKey = (key) => {
    if (key === 'AC') {
      resetAll();
      return;
    }

    if (key === '+/-') {
      toggleSign();
      return;
    }

    if (key === '%') {
      percent();
      return;
    }

    if (key === '.') {
      inputDecimal();
      return;
    }

    if (['+', '-', '*', '/', '='].includes(key)) {
      handleOperator(key);
      return;
    }

    if (Number.isInteger(Number(key))) {
      inputDigit(key);
    }
  };

  const getKeyClass = (key) => {
    if (['AC', '+/-', '%'].includes(key)) {
      return 'key key--utility';
    }
    if (['/', '*', '-', '+', '='].includes(key)) {
      return `key key--operator${key === '=' ? ' key--equals' : ''}`;
    }
    if (key === '0') {
      return 'key key--digit key--zero';
    }
    return 'key key--digit';
  };

  return (
    <div className="app">
      <main className="calculator" aria-label="Calculator">
        <header className="calculator__header">
          <h1>Calculator</h1>
          <p>Quick math with clean, tactile controls.</p>
        </header>
        <div className="calculator__display" role="status" aria-live="polite">
          {formatNumber(display)}
        </div>
        <div className="calculator__keys">
          {KEYS.flat().map((key) => (
            <button
              key={key}
              type="button"
              className={getKeyClass(key)}
              onClick={() => handleKey(key)}
            >
              {LABELS[key] ?? key}
            </button>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
