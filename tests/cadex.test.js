/* eslint-disable no-undef */
const data = require('../data/parts.json');

describe('Data', () => {
    it('should be an object', () => {
        expect(data).toBeInstanceOf(Object);
    });
    it('should at least contain 4 properties (names, adjectives, verbs, complements)', () => {
        expect(data).toHaveProperty('names');
        expect(data).toHaveProperty('adjectives');
        expect(data).toHaveProperty('verbs');
        expect(data).toHaveProperty('complements');
    });
});
