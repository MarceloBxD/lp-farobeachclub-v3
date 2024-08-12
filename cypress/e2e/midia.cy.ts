describe("Midia Page", () => {
  beforeEach(() => {
    cy.visit("/midia");
  });
  it("should have a badge called corporativo e eventos", () => {
    cy.get("#badge").should("be.visible");
  });
  it("should have a card and hover it", () => {
    cy.get("#card").should("be.visible").trigger("mouseover").dblclick();
  });
  it("should click on programação button on navbar", () => {
    cy.get("#navbar").contains("Programação").should("be.visible").click();
    cy.url().should("contain", "/#programacao");
  });
});
