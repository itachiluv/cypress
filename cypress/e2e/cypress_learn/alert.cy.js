/// <reference types="cypress" />

describe('Handling Alerts', function () {

    beforeEach(function () {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    })

    
    it('Alert type', function () {
        cy.on('window:alert', function (alertText) {
            expect(alertText).eq('I am a JS Alert')
        })
        cy.contains('Click for JS Alert').click()
    })


    it('confirm type cancel', function () {
        cy.on('window:confirm', function (confirmText) {
            return false
        })
        cy.contains('Click for JS Confirm').click()
    })
    //  it('confirm type ok', function () {
        
    //     cy.on('window:confirm', function (confirmText) {
    //         return true
    //     })

    //     cy.contains('Click for JS Confirm').click()
    // })
    it.only('Prompt type', function () {
        cy.window().then(function ($var) {
            cy.stub($var, 'prompt').returns('Hello Test')
            cy.contains('Click for JS Prompt').click()
        })
    })
})