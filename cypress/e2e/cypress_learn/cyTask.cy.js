describe('Task Command',function(){
    it('cy Task',function(){
        cy.task('myLog','Console Terminal is Working Fine ').then((message)=>cy.log(message))
    })
// Send Simple Data---------
    it('send data', function () {
        cy.task('print', {
            name:'Mani',age:25,city:'Coimbatore'
        }).then((res)=>console.log(res))
    } )
})