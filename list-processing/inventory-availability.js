let transactions = [
  { id: 101, movement: 'in', quantity: 5 },
  { id: 105, movement: 'in', quantity: 10 },
  { id: 102, movement: 'out', quantity: 17 },
  { id: 101, movement: 'in', quantity: 12 },
  { id: 103, movement: 'out', quantity: 20 },
  { id: 102, movement: 'out', quantity: 15 },
  { id: 105, movement: 'in', quantity: 25 },
  { id: 101, movement: 'out', quantity: 18 },
  { id: 102, movement: 'in', quantity: 22 },
  { id: 103, movement: 'out', quantity: 15 },
];

isItemAvailable(101, transactions); // false
isItemAvailable(103, transactions); // false
isItemAvailable(105, transactions); // true

function transactionsFor(id, transactions) {
  return transactions.filter((transaction) => transaction.id === id);
}

function isItemAvailable(item, transactions) {
  let quantity = transactionsFor(item, transactions).reduce(
    (sum, transaction) => {
      return transaction.movement === 'in'
        ? sum + transaction.quantity
        : sum - transaction.quantity;
    },
    0
  );

  console.log(quantity > 0);
}
