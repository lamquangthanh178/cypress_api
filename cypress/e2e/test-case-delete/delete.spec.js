import { randomInteger, randomStringCharacter } from "../../support/utils-commands";

describe('Get test suite', () => {
    let userId = Cypress.env('userId');;
    let token
    let invalidUserID = Cypress.env('invalidUserId');

    it('User login to the system', () => {
        const userLoginInfoPayload = {
            email: 'eve.holt@reqres.in',
            password: 'cityslicka'
        };
        cy.login(userLoginInfoPayload).then((response) => {
            expect(response.status).to.eql(200);
            token = response.body.token
        });
    });

    it('Delete user that exist', () => {
        cy.deleteUser(userId, token).then((response) => {
            expect(response.status).to.eql(204);
        });
    });

    it('Delete user that does not exist', () => {
        cy.deleteUser(invalidUserID, token).then((response) => {
            expect(response.status).to.eql(204);
        });
    });

    it('Verify the response time', () => {
        cy.deleteUser(userId, token).then((response) => {
            expect(response.duration).to.not.be.greaterThan(1000)   
        });
    });




});
