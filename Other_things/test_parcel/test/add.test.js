const add = require("../add");

test("additionner 2 nombres", () => {
  expect(add(11, 18)).toBe(9);
});
