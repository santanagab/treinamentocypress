/// <reference types ='cypress' />

describe('Teste de Preenchimento de Formulário', () => {
    it('Preenchimento de Formulário ', () => {
        cy.visit('https://automacaocombatista.herokuapp.com/buscaelementos/inputsetextfield')
        cy.get('#first_name').type('João').should('have.value', 'João')
        cy.get('#last_name').type('Silva').should('have.value', 'Silva')
    });

    it('Novo Usuário', () => {
        cy.visit('https://automacaocombatista.herokuapp.com/users/new')
        cy.get('#user_name').type('João')
        cy.get('#user_lastname').type('Silva')
        cy.get('#user_email').type('joaosil@email.com')
        cy.get('#user_address').type('Rua Treze, 1313')
        cy.get('#user_university').type('UNIESP')
        cy.get('#user_profile').type('Estudante')
        cy.get('#user_gender').type('Masculino')
        cy.get('#user_age').type('30')
        cy.get('[type="submit"]').click()
        cy.get('#notice').should('have.text', 'Usuário Criado com sucesso')
    });

    it('Preenchimento com Erro', () => {
        cy.visit('https://automacaocombatista.herokuapp.com/users/new')
        cy.get('#user_name').type('João')
        cy.get('#user_lastname').type('Silva')
        cy.get('#user_address').type('rua Treze, 1313')
        cy.get('#user_university').type('UNIESP')
        cy.get('#user_profile').type('Estudante')
        cy.get('#user_gender').type('Masculino')
        cy.get('#user_age').type('30')
        cy.get('[type="submit"]').click()
        cy.get('#error_explanation > h2').should('have.text', '2 errors proibiu que este usuário fosse salvo:')
        cy.get('#error_explanation > ul > li:nth-child(1)').should('have.text', 'Email translation missing: pt-BR.activerecord.errors.models.user.attributes.email.blank')
        cy.get('#error_explanation > ul > li:nth-child(2)').should('have.text', 'Email translation missing: pt-BR.activerecord.errors.models.user.attributes.email.invalid')




    });
})