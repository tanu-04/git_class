
function validateCreditCard(number) {
    const cleanedNumber = number.replace(/-/g, '');
    if (cleanedNumber.length !== 16 || !/^\d+$/.test(cleanedNumber)) {
        return { valid: false, number: number, error: 'wrong_length' };
    }

    const digits = cleanedNumber.split('').map(Number);
    if (new Set(digits).size === 1) {
        return { valid: false, number: number, error: 'only_one_digit' };
    }

    if (digits[15] % 2 !== 0) {
        return { valid: false, number: number, error: 'odd_final_digit' };
    }

    const sum = digits.reduce((acc, digit) => acc + digit, 0);
    if (sum <= 16) {
        return { valid: false, number: number, error: 'sum_too_small' };
    }

    return { valid: true, number: number };
}

console.log(validateCreditCard('9999-9999-8888-0000'));
console.log(validateCreditCard('6666-6666-6666-1666'));
console.log(validateCreditCard('a923-3211-9c01-1112'));
console.log(validateCreditCard('4444-4444-4444-4444'));
console.log(validateCreditCard('1111-1111-1111-1110'));
console.log(validateCreditCard('6666-6666-6666-6661'));