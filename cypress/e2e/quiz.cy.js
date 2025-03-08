describe("Quiz component", () => {
    beforeEach(() => {
        cy.visit("/")
    })
    it("Should start quiz and display a question", () => {
        cy.get("button").contains("Start Quiz").click()
        cy.get(".card").should("be.visible")
        cy.get("h2").should("be.visible")
    })
})