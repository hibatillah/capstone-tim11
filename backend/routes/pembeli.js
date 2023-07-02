const express = require("express");
const recordRoutes = express.Router();
const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;

recordRoutes.use(express.urlencoded({ extended: true }));

// menampilkan data
recordRoutes.route("/pembeli").get(function (req, res) {
  let db_connect = dbo.getDb("athea");
  db_connect
    .collection("pembeli")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    })
    .then((data) => {
      console.log('pembeli berhasil ditampilkan')
      res.json({
        message: "pembeli berhasil ditampilkan",
        data: data,
      });
    });
});

// menampilkan data by id
recordRoutes.route("/pembeli/:id").get(function (req, res) {
  let db_connect = dbo.getDb("athea");
  let myquery = { _id: new ObjectId(req.params.id) };
  db_connect
    .collection("pembeli")
    .findOne(myquery, function (err, result) {
      if (err) throw err;
      res.json(result);
    })
    .then((data) => {
      console.log('pembeli berhasil ditampilkan')
      res.json({
        message: "pembeli berhasil ditampilkan",
        data: data,
      });
    });
});

// menambahkan data
recordRoutes.route("/pembeli/add").post(function (req, res) {
  let db_connect = dbo.getDb("athea");
  let myObj = {
    nama: req.body.nama,
    alamat: req.body.alamat,
    email: req.body.email,
  };
  db_connect
    .collection("pembeli")
    .insertOne(myObj, function (err, result) {
      if (err) throw err;
      res.json(result);
    })
    .then(() => {
      console.log('pembeli berhasil ditambahkan')
      res.json({
        message: "pembeli berhasil ditambahkan",
        data: myObj,
      });
    });
});

// mengupdate data
recordRoutes.route("/pembeli/update/:id").put(function (req, res) {
  let db_connect = dbo.getDb("athea");
  let myquery = { _id: new ObjectId(req.params.id) };
  let newValues = {
    $set: {
      nama: req.body.nama,
      alamat: req.body.alamat,
      email: req.body.email,
    },
  };
  db_connect
    .collection("pembeli")
    .updateOne(myquery, newValues, function (err, result) {
      if (err) throw err;
      console.log("berhasil update pembeli");
      res.json(result);
    })
    .then(() => {
      console.log("berhasil update pembeli");
      res.json({
        message: "Data berhasil diupdate",
        data: newValues,
      });
    });
});

// menghapus data
recordRoutes.route("/pembeli/delete/:id").delete(function (req, res) {
  let db_connect = dbo.getDb("athea");
  let myquery = { _id: new ObjectId(req.params.id) };
  db_connect
    .collection("pembeli")
    .deleteOne(myquery, function (err, result) {
      if (err) throw err;
      console.log("pembeli berhasil dihapus");
      res.json(result);
    })
    .then((data) => {
      console.log("pembeli berhasil dihapus");
      res.json({
        message: "pembeli berhasil dihapus",
        data: data,
      });
    });
});

module.exports = recordRoutes;