const { constants } = require("../constants");
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  switch (statusCode) {
    case constants.VALIDATION_ERROR:
      res.json({
        title: "Validation Error",
        message: err.message,
        stackTrce: err.stack,
      });
      break;
    case constants.UNAUTHORISED:
      res.json({
        title: "Unauthorised",
        message: err.message,
        stackTrce: err.stack,
      });
      break;
    case constants.FORBIDDEN:
      res.json({
        title: "Forbidden",
        message: err.message,
        stackTrce: err.stack,
      });
      break;
    case constants.NOT_FOUND:
      res.json({
        title: "Not Found",
        message: err.message,
        stackTrce: err.stack,
      });
      break;
    default:
      console.log("No Error in HTTP")
  }
};

module.exports = errorHandler