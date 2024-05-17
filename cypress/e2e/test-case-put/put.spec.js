import { randomInteger, randomStringCharacter } from "../../support/utils-commands";

describe('Post test suite', () => {
    let token
    let userId = Cypress.env('userId');;
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

    it('Update user with valid data', () => {
        const nameUser = 'Thanh ' + randomStringCharacter(4)
        const userJob = randomStringCharacter(5)

        const userInfoPayload = {
            name: nameUser,
            job: userJob
        };
        cy.updateUser(userInfoPayload, userId, token).then((response) => {
            expect(response.status).to.eql(200);
            expect(response.body.name).to.eql(nameUser);
            expect(response.body.job).to.eql(userJob);
            expect(response.body.updatedAt).not.to.be.empty;

        });
    });


    it('Update user with a partial data - with NAME', () => {
        const nameUser = 'Thanh ' + randomStringCharacter(4)

        const userInfoPayload = {
            name: nameUser
        };
        cy.updateUser(userInfoPayload, userId, token).then((response) => {
            expect(response.status).to.eql(200);
            expect(response.body.name).to.eql(nameUser);
            expect(response.body.updatedAt).not.to.be.empty;
        });
    });


    it('Update user with a partial data - with JOB', () => {
        const userJob = randomStringCharacter(5)

        const userInfoPayload = {
            job: userJob
        };
        cy.updateUser(userInfoPayload, userId, token).then((response) => {
            expect(response.status).to.eql(200);
            expect(response.body.job).to.eql(userJob);
            expect(response.body.updatedAt).not.to.be.empty;
        });
    });





});

