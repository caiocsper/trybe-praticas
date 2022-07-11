const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  const { order: { delivery: {deliveryPerson} }} = order;
  const { address } = order;

  console.log(`Olá ${deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, ${address.street}, Nº: ${address.number}, AP: ${address.apartment}`);
}

customerInfo(order);

const orderModifier = (order) => {
  const { order: { pizza }} = order;
  const { order: { drinks: { coke } }} = order;

  order.name = 'Luiz Silva';
  order.payment.total = 50;

  console.log(`Olá ${order.name}, o total do seu pedido de ${Object.keys(pizza).join(', ')} e ${coke.type} é R$ 50,00.`);
}

orderModifier(order);