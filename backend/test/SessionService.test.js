import App from "../src/app";
import request from "supertest";

import router from '../src/routes/api.routes'

const api = request(new App([router], 3000).app);

describe("Testing POST/Session endpoint", () => {
  it("Should pass with 200 ", (done) => {
    api
      .post("/api/session")
      .set("Accept", "application/json")
      .send({ username: "Lehel", password: "asdfasdf" })
      .expect("Content-Type", /json/)
      .expect(200, done);
  });

  it("Should fail with 401 ", (done) => {
    api
      .post("/api/session")
      .set("Accept", "application/json")
      .send({ username: "", password: "" })
      .expect("Content-Type", /json/)
      .expect(401, done);
  });
});
