/* eslint-disable no-undef */
const { cadex } = require('../app/services/cadex');
const controller = require('../app/controllers/controller');

jest.mock('../app/services/cadex', () => {
    const originalModule = jest.requireActual('../app/services/cadex');

    return {
        ...originalModule,
        cadex: {
            ...originalModule.cadex,
            generate: jest.fn(() => ({
                glue: () => 'test',
            })),
        },
    };
});

const mockResponse = {
    json: jest.fn((data) => data),
};

let result;

describe('Get cadex', () => {
    beforeAll(() => {
        result = controller.getCadex('', mockResponse);
    });

    it('should call cadex.generate', () => {
        expect(cadex.generate).toHaveBeenCalled();
        expect(mockResponse.json).toHaveBeenCalledTimes(1);
    });

    it('should call response.json', () => {
        expect(mockResponse.json).toHaveBeenCalled();
        expect(mockResponse.json).toHaveBeenCalledTimes(1);
        expect(mockResponse.json).toHaveBeenCalledWith('test');
    });

    it('should send a non empty string', () => {
        expect(typeof result).toBe('string');
        expect(result.length).toBeGreaterThan(0);
    });
});
