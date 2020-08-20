describe("User Onboarding App", () => {
    it("can navigate to http://localhost:3000/App.js?name=&email=&password=", () => {
        cy.visit("http://localhost:3000/App.js?name=&email=&password=")
        cy.url().should("includes", "localhost")
    })

    //test typing in first name into input
    it("can type something in the 'text' input", () => {
        cy.get("input[name='fname']")
        .type("Cardi")
        .should("have.value", "Cardi")
    })


    // const textInput = () => crypto.getRandomValues("input[fname='text']")
})