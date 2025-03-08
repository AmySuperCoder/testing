import Quiz from '../../client/src/components/Quiz'

describe ("Quiz component", ()=> {
    it ("It should display Start button before quiz starts", () => {
        cy.mount(<Quiz/>)
        cy.get("button").contains("Start Quiz")
    })
    it ("It starts quiz when Start Quiz button is clicked and display question", () => {
        cy.mount(<Quiz/>)
        cy.get("button").contains("Start Quiz").click()
        cy.get(".card").should("be.visible")
        cy.get("h2").should("be.visible")
    }
    )

})