const RNGZeroToOneHundred = () => Math.round(Math.random() * 100);

const strToUpper = (str) => str.toUpperCase();

const strFirstLetter = (str) => str.at(0);

const strConcat = (str, ...restStr) => str.concat(...restStr);

const fetchDog = async () => {
  const url = "https://dog.ceo/api/breeds/image/random";
  const requestResponse = await fetch(url);
  const requestData = await requestResponse.json();

  return requestData
}

module.exports = { RNGZeroToOneHundred, strToUpper, strFirstLetter, strConcat, fetchDog };
