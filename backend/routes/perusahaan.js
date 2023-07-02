const express = require("express");
const recordRoutes = express.Router();
const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;

recordRoutes.use(express.urlencoded({ extended: true }));

// menampilkan data
recordRoutes.route("/perusahaan").get(function (req, res) {
  let db_connect = dbo.getDb("athea");
  db_connect
    .collection("perusahaan")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    })
    .then((data) => {
      console.log('perusahaan berhasil ditampilkan')
      res.json({
        message: "perusahaan berhasil ditampilkan",
        data: data,
      });
    });
});

// menampilkan data by id
recordRoutes.route("/perusahaan/:id").get(function (req, res) {
  let db_connect = dbo.getDb("athea");
  let myquery = { _id: new ObjectId(req.params.id) };
  db_connect
    .collection("perusahaan")
    .findOne(myquery, function (err, result) {
      if (err) throw err;
      res.json(result);
    })
    .then((data) => {
      console.log('perusahaan berhasil ditampilkan')
      res.json({
        message: "perusahaan berhasil ditampilkan",
        data: data,
      });
    });
});

// menambahkan data
recordRoutes.route("/perusahaan/add").post(function (req, res) {
  let db_connect = dbo.getDb("athea");
  let myObj = {
    nama: req.body.nama,
    alamat: req.body.alamat,
    telp: req.body.telp,
  };
  db_connect
    .collection("perusahaan")
    .insertOne(myObj, function (err, result) {
      if (err) throw err;
      res.json(result);
    })
    .then(() => {
      console.log('perusahaan berhasil ditambahkan')
      res.json({
        message: "perusahaan berhasil ditambahkan",
        data: myObj,
      });
    });
});

// mengupdate data
recordRoutes.route("/perusahaan/update/:id").put(function (req, res) {
  let db_connect = dbo.getDb("athea");
  let myquery = { _id: new ObjectId(req.params.id) };
  let newValues = {
    $set: {
      nama: req.body.nama,
      alamat: req.body.alamat,
      telp: req.body.telp,
    },
  };
  db_connect
    .collection("perusahaan")
    .updateOne(myquery, newValues, function (err, result) {
      if (err) throw err;
      console.log("berhasil update perusahaan");
      res.json(result);
    })
    .then(() => {
      console.log("berhasil update perusahaan");
      res.json({
        message: "Data berhasil diupdate",
        data: newValues,
      });
    });
});

// menghapus data
recordRoutes.route("/perusahaan/delete/:id").delete(function (req, res) {
  let db_connect = dbo.getDb("athea");
  let myquery = { _id: new ObjectId(req.params.id) };
  db_connect
    .collection("perusahaan")
    .deleteOne(myquery, function (err, result) {
      if (err) throw err;
      console.log("perusahaan berhasil dihapus");
      res.json(result);
    })
    .then((data) => {
      console.log("perusahaan berhasil dihapus");
      res.json({
        message: "perusahaan berhasil dihapus",
        data: data,
      });
    });
});

module.exports = recordRoutes;