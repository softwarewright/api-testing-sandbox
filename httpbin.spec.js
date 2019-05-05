// ./httpbin.spec.js
const supertest = require("supertest");

describe("httpbin API tests", () => {
  it("should return 200 from the /get endpoint", async () => {
    await supertest("http://localhost:8001")
      .get("/get")
      .expect(200) // validate the status code
      .expect("Content-Type", "application/json") // validate a header
      .expect(response => {
        const { body } = response;

        expect(body.url).toBe("http://localhost:8001/get"); // validate the body contains a url property
      });
  });
});
