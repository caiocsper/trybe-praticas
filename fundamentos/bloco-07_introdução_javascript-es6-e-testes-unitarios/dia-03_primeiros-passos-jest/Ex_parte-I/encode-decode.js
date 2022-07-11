const mapString = (obj, string) => string.split('').map(ele => obj[ele] ? obj[ele] : ele).join('');

const encode = string =>{
  if(typeof string === 'string'){
    const map = {
      a: 1,
      e: 2,
      i: 3,
      o: 4,
      u: 5,
    };

    return mapString(map, string);
  }

  throw new Error('parameter must be string');
};

const decode = string =>{
  if(typeof string === 'string'){
    const map = {
      1: 'a',
      2: 'e',
      3: 'i',
      4: 'o',
      5: 'u',
    };

    return mapString(map, string);
  }

  throw new Error('parameter must be string');
};

module.exports = { encode, decode };