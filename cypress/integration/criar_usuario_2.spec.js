/// <reference types='cypress' />

describe('Formulário de Usuário', () => {
    beforeEach(() => {
        cy.visit('https://automacaocombatista.herokuapp.com/users/new')
    })
    it('Criar usuário com dados válidos', () => {
        cy.get('.tamanhodiv2 > h5').should('have.text', 'Novo Usuário!!')
        cy.get('#user_name').should('be.visible').type('João')
        cy.get('#user_lastname').should('be.visible').type('Silva')
        cy.get('#user_email').should('be.visible').type('joaosil@email.com')
        cy.get('#user_address').should('be.visible').type('Rua Treze, 1313')
        cy.get('#user_university').should('be.visible').type('UNIESP')
        cy.get('#user_profile').should('be.visible').type('Estudante')
        cy.get('#user_gender').should('be.visible').type('Masculino')
        cy.get('#user_age').should('be.visible').type('30')
        cy.get('[type="submit"]').should('be.visible').click()
        cy.get('#notice').should('have.text', 'Usuário Criado com sucesso')
        cy.contains('p', 'Nome').should('contain', 'João')
    });
    it('Criar usuário com dados vazios', () => {
        cy.get('.tamanhodiv2 > h5').should('have.text', 'Novo Usuário!!')
        cy.get('[type="submit"]').should('be.visible').click()
        cy.get('[type="submit"]').should('be.visible').click()
        cy.get('#error_explanation > h2').should('contain', 'errors proibiu que este usuário fosse salvo')
    });
})