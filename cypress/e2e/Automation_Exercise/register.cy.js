describe('Register User', () => {

    beforeEach(function () {
        cy.visit('https://automationexercise.com/')
    })
    it('Verify that home page is visible successfully', () => {
        cy.get("header[id='header'] li:nth-child(1) a:nth-child(1)").should('have.text',' Home')
    })

    it.only("Click on 'Signup / Login' button", () => {
        cy.get("a[href='/login']").click()
        //Verify 'New User Signup!' is visible
        cy.log("Verify 'New User Signup!' is visible")
        cy.get("div[class='signup-form'] h2").should('have.text', 'New User Signup!')
        
        // Enter Name and Email Address
        cy.get("input[placeholder='Name']").type('Test')
        cy.get('[data-qa="signup-email"]').type('admins1234test1234@gmail.com')

        // Click 'Signup' button

        cy.get("button[data-qa='signup-button']").click()

        // Verfiy the Heading

        cy.get('body > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > h2:nth-child(1) > b:nth-child(1)')
            .should('have.text', 'Enter Account Information')
        
        // check radio button
        cy.get("#id_gender1").check()

        // type Password
        cy.get("#password").type('test12345')

        // Select dropdown option
        cy.get("#days").select('25')
        cy.get('#months').select('6')
        cy.get("#years").select('1999')

        // Select checkbox
        // Select checkbox 'Sign up for our newsletter!'
        // Select checkbox 'Receive special offers from our partners!'
        cy.get('#newsletter').check()
        cy.get('#optin').check()

        // Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
        cy.get('#first_name').type('Mani Sankar')
        cy.get('#last_name').type('M')
        cy.get('#company').type('Veradis Technologies')
        cy.get("#address1").type('Kapragam College,Eechanari')
        cy.get("#address2").type('Coimbatore')
        cy.get("#country").select('India')
        cy.get('#state').type('Tamil Nadu')
        cy.get('#city').type('Coimbatore')
        cy.get('#zipcode').type('641021')
        cy.get('#mobile_number').type('1234567890')
        cy.get("button[data-qa='create-account']").click()
    })
    
})