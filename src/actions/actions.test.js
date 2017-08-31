import {newGame, NEW_GAME, makeGuess, MAKE_GUESS, toggleInfoModal, TOGGLE_INFO_MODAL} from './actions';

describe('NEW_GAME', () => {
    it('Should return the action', () => {
        const action = newGame();
        expect(action.type).toEqual(NEW_GAME);
    });
});

describe('makeGuess', () => {
    it('Should return the action', () => {
        const guess = Math.round(Math.random() * 100)
        const action = makeGuess(guess);
        expect(action.type).toEqual(MAKE_GUESS);
    });
});


describe('toggleInfoModal', () => {
    it('Should return the action', () => {
        const action = toggleInfoModal();
        expect(action.type).toEqual(TOGGLE_INFO_MODAL);
    });
});
