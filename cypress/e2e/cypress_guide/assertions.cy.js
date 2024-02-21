describe('Assertions', () => {
    it('Should Assertions', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        // Should
        cy.url().should('include', 'orangehrmlive.com')
        .should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .should('contain', 'orangehrm')
    })

    it.only('Assertions test:2', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        // Assertions:

        cy.get('.oxd-text--h5').should('have.text', 'Login')
           
        
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
            .should('have.value', 'Admin')
        
        cy.xpath('//a').should('have.length', '5')
        
        cy.get('.orangehrm-login-branding > img').should('be.visible')
            .and('exist')
        
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('test1234')
            .should('have.value', 'test1234')
        
        
    })
})