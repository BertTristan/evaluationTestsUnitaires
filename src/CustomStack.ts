// Cette classe n'a pas à être testée individuellement
export class StackCantBeEmptyException extends Error {
    constructor(message?: string) {
        super(message);
        this.name = 'StackCantBeEmptyException';
    }
}

export class CustomStack {
    private readonly _list: number[] = [];

    public count(): number {
        return this._list.length;
    }

    public push(value: number): void {
        this._list.push(value);
    }

    public pop(): number {
        if (this.count() === 0) {
            throw new StackCantBeEmptyException("Can't call Pop on an empty stack.");
        }

        const popped = this._list[this._list.length - 1]; // On cherche le dernier élément
        this._list.splice(this._list.length - 1, 1);

        return popped;
    }
}
