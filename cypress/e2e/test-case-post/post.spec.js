import { randomInteger, randomStringCharacter } from "../../support/utils-commands";

describe('Post test suite', () => {
    let token

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

    it('Create user with valid data', () => {
        const nameUser =  'Thanh '+ randomStringCharacter(4)
        const userJob = randomStringCharacter(5)

        const userInfoPayload = {
            name: nameUser,
            job: userJob
        };
        cy.createUser(userInfoPayload, token).then((response) => {
            expect(response.status).to.eql(201);
            expect(response.body.name).to.eql(nameUser);
            expect(response.body.job).to.eql(userJob);
            expect(response.body.createdAt).not.to.be.empty;
            
        });
    });

    it('Create user with missing field name', () => {
        const userJob = randomStringCharacter(5)

        const userInfoPayload = {
            job: userJob
        };

        cy.createUser(userInfoPayload, token).then((response) => {
            expect(response.status).to.eql(201);
            expect(response.body.job).to.eql(userJob);
            expect(response.body.createdAt).not.to.be.empty;
        });
    });

    it('Create user with missing field job', () => {
        const nameUser =  'Thanh '+ randomStringCharacter(4)

        const userInfoPayload = {
            name: nameUser
        };

        cy.createUser(userInfoPayload, token).then((response) => {
            expect(response.status).to.eql(201);
            expect(response.body.name).to.eql(nameUser);
            expect(response.body.createdAt).not.to.be.empty;
        });
    });




});

  