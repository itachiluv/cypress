describe('CSS Selectors', () => {
    it('Using All CSS Selectors', () => {
        cy.visit('https://automationexercise.com/')
        cy.get("a[href='/products']").click()                         //attribute
        cy.get('.title.text-center').contains('All Products')         //class
        cy.get('#search_product').type('Tshirt')                       //ID
        cy.get('#submit_search').click()
    })
})