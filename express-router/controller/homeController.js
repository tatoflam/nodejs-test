exports.sendReqParam = (req, res) => {
  let veg = req.params.vegetables;
  res.send(`This is the page for ${veg}`);
}