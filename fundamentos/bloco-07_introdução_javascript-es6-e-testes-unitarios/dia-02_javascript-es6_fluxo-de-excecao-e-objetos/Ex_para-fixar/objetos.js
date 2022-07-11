const obj = {}

const addToObject = (object, key, value) => {
  object[key] = value;
}

addToObject(obj, 'key', 'value');
console.log(obj);