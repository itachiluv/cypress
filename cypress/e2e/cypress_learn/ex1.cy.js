/// <reference types="cypress" />
import 'cypress-iframe'

describe('Handling iFrames', function () {
    it('Validate the user should able to write the text in iframe textbox', function () {
        cy.visit('https://the-internet.herokuapp.com/tinymce')
        cy.get('#mce_0_ifr').type('Test is working (*_*)')
    })
})