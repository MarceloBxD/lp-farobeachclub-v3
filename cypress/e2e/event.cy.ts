describe("Event Page", () => {
  beforeEach(() => {
    cy.visit("/evento");
  });
  it("should have a title", () => {
    cy.get("h1").should("be.visible");
  });
  it("should have a button and click on it", () => {
    cy.contains("agende seu evento")
      .should("be.visible")
      .click({ force: true });
  });
  it("should have buttons on swiper", () => {
    cy.get("button").should("exist");
  });
});
