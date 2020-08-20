describe("User Onboarding App", () => {
    it("can navigate to http://localhost:3000/App.js?name=&email=&password=", () => {
        cy.visit("http://localhost:3000/App.js?name=&email=&password=")
        cy.url().should("includes", "localhost")
    })

    //test typing in first name into input then use assertion to verify name typed matches
    it("can type something in the 'text' input", () => {
        cy.get("input[name='fname']")
        .type("Cardi")
        .should("have.value", "Cardi")
    })

    //test typing in email into specified input 
    it("can type email in the 'text' input", () => {
        cy.get("input[name='email']")
        .type("cardib@email.com")
        .should("have.value", "cardib@email.com")
    })

    //


    // const textInput = () => crypto.getRandomValues("input[fname='text']")
})