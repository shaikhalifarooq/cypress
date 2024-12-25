import select from "../fixtures/locators.json";

class loginpage {

    static visit() {
        cy.get(select.loginpg["login-link"]).click();
    }
}

export default loginpage;