const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

let a = dragon;

const battleMembers = { mage, warrior, dragon };

const randomDmg = (min, max) => Math.round(Math.random() * (max - min)) + min;

const charAttackCalc = {
  dragon: (dragon) => {
    const minDmg = 15;
    const maxDmg = dragon.strength;

    return randomDmg(minDmg, maxDmg);
  },
  warrior: (warrior) => {
    const minDmg = warrior.strength;
    const maxDmg = warrior.strength * warrior.weaponDmg;

    return randomDmg(minDmg, maxDmg);
  },
  mage: (mage) => {
    const minDmg = mage.intelligence;
    const maxDmg = mage.intelligence * 2;
    const minSpellCost = 15;
    const turnStats = {
      manaSpent: minSpellCost,
      damageDealt: randomDmg(minDmg, maxDmg),
    }

    if (mage.mana < minSpellCost) { 
      turnStats.manaSpent = 0;
      turnStats.damageDealt = 'Not enough mana!';
    }

    return turnStats;
  },
};

const attackHealth = (attacker, defender) => {
  if (defender.healthPoints - attacker.damage > 0) {
    defender.healthPoints -= attacker.damage;
  } else {
    defender.healthPoints = 'DEAD';
  }
}

const gameActions = {
  warriorTurn: (callback) => {
    if (typeof warrior.healthPoints === 'number') {
      warrior.damage = callback(warrior);
      attackHealth(warrior, dragon);
    } else {
      console.log(`The warrior cannot attack as it is ${warrior.healthPoints}`);
    }
  },
  mageTurn: (callback) => {
    const { manaSpent, damageDealt } = callback(mage);

    if (typeof damageDealt === 'number' && typeof mage.healthPoints === 'number') {
      mage.damage = damageDealt;
      mage.mana -= manaSpent;
      attackHealth(mage, dragon);
    } else {
      typeof mage.healthPoints === 'number' ? console.log(damageDealt) : console.log(`The mage cannot attack as it is ${mage.healthPoints}`);
    }
  },
  dragonTurn: (callback) => {
    if (typeof dragon.healthPoints === 'number') {
      dragon.damage = callback(dragon);
      attackHealth(dragon, mage);
      attackHealth(dragon, warrior);
    } else {
      console.log(`The dragon cannot attack as it is ${dragon.healthPoints}`);
    }
  },
  battleStats: () => console.log(battleMembers),
};