const wakeUp = () => 'Acordando!!';
const coffeeTime = () => 'Bora tomar café!!';
const sleepTime = () => 'Partiu dormir!!';
const doingThings = callback => console.log(callback());

doingThings(wakeUp);
doingThings(coffeeTime);
doingThings(sleepTime);