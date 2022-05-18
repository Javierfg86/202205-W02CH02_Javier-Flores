import { push, length, pop, shift, unshift, join, some } from './methods.js';

describe('Given push function', () => {
    describe('When it is run with 0', () => {
        test('Then it should return aData.length', () => {
            const aData = [];
            const result = push(aData, 0);
            expect(result).toBe(aData.length);
        });
    });
    describe('When it is run with array and undefined', () => {
        test('Then it should return aData.length', () => {
            const aData = [];
            const result = push(aData, undefined);
            expect(result).toBe(aData.length);
        });
    });
    describe('When it is run with array and array', () => {
        test('Then it should return aData.length', () => {
            const aData = [];
            const aData2 = [];
            const result = push(aData, aData2);
            expect(result).toBe(aData.length);
        });
    });
    describe('When it is run with array and object', () => {
        test('Then it should return aData.length', () => {
            const aData = [];
            const aData2 = {};
            const result = push(aData, aData2);
            expect(result).toBe(aData.length);
        });
    });
});

describe('Given length function', () => {
    describe('When it is run aData', () => {
        test('Then it should return aData.length', () => {
            const aData = [3];
            const result = length(aData);
            expect(result).toBe(aData.length);
        });
    });
});

describe('Given pop function', () => {
    describe('When it is run array [1,2]', () => {
        test('Then it should return 2', () => {
            const array = [1, 2];
            const result = pop(array);
            expect(result).toBe(2);
        });
    });
    describe('When it is run array', () => {
        test('Then it should return array.length -1 ', () => {
            const array = [1, 2];
            const result = pop(array);
            expect(array).not.toContain(result);
        });
    });
});
describe('Given shift function', () => {
    describe('When it is run array [1,2]', () => {
        test('Then it should return 1', () => {
            const array = [1, 2];
            const result = shift(array);
            expect(result).toBe(1);
        });
    });
});
describe('Given unshift function', () => {
    describe('When add 3 to [1,2]', () => {
        test('Then it should return 3', () => {
            const array = [1, 2];
            const item = 3;
            const result = unshift(array, item);
            expect(result).toBe(3);
        });
    });
});
describe('Given join function', () => {
    describe('When it is run an array', () => {
        test('Then it should return a string', () => {
            const aData = [];
            const result = join(aData);
            expect(result).toBe('');
        });
    });
});
describe('When it is run [1,2,3]', () => {
    test('Then it should return "1,2,3"', () => {
        const aData = [1, 2, 3];
        const result = join(aData);
        expect(result).toBe('1,2,3');
    });
});
describe('Given some function', () => {
    describe('When [1,2,3] includes 3 value', () => {
        test('Then it should return true', () => {
            const aData = [1, 2, 3];
            const item = 3;
            const result = some(aData, item);
            expect(result).toBe(true);
        });
    });
});
