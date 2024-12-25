import loginpage from "../Pages/login";
describe('Testing Demo Website ' , () => {


    beforeEach(() => {
        cy.visit('https://demowebshop.tricentis.com/');

        });

    // it('Verifying Website URL' , () =>{


    //     //cy.visit("https://demowebshop.tricentis.com/");
    //     cy.get('#small-searchterms').type('bags');
    //     cy.get('form > .button-1').click();
    //     //cy.get('.lnXdpd').should('be.visible');
    //     //cy.get('#APjFqb').type('what is cypress').click();

    // })

    // it('Verify User Can Search for a Product' , () => {
       
    //     //cy.visit("https://demowebshop.tricentis.com/");
    //     cy.get('#small-searchterms').type('bags');
    //     cy.get('form > .button-1').click();


    // }) 

    // it.only('Verify User Can Register', () => {
    //     cy.get('.ico-register').click();
    //     cy.get('#gender-male').click();
    //     cy.get('#FirstName').type('Ali');
    //     cy.get('#LastName').type('Farooq');
    //     cy.get('#Email').type('alifarooqgmail.com');
    //     cy.get('#Password').type('ali');
    //     cy.get('#ConfirmPassword').type('ali');
    //     cy.wait(3000);
    //     cy.get('#register-button').click();
    // }) 

    it('Verify User Login Functionality' , () => {

        loginpage.visit();



        // cy.get('.ico-login').click();
        // cy.get('#Email').type('alifarooq@gmail.com');
        // cy.get('#Password').type('ali54321');
        // cy.wait(2000);
        // cy.get('form > .buttons > .button-1').click();
    })
    
    

    


})




   

