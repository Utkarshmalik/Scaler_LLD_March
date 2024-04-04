// Consider a scenario where we have an array of transactions, each representing a purchase with a type (either 'purchase' or 'refund') and an associated amount. We want to calculate the total amount of purchases (excluding refunds) made by a specific user.

const transactions = [
  { userId: 'user123', type: 'purchase', amount: 50 },
  { userId: 'user456', type: 'purchase', amount: 30 },
  { userId: 'user123', type: 'refund', amount: 20 },
  { userId: 'user123', type: 'purchase', amount: 80 },
  { userId: 'user456', type: 'refund', amount: 10 }
];

//const userId = 'user123';
// ans:130

function calculateAmount(userId, transactions){

    // Filter transactions for the specific user and type 'purchase'
    const userPurchases = transactions.filter(transaction =>
         transaction.type==="purchase" && transaction.userId===userId);

// Extract the purchase amounts from filtered transactions
    const purchaseAmounts = userPurchases.map(transaction => transaction.amount);


// Calculate the total purchase amount using reduce
const totalPurchaseAmount = purchaseAmounts.reduce(
    (accumulator, currentValue) =>accumulator + currentValue,  0)

    return totalPurchaseAmount;
}


const answer = calculateAmount("user123",transactions);

console.log(answer);