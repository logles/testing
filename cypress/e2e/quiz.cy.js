describe("Tech Quiz App", () => {
  beforeEach(() => {
    cy.fixture("questions").then((mockQuestions) => {
      cy.intercept("GET", "/api/questions/random", {
        statusCode: 200,
        body: mockQuestions,
      }).as("getQuestions");
    });

    cy.visit("/");
  });

  it("starts the quiz and shows the first mocked question", () => {
    cy.contains("Start Quiz").click();
    cy.wait("@getQuestions");

    cy.contains("What is 2 + 2?").should("be.visible");
  });

  it("completes the quiz and shows final score", () => {
    cy.contains("Start Quiz").click();
    cy.wait("@getQuestions");

    cy.get("button").contains(/^2$/).click();
    cy.get("button").contains(/^2$/).click();
    cy.contains("Quiz Completed").should("be.visible");
    cy.contains("Your score:").should("exist");
  });
});
