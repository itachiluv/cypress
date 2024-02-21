// / <reference types="cypress-xpath"/>
describe('Xpath', () => {
    it('Xpath Locators', () => {
        cy.visit('https://automationexercise.com/')
        cy.xpath("//div[@class='recommended_items']//div").should('have.length', 28)
        cy.xpath('//p[text()="Blue Top"]').should('exist')
    })
})