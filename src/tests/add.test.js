const add = (a, b) => a + b;

const generateGreeting = (name = 'Anonymous') => `Hello ${name}`

test('should add 2 numbers', () => {
    const result = add(3, 4);
    expect(result).toBe(7);
});

test('should generate hello with correct name', () => {
    const result = generateGreeting('Thanh');
    expect(result).toBe('Hello Thanh');
})

test('should generate greeting for no name', () => {
    const result = generateGreeting();
    expect(result).toBe('Hello Anonymous');
})

