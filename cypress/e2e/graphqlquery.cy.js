// cypress/integration/graphql_user_test.js

describe('GraphQL User API Test', function() {
  it('Retorna informação do USER', function() {
    // Defina a URL do endpoint GraphQL
    const graphqlEndpoint = 'https://graphqlzero.almansi.me/api';

    // Defina a query GraphQL
    const query = `
      query {
        user(id: 1) {
          id
          name
          email
        }
      }
    `
    // Faça a requisição GraphQL
    cy.request({
      method: 'POST',
      url: graphqlEndpoint,
      body: {
        query: query
      },
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer SEU_TOKEN_DE_AUTENTICACAO' // Se necessário
      }
    }).then((response) => {
      // Verifique se a resposta está correta
      expect(response.status).to.eq(200);
      expect(response.body.data).to.have.property('user');
      expect(response.body.data.user).to.include({
        id: '1',
        name: 'Leanne Graham',
        email: 'Sincere@april.biz'
      })
    })
  })
})