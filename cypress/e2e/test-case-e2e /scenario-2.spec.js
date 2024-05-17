import { randomInteger, randomStringCharacter } from "../../support/utils-commands";

describe('Scenario 2 test suite', () => {
    let token
    let id = ''
    let userId
    let email
    let first_name
    let last_name


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

});
