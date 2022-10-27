const empModal = require("../node-backend/model/employee");

exports.get_all_users = (req, res, next) => {
  empModal
    .find({})
    .then(
      (data) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(data);
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
};
exports.insert_users = (req, res, next) => {
  empModal
    .create(req.body)
    .then(
      () => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json("Created");
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
};
exports.update_users = (req, res, next) => {
  empModal
    .findOneAndUpdate({ _id: req.params.id }, { $set: req.body })
    .then(
      () => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json("Updated");
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
};
exports.getUserById = (req, res, next) => {
  empModal
    .find({ _id: req.params.id })
    .then(
      (data) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(data);
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
};
exports.delete_User = (req, res, next) => {
  empModal
    .findOneAndDelete({ _id: req.params.id })
    .then(
      () => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json("Deleated");
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
};
