/* eslint-disable no-undef */
const controller = require('../app/controllers/controller');

const mockResponse = {
    json: jest.fn((data) => data),
};

let result;

describe('Get cadex', () => {
    beforeAll(() => {
        result = controller.getCadex('', mockResponse);
    });

    it('should call response.json', () => {
        expect(mockResponse.json).toHaveBeenCalled();
        expect(mockResponse.json).toHaveBeenCalledTimes(1);
        expect(mockResponse.json).toHaveBeenCalledWith(result);
    });

    it('should send a non empty string', () => {
        expect(typeof result).toBe('string');
        expect(result.length).toBeGreaterThan(0);
    });
});
