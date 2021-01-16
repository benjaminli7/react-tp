import React, {useEffect, useState, useRef } from 'react';
import './App.css';
import DealsDisplay from './components/DealsDisplay';
import 'bootstrap/dist/css/bootstrap.min.css';
import Route from './components/Route';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  const [dealsData, setDealsData] = useState([]);
  const [listCurrencies, setListCurrencies] = useState([]);
  const [currency, setCurrency] = useState('USD');

  const prevCurrencyRef = useRef();
  useEffect(() => {
    prevCurrencyRef.current = currency;
  });
  const prevCurrency = prevCurrencyRef.current;

  useEffect(() => {
    fetch('https://www.cheapshark.com/api/1.0/deals')
      .then(res => res.json())
      .then(data => setDealsData(data))
  }, [])

  const API_KEY = "89b1aa8e50654d37b117";
  useEffect(() => {
    fetch(`https://free.currconv.com/api/v7/currencies?apiKey=${API_KEY}`)
      .then(res => res.json())
      .then(data => setListCurrencies(data['results']))
  }, [])

  const handleSelection = (e) => {
    setCurrency(e.target.value);
  }

  return (

    <div>
      <Header/>
      <Route path="/">
        <Home/>
      </Route>
      <Route path="/application">
        <div className="container">
          <select onChange={handleSelection}>
            {Object.keys(listCurrencies).map((item) => (
              <option key={listCurrencies[item].id} value={listCurrencies[item].id}> 
                {listCurrencies[item].id}
              </option>
            ))}      
          </select>
          <DealsDisplay deals={dealsData} cur={currency} prevCur={prevCurrency}/>
        </div>
      </Route>

    </div>

  );
}

export default App;

