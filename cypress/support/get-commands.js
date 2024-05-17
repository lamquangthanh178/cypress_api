let domainUrl = Cypress.env('url');


export const getUser = (userId, token) => {
    cy.request({
        method: 'GET',
        url: domainUrl + `/api/users/` + userId,
        headers: {
            'Content-Type': 'application/json',
            'Referer': 'https://reqres.in/',
            'token': token,
        },
        failOnStatusCode: false,
    });
};


Cypress.Commands.add('getUser', getUser);
