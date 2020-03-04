const expenses = [
  {
    title: 'Internet',
    value: 240.00,
    createdAt: '1583278901000',
    executedAt: '1583883701000'
  }
];

const ExpenseApi =  {
  create: expense => {
    expenses.push(expense);
  },
  getAll: () => {
    return expenses.slice();
  }
}

export default ExpenseApi;