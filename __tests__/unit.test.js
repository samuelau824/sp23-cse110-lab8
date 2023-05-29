// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('isPhoneNumber true #1', () => {
    const result = functions.isPhoneNumber('626-475-3495');
    expect(result).toBe(true);
});

test('isPhoneNumber true #2', () => {
    const result = functions.isPhoneNumber('(626)-475-3495');
    expect(result).toBe(true);
});

test('isPhoneNumber false #1', () => {
    const result = functions.isPhoneNumber('000');
    expect(result).toBe(false);
});

test('isPhoneNumber false #2', () => {
    const result = functions.isPhoneNumber('626 475 3495');
    expect(result).toBe(false);
});

test('isEmail true #1', () => {
    const result = functions.isEmail('seau@ucsd.edu');
    expect(result).toBe(true);
});

test('isEmail true #2', () => {
    const result = functions.isEmail('bob123@gmail.com');
    expect(result).toBe(true);
});

test('isEmail false #1', () => {
    const result = functions.isEmail('seau@ucsd.');
    expect(result).toBe(false);
});

test('isEmail false #2', () => {
    const result = functions.isEmail('sam123gmail');
    expect(result).toBe(false);
});

test('isStrongPassword true #1', () => {
    const result = functions.isStrongPassword('StrongPa33');
    expect(result).toBe(true);
});

test('isStrongPassword true #2', () => {
    const result = functions.isStrongPassword('Str0ngPass_');
    expect(result).toBe(true);
});

test('isStrongPassword false #1', () => {
    const result = functions.isStrongPassword('7');
    expect(result).toBe(false);
});

test('isStrongPassword false #2', () => {
    const result = functions.isStrongPassword('supercalifragilisticexpialidocious');
    expect(result).toBe(false);
});

test('isDate true #1', () => {
    const result = functions.isDate('5/28/2023');
    expect(result).toBe(true);
});

test('isDate true #2', () => {
    const result = functions.isDate('08/24/2002');
    expect(result).toBe(true);
});

test('isDate false #1', () => {
    const result = functions.isDate('123/132/312');
    expect(result).toBe(false);
});

test('isDate false #2', () => {
    const result = functions.isDate('1');
    expect(result).toBe(false);
});

test('isHexColor true #1', () => {
    const result = functions.isHexColor('#000000');
    expect(result).toBe(true);
});

test('isHexColor true #2', () => {
    const result = functions.isHexColor('#022187');
    expect(result).toBe(true);
});

test('isHexColor false #1', () => {
    const result = functions.isHexColor('1111111');
    expect(result).toBe(false);
});

test('isHexColor false #2', () => {
    const result = functions.isHexColor('#ZZZZZZ');
    expect(result).toBe(false);
});

