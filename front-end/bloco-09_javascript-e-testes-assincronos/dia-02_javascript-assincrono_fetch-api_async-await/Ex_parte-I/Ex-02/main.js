const cryptoListContainer = document.getElementById('crypto');
const currentCurrencyEle = document.getElementById('current-currency');

const fetchCrypto = async () => {
  const API_CRYPTO_URL = 'https://api.coincap.io/v2/assets';

  return await fetch(API_CRYPTO_URL)
    .then(response => response.json())
    .then(result => result)
    .catch(error => console.log('error', error));
};

const fillCryptoList = async () => {
  try {
    const { data } = await fetchCrypto();
    data.filter((_, ind) => ind < 10).forEach(({ symbol, name, priceUsd }) => {
      const newLi = document.createElement('li');
      newLi.innerText = `${name} (${symbol}): ${Number(priceUsd).toFixed(2)}`;
      cryptoListContainer.appendChild(newLi);
    });
  } catch(error) {
    console.log(error);
  }
};

window.onload = fillCryptoList;