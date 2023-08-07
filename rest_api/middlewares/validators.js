const { check, validationResult } = require("express-validator");

// Validation rules for user input
exports.userValidator = [
  check("name").trim().notEmpty().withMessage("name is missing"),
  check("email")
    .trim()
    .notEmpty()
    .normalizeEmail()
    .isEmail()
    .withMessage("email is missing"),
  check("phone")
    .trim()
    .notEmpty()
    .withMessage("phone is missing")
    .isLength({ min: 8, max: 8 })
    .withMessage("phone must be 8 characters long"),
];

// Middleware to validate and handle validation errors
exports.validate = (req, res, next) => {
  // Get validation errors
  const errors = validationResult(req).array();

  // If there are validation errors, send an error response
  if (errors.length) {
    return res.status(400).json({ errors: errors.map((error) => error.msg) });
  }

  // If there are no validation errors, continue to the next middleware
  next();
};
