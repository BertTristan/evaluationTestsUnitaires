// Cette classe est uniquement là pour l'implémentation du dessus
// Pas de test à réaliser
export class User {
    public isAdmin: boolean;

    constructor(isAdmin: boolean = false) {
        this.isAdmin = isAdmin;
    }
}

export class Reservation {
    public madeBy: User;

    constructor(madeBy: User) {
        this.madeBy = madeBy;
    }

    public canBeCancelledBy(user: User): boolean {
        return user.isAdmin || this.madeBy === user;
    }
}
