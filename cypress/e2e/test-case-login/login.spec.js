import { randomInteger, randomStringCharacter } from "../../support/utils-commands";

describe('Login test suite', () => {
    let token
    let valiUserLogin = Cypress.env('validUserLogin')
    let valiUserPasswordLogin = Cypress.env('validUserPasswordLogin')


    it('User login to the system', () => {
        const userLoginInfoPayload = {
            email: valiUserLogin,
            password: valiUserPasswordLogin
        };
        cy.login(userLoginInfoPayload).then((response) => {
            expect(response.status).to.eql(200);
            token = response.body.token
        });
    });


    it('User login to the system with blank password', () => {
        const userLoginInfoPayload = {
            email: 'eve.holt@reqres.in',
            password: ''
        };
        cy.login(userLoginInfoPayload).then((response) => {
            expect(response.status).to.eql(400);
            expect(response.body.error).to.eql('Missing password');
        });
    });


    it('User login to the system with email that does not exist', () => {
        const userLoginInfoPayload = {
            email: 'email@reqres.in',
            password: 'abc123'
        };
        cy.login(userLoginInfoPayload).then((response) => {
            expect(response.status).to.eql(400);
            expect(response.body.error).to.eql('user not found');
        });
    });

    it('User login to the system with missing body', () => {
        const userLoginInfoPayload = {
        };
        cy.login(userLoginInfoPayload).then((response) => {
            expect(response.status).to.eql(400);
            expect(response.body.error).to.eql('Missing email or username');
        });
    });





});

  