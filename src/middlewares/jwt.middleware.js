import jwt from "jsonwebtoken";

const jwtAuth = (req, res, next) => {
  //Verify the token in Authorization header
  const token = req.headers["authorization"];
  if (!token) return res.status(401).send("Unauthorized access!");
  else {
    try {
      //Verify the token against the key and get the payload
      const payLoad = jwt.verify(token, "YAB6rlyRsgSf2BkYPy3Cve2BQgsn1P3t");
      //Add userId to the req data
      req.userId = payLoad.userId;
    } catch (error) {
      //Send invalid token response
      res.status(401).send("Inavlid Token");
    }

    //Call the next middleware in the pipeline
    next();
  }
};

export default jwtAuth;