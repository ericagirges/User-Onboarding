describe("User Onboarding App", () => {

    //declaring variables to be used for extensive testing
    const lnameInput = () => cy.get("input[name='lname']")
    const locationSelect = () => cy.get("select")
    const submitButton = () => cy.get("button")

    


    it("can navigate to http://localhost:3000/App.js?name=&email=&password=", () => {
        cy.visit("http://localhost:3000/App.js?name=&email=&password=")
        cy.url().should("includes", "localhost")
    })

    //first test submit is disabled with empty input
    it("button is disabled before inputs", () => {
        submitButton().should('be.disabled')
    })
    

    //test typing in first name into input then use assertion to verify name typed matches
    it("can type something in the 'text' input", () => {
        cy.get("input[name='fname']")
        .type("Cardi")
        .should("have.value", "Cardi")
        lnameInput().type("Belcalis").should("have.value", "Belcalis")
    })

    it("can select location", () => {
        locationSelect().select(["New York"]).should("have.value", "New York")  
    })



    //test typing in email into specified input 
    it("can type email in the 'text' input", () => {
        cy.get("input[name='email']")
        .type("cardib@email.com")
        .should("have.value", "cardib@email.com")
    })

    //test typing in password in specified input
    it("can type password in the 'text' input", () => {
        cy.get("input[name='password']")
        .type("kulture30")
        .should("have.value", "kulture30")
    })

    //test terms checkbox
    it("terms of service checkbox functional", () => {
        cy.get("[type='checkbox']")
        .check()
    })


    //test submit functionality
    it("can submit registration form", () => {
        submitButton().should('be.enabled')
        submitButton().click()
          })
    })

      
      