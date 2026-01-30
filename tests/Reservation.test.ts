import { describe, test, expect, beforeEach } from 'vitest';
import { User, Reservation } from '../src/Reservation';

describe('Reservation', () => {
    let user: User;
    let admin: User;
    let reservation: Reservation;

    beforeEach(() => {
        user = new User(false);
        admin = new User(true);
        reservation = new Reservation(user);
    });

    describe('canBeCancelledBy', () => {
        test("Retourne true si annulé par un admin", () => {
            const result = reservation.canBeCancelledBy(admin);
            expect(result).toBe(true);
        });

        test("Retourne true si annulé par l'utilisateur créateur", () => {
            const result = reservation.canBeCancelledBy(user);
            expect(result).toBe(true);
        });

        test("Retourne false si annulé par un autre utilisateur", () => {
            const otherUser = new User(false);
            const result = reservation.canBeCancelledBy(otherUser);
            expect(result).toBe(false);
        });
    });
});
