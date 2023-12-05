import UserModel from "./user.model.js";
import jwt from "jsonwebtoken";

export default class UserController {
  signUp(req, res) {
    const { name, email, password } = req.body;
    const result = UserModel.signUp(name, email, password);

    if (!result.success) return res.status(404).send(result.msg);
    else return res.status(201).send(result.msg);
  }

  signIn(req, res) {
    const { email, password } = req.body;
    const result = UserModel.signIn(email, password);

    if (!result.success) return res.status(404).send(result.msg);
    else {
      const token = jwt.sign(
        { userId: result.msg.id, email: result.msg.email },
        "YAB6rlyRsgSf2BkYPy3Cve2BQgsn1P3t",
        { expiresIn: "1h" }
      );

      res.status(200).send(token);
    }
  }
}
