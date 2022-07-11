const checkLuckyNum = (num, luckyNum) => num === luckyNum;
const randomNum = (num, callback) => callback(num, Math.ceil(Math.random() * 6)) ? "Parabéns você ganhou" : "Tente novamente";

console.log(randomNum(2, checkLuckyNum));
