function cashRegisterUserInput() {
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const cart = {};

  function addItem() {
    rl.question('Enter item name (or "done"): ', (itemName) => {
      if (itemName.toLowerCase() === 'done') {
        const total = cashRegister(cart);
        console.log(`Total: $${total.toFixed(2)}`);
        rl.close();
      } else {
        rl.question(`Enter price for ${itemName}: `, (price) => {
          const parsedPrice = parseFloat(price);
          if (!isNaN(parsedPrice)) {
            cart[itemName] = price;
            addItem();
          } else {
            console.log('Invalid price. Please enter a number.');
            addItem();
          }
        });
      }
    });
  }

  addItem();
}

function cashRegister(cart) {
  let total = 0;
  for (const item in cart) {
    total += parseFloat(cart[item]);
  }
  return total;
}

cashRegisterUserInput();