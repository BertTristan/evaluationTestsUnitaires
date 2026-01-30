import { describe, test, expect, beforeEach } from 'vitest';
import { CustomStack, StackCantBeEmptyException } from '../src/CustomStack';

describe('CustomStack', () => {
    let stack: CustomStack;

    beforeEach(() => {
        stack = new CustomStack();
    });

    // count et push sont testés ensemble car count est le seul moyen
    // de vérifier que push fonctionne,
    // les séparer dupliquerait du code inutilement
    describe('count & push', () => {
        test.each([
            [[], 0],
            [[1], 1],
            [[1, 2], 2],
            [[1, 2, 3, 10, 50], 5]
        ])("Après push de %s, count doit retourner %i", (values: number[], result: number) => {
            values.forEach(value => stack.push(value));
            expect(stack.count()).toBe(result);
        });
    });

    describe('pop', () => {
        test.each([
            [[1], 1],
            [[1, 2], 2],
            [[1, 2, 3], 3],
            [[5, 10, 15], 15]
        ])("Après push de %s, pop doit retourner %i", (values: number[], result: number) => {
            values.forEach(value => stack.push(value));
            expect(stack.pop()).toBe(result);
        });

        test.each([
            [[1, 2, 3], 2],
            [[5, 10], 1],
            [[1, 2, 3, 4], 3]
        ])("Après push de %s et un pop, count doit être %i", (values: number[], result: number) => {
            values.forEach(value => stack.push(value));
            stack.pop();
            expect(stack.count()).toBe(result);
        });

        test("Lancer StackCantBeEmptyException sur une pile vide", () => {
            expect(() => stack.pop()).toThrow(StackCantBeEmptyException);
        });
    });
});
