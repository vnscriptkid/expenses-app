export default (expenses) => {
    return expenses
    .map((expense) => expense.amount)
    .reduce((accumulator, currentAmount) => accumulator + currentAmount, 0);        
}