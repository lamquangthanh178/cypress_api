let domainUrl = Cypress.env('url');


export const createUser = (userInfoPayload, token) => {
  cy.request({
    method: 'POST',
    url: domainUrl + `/api/users`,
    headers: {
      'Content-Type': 'application/json',
      'Referer': 'https://reqres.in/',
      'token': token,
    },
    body: userInfoPayload,
    failOnStatusCode: false,
  });
};

export const login = (userLoginInfoPayload) => {
  cy.request({
    method: 'POST',
    url: domainUrl + `/api/login`,
    headers: {
      'Content-Type': 'application/json',
      'Referer': 'https://reqres.in/',
    },
    body: userLoginInfoPayload,
    failOnStatusCode: false,
  });
};


Cypress.Commands.add('createUser', createUser);
Cypress.Commands.add('login', login);

