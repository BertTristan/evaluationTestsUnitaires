import { describe, test, expect, beforeEach } from 'vitest';
import { MathOperations } from '../src/MathOperations';

describe('MathOperations', () => {
    let math: MathOperations;

    beforeEach(() => {
        math = new MathOperations();
    });

    describe('add', () => {
        test.each([
            [2, 3, 5],
            [-2, -3, -5],
            [5, 0, 5],
            [0, 0, 0]
        ])("Additionner %i et %i doit retourner %i", (a: number, b: number, result: number) => {
            const mathResult = math.add(a, b);
            expect(mathResult).toBe(result);
        });
    });

    describe('divide', () => {
        test.each([
            [10, 2, 5],
            [50, 2, 25],
            [0, 5, 0]
        ])("Diviser %i par %i doit retourner %i", (a: number, b: number, result: number) => {
            const mathResult = math.divide(a, b);
            expect(mathResult).toBe(result);
        });

        test.each([
            10, 5, 2
        ])("Diviser par zéro doit lancer une erreur", (a: number) => {
            expect(() => math.divide(a, 0)).toThrow("Second parameter can't be equal to zero");
        });
    });

    describe('getOddNumbers', () => {
        test.each([
            [5, [1, 3, 5]],
            [0, []],
            [1, [1]],
            [10, [1, 3, 5, 7, 9]]
        ])("Retourner les nombres impairs jusqu'à %i", (limit: number, result: number[]) => {
            const mathResult = math.getOddNumbers(limit);
            expect(mathResult).toEqual(result);
        });

        test.each([
            -4, -25, -100
        ])("Une limite négative doit lancer une erreur", (limit: number) => {
            expect(() => math.getOddNumbers(limit)).toThrow("Limit argument can't be negative");
        });
    });
});
