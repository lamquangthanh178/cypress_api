export function randomStringCharacter() {
    return Math.random().toString(36).substring(2, 10);
}

export function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

Cypress.Commands.add('randomStringCharacter', randomStringCharacter);
Cypress.Commands.add('randomInteger', randomInteger);
