import { randomInteger, randomStringCharacter } from "../../support/utils-commands";

describe('Scenario 1 test suite', () => {
    let token
    let id = ''
    let userId
    let email
    let first_name
    let last_name
    let valiUserPasswordLogin = Cypress.env('validUserPasswordLogin')


    it('Verify user that exist ', () => {
        cy.getUser(id).then((response) => {
            expect(response.status).to.eql(200);
            userId = response.body.data[5].id
            email = response.body.data[5].email
            first_name = response.body.data[5].first_name
            last_name = response.body.data[5].last_name
            cy.log(userId, email, first_name, last_name)
        });
    });


    it('User login to the system', () => {
        const userLoginInfoPayload = {
            email: email,
            password: valiUserPasswordLogin
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

});

