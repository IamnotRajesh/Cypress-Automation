describe("template spec", () => {
  it("passes", () => {
    cy.visit("https://center2.uat.mykademy.com/login");
    cy.get("#floatingInput").type("sharad.khatiwada+center2@olivegroup.io");
    cy.get("#floatingPasswordEye").type("Hiup@123");
    cy.get(".w-100").click();
    cy.origin("https://center2.uat.mykademy.com", () => {
      Cypress.on('uncaught:exception', (err, runnable) => {
        if (err.message.includes('Appcues is not defined')) {
          return false;
        }
      });

      Cypress.on('uncaught:exception', (err, runnable) => {
        if (err.message.includes("Unexpected token '<'")) {
          return false;
        }
      });
      cy.wait(2000);
      cy.get(".learner-widget").click();

      cy.get("#add_new_users").click();
      cy.wait(2000);
      cy.get("#student_name").type("virgil Sparda");
      cy.get("#student_email").type("vergil@gmail.com");
      cy.get("#student_password").type("Hiup@123"); // now succeeds!
      cy.wait(2000);
      cy.get("#student_institute").select('1');
      cy.wait(3000);
      cy.get("#create_box_ok").click();
      cy.wait(2000);
      cy.get('#advanced_confirm_box_ok').click()
      cy.wait(2000);
      cy.get(".body > div.navigation > div > div > a").click();
    
    });
  });
});
