const errorHandlerMiddleware = (err, req, res, next) => {
   res.status(500).json({ success: false, msg: err.message });
};


const notFound = (req, res, next) => {
  res
    .status(404)
    .send("Route does not exist, ensure you are checking the correct docs!!!");
};
module.exports = {
  errorHandlerMiddleware,
  notFound
};
