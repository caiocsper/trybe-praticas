const cryptoListContainer = document.getElementById('crypto');
const currentCurrencyEle = document.getElementById('current-currency');
const newCurrencyInput = document.getElementById('currency');
const convertCurrencyBtn = document.getElementById('convert');

const fetchCrypto = async () => {
  const API_CRYPTO_URL = 'https://api.coincap.io/v2/assets';

  const response = await fetch(API_CRYPTO_URL)
  const { data } = await response.json();
  return data;
};

const fetchCurrency = async (curCurrency, newCurrency) => {
  const API_CURRENCY_URL = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${curCurrency}/${newCurrency}.json`;

  const response = await fetch(API_CURRENCY_URL)
  const { [newCurrency]: value } = await response.json();
  return value;
};

const fillCryptoList = async () => {
  try {
    const cryptoData = await fetchCrypto();
    currentCurrencyEle.innerText = `Currency: USD`;
    cryptoData.filter((_, ind) => ind < 10).forEach(({ symbol, name, priceUsd }) => {
      const newLi = document.createElement('li');
      newLi.innerText = `${name} (${symbol}): ${Number(priceUsd).toFixed(5)}`;
      cryptoListContainer.appendChild(newLi);
    });
  } catch(error) {
    console.log(error);
  }
};

const convertToCurrency = async () => {
  try {
    const regex = /(?<=\x3a\s)[\w|.]+/;
    const getContentsAfterColon = ele => ele.innerText.match(regex).at(0);
    const curCurrency = getContentsAfterColon(currentCurrencyEle).toLowerCase();
    const newCurrency = newCurrencyInput.value;
    const currencyValue = await fetchCurrency(curCurrency, newCurrency.toLowerCase());
    const cryptoList = Array.from(cryptoListContainer.children);

    cryptoList.forEach((ele) => {
      const curPrice = getContentsAfterColon(ele);
      const price = (Number(curPrice) * currencyValue).toFixed(5);
      ele.innerText = ele.innerText.replace(regex, `${price}`);
    });
    currentCurrencyEle.innerText = `Currency: ${newCurrency.toUpperCase()}`;
  } catch(error) {
    console.log(error);
  }
};

window.onload = () => {
  fillCryptoList();
  convertCurrencyBtn.addEventListener('click', convertToCurrency);
};