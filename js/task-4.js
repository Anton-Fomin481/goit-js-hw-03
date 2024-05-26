function makeTransaction(quantity, pricePerDroid, customerCredits) {
  const totalPrice = quantity * pricePerDroid;
  if (totalPrice <= customerCredits) {
    return `You bought ${quantity} droids, you have ${
      customerCredits - totalPrice
    } credits left.`;
  } else {
    return `Insufficient funds!`;
  }
}
