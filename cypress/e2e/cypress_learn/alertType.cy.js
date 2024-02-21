describe('Alert Types', function () {

    // To check the alert text using Window:alert event
    it('Alert js', function () {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')  
        cy.get("button[onclick='jsAlert()']").click()

        cy.on('window:alert', function (alertText) {
            expect(alertText).eq('I am a JS Alert')
        })
        // Cypress have automatically closed the alert window
        cy.get('#result').should('have.text','You successfully clicked an alert')
    })

    // To check the confirmation alert using window:confirm  "OK"
    it('Confirmation Alert', function () {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsConfirm()']").click()

        cy.on('window:confirm', function(alerText){
            expect(alerText).eq('I am a JS Confirm')
        })

        cy.get('#result').should('have.text','You clicked: Ok')
    })
  
    // To check the confirmation alert using window:confirm  "Cancel"
    it('Confirmation Alert', function () {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsConfirm()']").click()

        cy.on('window:confirm', function (alertText) {
            expect(alertText).eq('I am a JS Confirm')
            return false
        })

         cy.get('#result').should('have.text','You clicked: Cancel')
    })

    // To check the prompt alert using stub type:
    it('Prompt alert', function () {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')     
        cy.log('Test for Prompt alert')
        cy.window().then(function (win) {
            cy.stub(win,'prompt').returns('Hello Test world ')
        })
        cy.get("button[onclick='jsPrompt()']").click()
        cy.get('#result').should('have.text','You entered: Hello Test world ')
    })

     // To check the Authentication Prombt
    it('Authentication Alert', function () {
        cy.visit('https://the-internet.herokuapp.com/basic_auth', {
            auth:
            {
                username: "admin",
                password: "admin"
            }
        })
        cy.get("div[class='example'] p").should('have.contain',"Congratulations")
        
    })
})