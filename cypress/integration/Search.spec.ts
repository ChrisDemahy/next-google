describe("Search Functionality", () => {
  // For desktop view
  context("720p resolution", () => {
    beforeEach(() => {
      /**
       * Run these tests as if in a desktop browser,
       * with a 720p monitor
       */
      cy.viewport(1280, 720);
    });
    describe("When you visit home", () => {
      it("Should visit home", () => {
        cy.visit("/");
      });
      it("Should allow the user to search", () => {
        cy.get("[data-cy=search-input]").type("A big dog");
        cy.get("[data-cy=nav-item]").contains("Search").click();
        cy.url().should("include", "/?q=A+big+dog");
      });
    });
  });
  context("iphone-5 resolution", () => {
    beforeEach(() => {
      /**
       * Run these tests as if in a desktop browser,
       * with a 720p monitor
       */
      cy.viewport("iphone-5");
    });
    describe("When you visit home", () => {
      it("Should visit home", () => {
        cy.visit("/");
      });
      it("Should allow the user to search", () => {
        cy.get("[data-cy=search-input]").type("A big dog");
        cy.get("[data-cy=nav-item]").contains("Search").click();
        cy.url().should("include", "/?q=A+big+dog");
      });
    });
  });
});
