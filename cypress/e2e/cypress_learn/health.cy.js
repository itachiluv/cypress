describe('Health Login Function', () => {
    beforeEach(function () {
       cy.visit('https://10.10.30.82/securityadmin/loginpage.action?redirectflag=')    
        cy.get('.hl_loginbox_inner > #j_username').type('veradisadminuser')
        cy.get('.hl_loginbox_inner > #j_password').type('Health0!')
        cy.get('.hl_button_orange').click()  
    })

    it('Site Adminstration Page', () => {
        cy.get('.hl_SA_link > a').should('have.text', 'Site Administration')
        cy.get(':nth-child(1) > :nth-child(1) > h4').should('have.text','Customers')
    })

    it('All Manager', () => {
        cy.get('#customerhomeForm').contains('All Customers').click()
    })
    
})