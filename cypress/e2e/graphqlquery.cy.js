// cypress/integration/graphql_user_test.js

describe('GraphQL User API Test', function() {
  it('Retorna informação do USER', function() {
    // Armazenando a URL do endpoint em uma constante
    const graphqlEndpoint = 'https://graphqlzero.almansi.me/api';

    // Define a query a ser chamada pela automação
    const queryJson = `
      query {
        user(id: 1) {
          id
          name
          email
        }
      }
    `
    //Requisição da API
    cy.request({
      method: 'POST',
      url: graphqlEndpoint,
      body: {
        query: queryJson
      },
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      // Valida se as respostas estão corretas
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