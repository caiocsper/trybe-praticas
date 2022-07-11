const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const showEmailList = (ele) => console.log(`O email ${ele} esta cadastrado em nosso banco de dados!`);

emailListInData.forEach(showEmailList);