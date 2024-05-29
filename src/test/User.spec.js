import { assert } from "chai";
import User from "../models/User.js";

describe("testes da classe user", () => {
  it("deve retornar false para nome menor que 3 caracteres", () => {
    const user = new User("Ma", "maria@email.com", "123456", "06/04/1986");

    assert.isFalse(user.isNameValid());
  });

  it("deve retornar 37 para data de nascimento 06/12/1986", () => {
    const user = new User("Ma", "maria@email.com", "123456", "06/12/1986");
    let expect = 37;
    const age = user.getAge();

    assert.equal(age, expect);
  });
});
