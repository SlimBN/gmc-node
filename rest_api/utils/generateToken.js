const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  // Sign the token with the user ID and secret key
  const token = jwt.sign({ id }, process.env.JWT, {
    expiresIn: "1d", // Token will expire in 1 day
  });

  return token; // Return the generated token
};

module.exports = generateToken; // Export the function for use in other modules
