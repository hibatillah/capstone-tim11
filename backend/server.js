const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

// get driver conection
const dbo = require("./db/conn");

app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
  });
  console.log(`Server is running on port: ${port}`);
});

// get routes
const perusahaan = require("./routes/perusahaan");
const produk = require("./routes/produk");
const pembeli = require("./routes/pembeli");
const penjualan = require("./routes/penjualan");
const user = require("./routes/user");

// use routes
app.use([perusahaan, produk, pembeli, penjualan, user]);