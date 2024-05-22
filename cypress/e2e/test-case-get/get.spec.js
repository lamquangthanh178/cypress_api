import { randomInteger, randomStringCharacter } from "../../support/utils-commands";

describe('Get test suite', () => {
    let userId = Cypress.env('userId');;
    let token
    let invalidUserID = Cypress.env('invalidUserId');
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


    it('Verify user that exist ', () => {
        cy.getUser(userId, token).then((response) => {
            expect(response.status).to.eql(200);
        });
    });

    it('Verify user that does not exist ', () => {
        cy.getUser(invalidUserID, token).then((response) => {
            expect(response.status).to.eql(404);
        });
    });

    it('Verify user response data structure ', () => {
        cy.getUser(userId, token).then((response) => {
            expect(response.status).to.eql(200);
            expect(response.body.data.id).to.eql(2);
            expect(response.body.data.email).to.eql('janet.weaver@reqres.in');
            expect(response.body.data.first_name).to.eql('Janet');
            expect(response.body.data.last_name).to.eql('Weaver');
            expect(response.body.data.avatar).to.eql('https://reqres.in/img/faces/2-image.jpg');
            expect(response.body.support.url).to.eql('https://reqres.in/#support-heading');
            expect(response.body.support.text).to.eql('To keep ReqRes free, contributions towards server costs are appreciated!');
        });
    });

});
