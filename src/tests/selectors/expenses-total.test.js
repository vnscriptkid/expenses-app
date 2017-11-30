import getTotalExpenses from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return correctly total of expenses', () => {
    expect(getTotalExpenses(expenses)).toBe(195 + 888888 + 2000);
})

test('should return 0 if no expenses', () => {
    expect(getTotalExpenses([])).toBe(0);
});

test('should correctly add up a single expense', () => {
    expect(getTotalExpenses([expenses[0]])).toBe(195);
})