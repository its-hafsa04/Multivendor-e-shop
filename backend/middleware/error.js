const ErrorHandler = require("../utils/ErrorHandler");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500,
    err.message = err.message || "Internal server error.";

  //wrong mongo id
  if (err.name === "CastError") {
    const message = `resources not found with this id...  Invalid ${err.path}`;
    err = new ErrorHandler(message, 400);
  }

  //duplicate key error
  if (err.code === 11000) {
    const message = `Duplicate key ${Object.keys(err.keyValue)} entered`;
    err = new ErrorHandler(message, 400);
  }

  //wrong jwt error
  if (err.name === "JsonWebTokenError") {
    const message = "Your url is invalid Please try again latter";
    err = new ErrorHandler(message, 400);
  }

  //jwt expire
  if (err.name === "TokenExpiredError") {
    const message = "Your url is expired Please try again latter";
    err = new ErrorHandler(message, 400);
  }

  res.status(err.statusCode).json({
    success: false,
    statusCode: err.statusCode,
  });
};
