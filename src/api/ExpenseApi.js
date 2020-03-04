const expenses = [
  {
    title: 'Internet',
    value: 240.00,
    createdAt: '1583278901000',
    executedAt: '1583883701000'
  }
];

const ExpenseApi =  {
  create: async expense => {
    expenses.push(expense);
    console.log(expenses);
  },
  getExpenss: async () => {
    return expenses;
  }
}

export default ExpenseApi;