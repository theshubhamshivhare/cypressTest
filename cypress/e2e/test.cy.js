describe("User Invite Journey", () => {
  it("Validate user invite API", () => {
  cy.visit('https://main.core.us.dev.amdocsplatformx.com/').then(()=>{
    cy.contains('Login').click({ force: true })
  })
  })
