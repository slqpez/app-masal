class UserController {
  constructor() {}
  sayHello(req, res) {
    return res.send({ message: "Hello" });
  }
}

module.exports = UserController;
