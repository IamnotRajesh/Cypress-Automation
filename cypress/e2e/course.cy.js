describe("template spec", () => {
  it("passes", () => {
    cy.visit("https://center2.uat.mykademy.com/login");
    cy.get("#floatingInput").type("sharad.khatiwada+center2@olivegroup.io");
    cy.get("#floatingPasswordEye").type("Hiup@123");
    cy.get(".w-100").click();
    cy.origin("https://center2.uat.mykademy.com", () => {
      Cypress.on('uncaught:exception', (err, runnable) => {
  if (
    err.message.includes('Appcues is not defined') ||
    err.message.includes("Unexpected token '<'") ||
    err.message.includes('backend:request failed')
  ) {
    return false;
  }
});
      cy.wait(2000);
      cy.get(".courses-widget").click();
      cy.wait(2000);
      cy.get("#course_create").click();
      cy.wait(2000);
      
      cy.get("#course_name").type("Data Mechanics02");
      // cy.get("#course_code").type("DM01");
      cy.get("#create_box_ok").click();
      cy.wait(2000);
     cy.get('#courses-tab li').each(($el) => {
     if ($el.text().trim() === 'Settings') {
     cy.wrap($el).click();
  }
});
    });
});
});


