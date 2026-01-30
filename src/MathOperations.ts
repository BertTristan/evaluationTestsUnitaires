export class MathOperations {
    public add(numberOne: number, numberTwo: number): number {
        return numberOne + numberTwo;
    }

    public divide(numberOne: number, numberTwo: number): number {
        if (numberTwo === 0) {
            throw new Error("Second parameter can't be equal to zero");
        }

        return numberOne / numberTwo;
    }

    // Plus dur !
    public getOddNumbers(limit: number): number[] {
        if (limit < 0) {
            throw new Error("Limit argument can't be negative");
        }

        const numberList: number[] = [];

        for (let i = 0; i <= limit; i++) {
            if (i % 2 !== 0) {
                numberList.push(i);
            }
        }

        return numberList;
    }
}
