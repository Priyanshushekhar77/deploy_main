const express = require("express")
const router = express.Router()

//importing auth controllers
const {
    login,
    signup,
    sendotp,
    changePassword,
  } = require("../controllers/Auth")

  //importing reset conmtrollers
  const {
    resetPasswordToken,
    resetPassword,
  } = require("../controllers/ResetPassword")

  //importing middlewares
  const { auth } = require("../middlewares/auth")

  //routing
  // Route for user login
router.post("/login", login)

// Route for user signup
router.post("/signup", signup)

// Route for sending OTP to the user's email
router.post("/sendotp", sendotp)

// Route for Changing the password
router.post("/changepassword", auth, changePassword)

// Route for generating a reset password token
router.post("/reset-password-token", resetPasswordToken)

// Route for resetting user's password after verification
router.post("/reset-password", resetPassword)

// Export the router for use in the main application
module.exports = router;