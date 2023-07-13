const express = require("express");
const recordRoutes = express.Router();
const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;

recordRoutes.use(express.urlencoded({ extended: true }));

// menampilkan data
recordRoutes.route("/penjualan").get(function (req, res) {
  let db_connect = dbo.getDb("athea");
  db_connect
    .collection("penjualan")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    })
    .then((data) => {
      console.log('penjualan berhasil ditampilkan')
      res.json({
        message: "penjualan berhasil ditampilkan",
        data: data,
      });
    });
});

// menampilkan data by id
recordRoutes.route("/penjualan/:id").get(function (req, res) {
  let db_connect = dbo.getDb("athea");
  let myquery = { _id: new ObjectId(req.params.id) };
  db_connect
    .collection("penjualan")
    .findOne(myquery, function (err, result) {
      if (err) throw err;
      res.json(result);
    })
    .then((data) => {
      console.log('penjualan berhasil ditampilkan')
      res.json({
        message: "penjualan berhasil ditampilkan",
        data: data,
      });
    });
});

// menambahkan data
recordRoutes.route("/penjualan/add").post(function (req, res) {
  let db_connect = dbo.getDb("athea");
  let myObj = {
    produk: req.body.produk,
    jumlah: req.body.jumlah,
    total: req.body.total,
    datetime: req.body.datetime,
    pembayaran: req.body.pembayaran,
    pembeli: req.body.pembeli,
    pengiriman: req.body.pengiriman,
    status: req.body.status,
    ecommerce: req.body.ecommerce,
  };
  db_connect
    .collection("penjualan")
    .insertOne(myObj, function (err, result) {
      if (err) throw err;
      res.json(result);
    })
    .then(() => {
      console.log('penjualan berhasil ditambahkan')
      res.json({
        message: "penjualan berhasil ditambahkan",
        data: myObj,
      });
    });
});

// mengupdate data
recordRoutes.route("/penjualan/update/:id").put(function (req, res) {
  let db_connect = dbo.getDb("athea");
  let myquery = { _id: new ObjectId(req.params.id) };
  let newValues = {
    $set: {
      produk: req.body.produk,
      jumlah: req.body.jumlah,
      total: req.body.total,
      datetime: req.body.datetime,
      pembayaran: req.body.pembayaran,
      pembeli: req.body.pembeli,
      pengiriman: req.body.pengiriman,
      status: req.body.status,
      ecommerce: req.body.ecommerce,
    },
  };
  db_connect
    .collection("penjualan")
    .updateOne(myquery, newValues, function (err, result) {
      if (err) throw err;
      console.log("berhasil update penjualan");
      res.json(result);
    })
    .then(() => {
      console.log("berhasil update penjualan");
      res.json({
        message: "Data berhasil diupdate",
        data: newValues,
      });
    });
});

// menghapus data
recordRoutes.route("/penjualan/delete/:id").delete(function (req, res) {
  let db_connect = dbo.getDb("athea");
  let myquery = { _id: new ObjectId(req.params.id) };
  db_connect
    .collection("penjualan")
    .deleteOne(myquery, function (err, result) {
      if (err) throw err;
      console.log("penjualan berhasil dihapus");
      res.json(result);
    })
    .then((data) => {
      console.log("penjualan berhasil dihapus");
      res.json({
        message: "penjualan berhasil dihapus",
        data: data,
      });
    });
});

module.exports = recordRoutes;