describe('Enter Wikipedia', function() {

  //Carrega o link do Wikipedia
  beforeEach(function() {
    cy.visit('https://www.wikipedia.org/')
  })
  //Entra na página inicial e valida o nome
  it('Carrega a página inicial com sucesso', function() {
    cy.get('div.central-textlogo').should('be.visible')
  })
  //Valida presença do logo
  it('Verifica a presença do logotipo', () => {
    cy.get('img.central-featured-logo').should('be.visible')
  })
  //Valida a presença dos links de idioma
  it('Verifica os links das línguas', () => {
    cy.get('div.central-featured-lang').should('have.length', 10)
  })
  //Faz a pesquisa e valida a resposta
  it('Digita sua pesquisa e valida resposta', function() {
    cy.get('#searchInput').type('Brasil')
    cy.get('button[type="submit"]').click()
    cy.get('h1#firstHeading.firstHeading.mw-first-heading')
      .should('have.text', 'Brasil')
    cy.get('.vector-sitenotice-container').should('be.visible')
    cy.get('#vector-toc-pinned-container').should('be.visible')
    cy.get('.mw-content-ltr > :nth-child(4)').should('be.visible')
  })
})