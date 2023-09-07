const Validator = require('./Validator');

test('should return true for valid username', () => {
    const result = Validator.validateUsername('my_username123');
    expect(result).toBe(true);
});

test('should return false for username with invalid characters', () => {
    const result = Validator.validateUsername('!username');
    expect(result).toBe(false);
});

test('should return false for username with more than three consecutive digits', () => {
    const result = Validator.validateUsername('12342134_username1234');
    expect(result).toBe(false);
});

test('should return false for username starting with an invalid character', () => {
    const result = Validator.validateUsername('_my_username2');
    expect(result).toBe(false);
});

test('should return false for username ending with an invalid character', () => {
    const result = Validator.validateUsername('2121my_username_');
    expect(result).toBe(false);
});