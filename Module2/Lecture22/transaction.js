// You are given an array of objects representing transactions made by customers. Each object contains the following properties:

// customerId: Number, representing the unique ID of the customer.
// amount: Number, representing the amount of the transaction.
// date: String, representing the date of the transaction (in the format "YYYY-MM-DD").const

// Your task is to write a JavaScript function using functional programming techniques that takes this array of transaction objects and returns an object containing the following information:

// totalTransactions: Total number of transactions.
// totalAmount: Total amount of all transactions.
// averageTransactionAmount: Average amount of transactions.
// transactionsPerDay: An object where keys are dates and values are arrays containing transactions made on that date.
// transactionsByCustomer: An object where keys are customer IDs and values are arrays containing transactions made by that customer.

// input 


// // output: 
// // {
// //   totalTransactions:5,
// //   totalAmount:,
// //   averageTransactionAmount,
// //   transactionsPerDay :
// //   transactionsByCustomer
// // };

// {
//     2024-03-01: 2,
//     2024-03-02: 2, 
//     2024-03-03 :1
// }


const transactions = [
  { customerId: 1, amount: 100, date: '2024-03-01' },
  { customerId: 2, amount: 150, date: '2024-03-01' },
  { customerId: 1, amount: 200, date: '2024-03-02' },
  { customerId: 3, amount: 50, date: '2024-03-02' },
  { customerId: 2, amount: 120, date: '2024-03-03' }
];

// Step 1: Calculate the total number of transactions.
const totalTransactions  = transactions.length;

// Step 2: Calculate the total amount of all transactions.
const totalAmount = transactions.reduce((total,transaction)=> total + transaction.amount,0);


// Step 3: Calculate the average amount of transactions.
const averageTransactionAmount  = totalAmount / totalTransactions;


// Step 4: Group transactions by date.

const transactionsPerDay = transactions.reduce((acc,transaction)=>{

    if(acc[transaction.date]==undefined){
        acc[transaction.date] = [];
    } 
    
    acc[transaction.date].push(transaction);

    return acc;

},{})


// Step 5: Group transactions by customer.
const transactionsByCustomer = transactions.reduce((acc,transaction)=>{

    if(acc[transaction.customerId]==undefined){
        acc[transaction.customerId] = [];
    } 
    
    acc[transaction.customerId].push(transaction);

    return acc;

},{})

console.log(transactionsByCustomer);