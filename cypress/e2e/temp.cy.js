import moment from "moment";

describe("First tests", () => {
  it("using Moment.js", () => {
    cy.log(moment().format("D.M.YYYY HH:mm:ss"));
  });
});
