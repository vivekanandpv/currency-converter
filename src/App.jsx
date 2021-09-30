import React, { useState } from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import { convert } from './utils';

function App() {
  const [domain, setDomain] = useState({
    fromCurrency: 'inr',
    toCurrency: 'usd',
    fromAmount: 0,
    toAmount: 0,
  });

  const currencies = ['inr', 'usd', 'eur'];

  const handleInput = (e) => {
    setDomain((state) => {
      const newState = { ...state, [e.target.name]: e.target.value };
      const toAmount = convert(
        newState.fromCurrency,
        newState.toCurrency,
        +newState.fromAmount
      );
      newState.toAmount = toAmount;

      return newState;
    });
  };

  return (
    <Fragment>
      <div className='container p-5'>
        <h3>Currency Converter</h3>
        <hr />
        <div className='form-group'>
          <label htmlFor='inputAmount'>Amount</label>
          <input
            type='number'
            className='form-control'
            id='fromAmount'
            name='fromAmount'
            value={domain.fromAmount}
            onChange={handleInput}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='fromCurrency'>From</label>
          <select
            name='fromCurrency'
            id='fromCurrency'
            className='form-control'
            onChange={handleInput}
          >
            <option value=''>--- Please Select ---</option>
            {currencies.map((c) => {
              return (
                <option value={c} key={c}>
                  {c}
                </option>
              );
            })}
          </select>
        </div>

        <div className='form-group'>
          <label htmlFor='toCurrency'>To</label>
          <select
            name='toCurrency'
            id='toCurrency'
            className='form-control'
            onChange={handleInput}
          >
            <option value=''>--- Please Select ---</option>
            {currencies.map((c) => {
              return (
                <option value={c} key={c}>
                  {c}
                </option>
              );
            })}
          </select>
        </div>

        <hr />

        <h4>Result: {domain.toAmount.toFixed(4)}</h4>
      </div>
    </Fragment>
  );
}

export default App;
