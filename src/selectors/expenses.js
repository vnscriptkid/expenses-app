
// Get the expenses then filter following conditions passed in, finally sort the outcome with sortBy
export default (expenses, { text, sortBy, startDate, endDate }) => {    
    return expenses.filter((expense) => {
        // get all the valid expenses that fit the date and match the text
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt > startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt < endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        // finally sort the filtered expenses from previous step and sort depend on value in sortBy
        if (sortBy === 'date')
            return a.createdAt - b.createdAt;
        else if (sortBy === 'amount')
            return a.amount - b.amount;
    })
}