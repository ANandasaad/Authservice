const express = require("express");
const UserController = require("../../controllers/user-controller.js");
const { AuthRequestValidation } = require("../../middlewares/index.js");
const router = express.Router();

router.post(
  "/signup",
  AuthRequestValidation.validateUserAuth,
  UserController.create
);
router.post(
  "/signIn",
  AuthRequestValidation.validateUserAuth,
  UserController.userSignIn
);
router.get("/isAuthenticated", UserController.isAuthenticated);
module.exports = router;
