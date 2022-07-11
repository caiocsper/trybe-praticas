const fetch = require('node-fetch');

const fetchCrypto = async () => {
  const API_CRYPTO_URL = 'https://api.coincap.io/v2/assets';

  const response = await fetch(API_CRYPTO_URL)
  const data = await response.json();
  return data;
};

const fetchCurrency = async (curCurrency, newCurrency) => {
  const API_CURRENCY_URL = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${curCurrency}/${newCurrency}.json`;

  return await fetch(API_CURRENCY_URL)
    .then(response => response.json())
    .then(({ [newCurrency]: currencyValue }) => currencyValue)
    .catch(error => console.log('error', error));
};

module.exports = { fetchCrypto, fetchCurrency }