const express = require("express");
const recordRoutes = express.Router();
const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;

recordRoutes.use(express.urlencoded({ extended: true }));

// menampilkan data
recordRoutes.route("/bahanbaku").get(function (req, res) {
  let db_connect = dbo.getDb("athea");
  db_connect
    .collection("bahanbaku")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    })
    .then((data) => {
      console.log('bahanbaku berhasil ditampilkan')
      res.json({
        message: "bahanbaku berhasil ditampilkan",
        data: data,
      });
    });
});

// menampilkan data by id
recordRoutes.route("/bahanbaku/:id").get(function (req, res) {
  let db_connect = dbo.getDb("athea");
  let myquery = { _id: new ObjectId(req.params.id) };
  db_connect
    .collection("bahanbaku")
    .findOne(myquery, function (err, result) {
      if (err) throw err;
      res.json(result);
    })
    .then((data) => {
      console.log('bahanbaku berhasil ditampilkan')
      res.json({
        message: "bahanbaku berhasil ditampilkan",
        data: data,
      });
    });
});

// menambahkan data
recordRoutes.route("/bahanbaku/add").post(function (req, res) {
  let db_connect = dbo.getDb("athea");
  let myObj = {
    nama: req.body.nama,
    tersedia: req.body.tersedia,
    minimum: req.body.minimum,
    supplier: req.body.supplier,
  };
  db_connect
    .collection("bahanbaku")
    .insertOne(myObj, function (err, result) {
      if (err) throw err;
      res.json(result);
    })
    .then(() => {
      console.log('bahanbaku berhasil ditambahkan')
      res.json({
        message: "bahanbaku berhasil ditambahkan",
        data: myObj,
      });
    });
});

// mengupdate data
recordRoutes.route("/bahanbaku/update/:id").put(function (req, res) {
  let db_connect = dbo.getDb("athea");
  let myquery = { _id: new ObjectId(req.params.id) };
  let newValues = {
    $set: {
      nama: req.body.nama,
      tersedia: req.body.tersedia,
      minimum: req.body.minimum,
      supplier: req.body.supplier,
    },
  };
  db_connect
    .collection("bahanbaku")
    .updateOne(myquery, newValues, function (err, result) {
      if (err) throw err;
      console.log("berhasil update bahanbaku");
      res.json(result);
    })
    .then(() => {
      console.log("berhasil update bahanbaku");
      res.json({
        message: "Data berhasil diupdate",
        data: newValues,
      });
    });
});

// menghapus data
recordRoutes.route("/bahanbaku/delete/:id").delete(function (req, res) {
  let db_connect = dbo.getDb("athea");
  let myquery = { _id: new ObjectId(req.params.id) };
  db_connect
    .collection("bahanbaku")
    .deleteOne(myquery, function (err, result) {
      if (err) throw err;
      console.log("bahanbaku berhasil dihapus");
      res.json(result);
    })
    .then((data) => {
      console.log("bahanbaku berhasil dihapus");
      res.json({
        message: "bahanbaku berhasil dihapus",
        data: data,
      });
    });
});

module.exports = recordRoutes;