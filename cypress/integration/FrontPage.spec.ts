describe("The Front Page of Next Google", () => {
  // Desktop Resolution
  context("1080p resolution", () => {
    beforeEach(() => {
      /**
       * Run these tests as if in a desktop browser,
       * with a 1080p monitor
       */
      cy.viewport(1920, 1080);
    });

    it("Has the propper title", () => {
      cy.visit("/");
      cy.get("title").should("include", "The Front Page of Next Google");
    });

    it("Allows the user to search", () => {
      expect(true).to.equal(true);
    });
  });

  // Mobile Resolution
  context("iphone-5 resolution", () => {
    beforeEach(() => {
      /**
       * Run these tests as if in a mobile browser,
       * with an iphone-5 resolution
       */
      cy.viewport("iphone-5");
    });
    describe("When you visit home", () => {
      it.only("Should visit home page", () => {
        cy.visit("/");
      });
    });
  });
});
