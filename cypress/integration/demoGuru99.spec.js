// serve para ajudar achar os caminhos de métodos

/// <reference types="cypress" /> 

describe('Formulário de registro', () => {

    it('Deve preencher o formulário e registrar com sucesso', () => {
  
      cy.visit('https://demo.guru99.com/test/newtours/register.php')
      cy.get('input[name="firstName"]').as('nome').type('Marcos')
      cy.get('input[name="lastName"]').as('sobrenome').type('Ferreira da Mota')
      cy.get('input[name="phone"]').as('telefone').type('11 96789-6425')
      cy.get('input[name="userName"]').as('email').type('Marcos@exampleDeal.com')
      cy.get('input[name="address1"]').as('endereço').type('Al. Rio Negro, 503 - conjuntos 2201 e 2202 - Alphaville, Barueri')
      cy.get('input[name="city"]').as('cidade').type('Barueri')
      cy.get('input[name="state"]').as('estado').type('São Paulo')
      cy.get('input[name="postalCode"]').as('cep').type('06454-000')
      cy.get('select[name="country"]').as('país').select('ZIMBABWE')
      cy.get('input[name="email"]').as('usuário').type('MarcosMota1')
      cy.get('input[name="password"]').as('senha').type('123Deal@')
      cy.get('input[name="confirmPassword"]').as('confirmarSenha').type('123Deal@')
      cy.screenshot('ANTES-de-enviar')
      cy.get('input[name="submit"]').click()
      cy.screenshot('DEPOIS-de-enviar')
      cy.get('@nome').should('not.be.empty')
      cy.get('@sobrenome').should('not.be.empty')
      cy.get('@telefone').should('not.be.empty')
      cy.get('@email').should('not.be.empty')
      cy.get('@endereço').should('not.be.empty')
      cy.get('@cidade').should('not.be.empty')
      cy.get('@estado').should('not.be.empty')
      cy.get('@cep').should('not.be.empty')
      cy.get('@país').should('not.be.empty')
      cy.get('@usuário').should('not.be.empty')
      cy.get('@senha').should('not.be.empty')
      cy.get('@confirmarSenha').should('not.be.empty')
      cy.contains('Thank you for registering.').should('be.visible')

   })
  
  })