describe("Home Page", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("should scroll to bottom", () => {
    cy.scrollTo("bottom");
  });
  it("should have a Sobre Nós section", () => {
    cy.contains("Sobre Nós").should("be.visible");
  });
  it("should have a button and click on it", () => {
    cy.contains("Faça seu evento corporativo")
      .should("be.visible")
      .click({ force: true });
  });
  it("should have a event button on nav", () => {
    cy.get("nav").contains("Seu evento").should("be.visible").click();
    cy.url().should("contain", "/evento");
  });
  it("should be possible to click on whatsapp button", () => {
    cy.get("button")
      .contains("Nos contate pelo")
      .should("exist")
      .click({ force: true });
  });
});
