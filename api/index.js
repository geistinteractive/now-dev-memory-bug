import store from "./store";

let n = 0;
module.exports = (req, res) => {
  n = n + 1;
  let y = store();
  return res.json({ n, y });
};
