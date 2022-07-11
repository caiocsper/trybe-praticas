const techList = (arr, str) => Array.isArray(arr) && !arr.length ? 'Vazio!' : arr.sort().map(curr => ({ tech: curr, name:str }));

module.exports = techList;