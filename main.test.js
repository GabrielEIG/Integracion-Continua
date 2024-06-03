const holaMundo = require("./main.js");

test('returns "Hola ,mundo"', () => {
    expect(holaMundo()).toBe("Hola mundo");
});