const notFound = (req, res, next) => {
    res.status(404).send("Route does not exist, ensure you are checking the correct docs!!!");
}

module.exports = {
  notFound  
}