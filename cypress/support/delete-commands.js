let domainUrl = Cypress.env('url');


export const deleteUser = (userId, token) => {
  cy.request({
    method: 'DELETE',
    url: domainUrl + `/api/users/` + userId,
    headers: {
      'Content-Type': 'application/json',
      'Referer': 'https://reqres.in/',
      'token': token,
    },
    failOnStatusCode: false,
  });
};



Cypress.Commands.add('deleteUser', deleteUser);

