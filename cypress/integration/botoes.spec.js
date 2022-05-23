/// <reference types ='cypress' />

describe('Teste de botões', () => {
    it('Validar botão ao clicar', () => {
        cy.visit('https://automacaocombatista.herokuapp.com/buscaelementos/botoes')
        cy.get('[id="teste"]').click()
        cy.get('#div1 > h5').should('have.text', 'Você Clicou no Botão!')
    });
    it('Validar botão "Submit"', () => {
        cy.visit('https://automacaocombatista.herokuapp.com/buscaelementos/botoes')
        cy.get('[type="submit"]').click()
        cy.get('#div4 > h5').should('have.text', 'Você Clicou no Botão!')
    })

});