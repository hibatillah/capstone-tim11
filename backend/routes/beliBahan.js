const express = require("express");
const recordRoutes = express.Router();
const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;

recordRoutes.use(express.urlencoded({ extended: true }));

// menampilkan data
recordRoutes.route("/belibahan").get(function (req, res) {
  let db_connect = dbo.getDb("athea");
  db_connect
    .collection("beliBahan")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    })
    .then((data) => {
      console.log('beli bahan berhasil ditampilkan')
      res.json({
        message: "beli bahan berhasil ditampilkan",
        data: data,
      });
    });
});

// menampilkan data by id
recordRoutes.route("/belibahan/:id").get(function (req, res) {
  let db_connect = dbo.getDb("athea");
  let myquery = { _id: new ObjectId(req.params.id) };
  db_connect
    .collection("beliBahan")
    .findOne(myquery, function (err, result) {
      if (err) throw err;
      res.json(result);
    })
    .then((data) => {
      console.log('beli bahan berhasil ditampilkan')
      res.json({
        message: "beli bahan berhasil ditampilkan",
        data: data,
      });
    });
});

// menambahkan data
recordRoutes.route("/belibahan/add").post(function (req, res) {
  let db_connect = dbo.getDb("athea");
  let myObj = {
    datetime: req.body.datetime,
    bahan: req.body.bahan,
    supplier: req.body.supplier,
    jumlah: req.body.jumlah,
    status: req.body.status,
  };
  db_connect
    .collection("beliBahan")
    .insertOne(myObj, function (err, result) {
      if (err) throw err;
      res.json(result);
    })
    .then(() => {
      console.log('beli bahan berhasil ditambahkan')
      res.json({
        message: "beli bahan berhasil ditambahkan",
        data: myObj,
      });
    });
});

// mengupdate data
recordRoutes.route("/belibahan/update/:id").put(function (req, res) {
  let db_connect = dbo.getDb("athea");
  let myquery = { _id: new ObjectId(req.params.id) };
  let newValues = {
    $set: {
      datetime: req.body.datetime,
      bahan: req.body.bahan,
      supplier: req.body.supplier,
      jumlah: req.body.jumlah,
      status: req.body.status,
    },
  };
  db_connect
    .collection("beliBahan")
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
recordRoutes.route("/belibahan/delete/:id").delete(function (req, res) {
  let db_connect = dbo.getDb("athea");
  let myquery = { _id: new ObjectId(req.params.id) };
  db_connect
    .collection("beliBahan")
    .deleteOne(myquery, function (err, result) {
      if (err) throw err;
      console.log("beli bahan berhasil dihapus");
      res.json(result);
    })
    .then((data) => {
      console.log("beli bahan berhasil dihapus");
      res.json({
        message: "beli bahan berhasil dihapus",
        data: data,
      });
    });
});

module.exports = recordRoutes;