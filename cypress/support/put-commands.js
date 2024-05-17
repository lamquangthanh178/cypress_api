let domainUrl = Cypress.env('url');


export const updateUser = (userInfoPayload, userId, token) => {
  cy.request({
    method: 'PUT',
    url: domainUrl + `/api/users/` + userId,
    headers: {
      'Content-Type': 'application/json',
      'Referer': 'https://reqres.in/',
      'token': token,
    },
    body: userInfoPayload,
    failOnStatusCode: false,
  });
};



Cypress.Commands.add('updateUser', updateUser);

