import React from "react";
import { GetData } from "../../components/api";
import { currentDatetime } from "../../components/format";
import axios from "axios";

const BeliBahan = () => {
  const { users } = GetData("http://localhost:5000/belibahan");
  console.log(users);
  return users;
};

const Bahan = () => {
  const { users } = GetData("http://localhost:5000/bahanbaku");
  console.log(users);
  return users;
};

const PesananSupplier = () => {
  const dataPesanan = BeliBahan();
  const dataBahan = Bahan();

  const konfirmasi = (id) => {
    // konfirmasi pesanan
    const selected = dataPesanan.data.find((item) => item._id === id);
    const updatePesanan = {
      datetime: currentDatetime(),
      bahan: selected.bahan,
      supplier: selected.supplier,
      jumlah: selected.jumlah,
      status: "selesai",
    };
    axios
      .put(`http://localhost:5000/belibahan/update/${id}`, updatePesanan)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log("Error: ", err);
      });

    // tambah bahan baku
    const bahan = dataBahan.data.find((item) => item.nama === updatePesanan.bahan);
    const updateBahan = {
      nama: bahan.nama,
      minimum: bahan.minimum,
      supplier: bahan.supplier,
      tersedia: parseInt(bahan.tersedia) + parseInt(updatePesanan.jumlah)
    };
    axios
      .put(`http://localhost:5000/bahanbaku/update/${bahan._id}`, updateBahan)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log("Error: ", err);
      });

    alert("Pesanan berhasil dikonfirmasi");
  };

  return (
    <div>
      <h1>Pesanan</h1>
      <div className="card min-h-[300px] mb-5 mt-5">
        <h2>Pesanan Berlangsung</h2>
        <table>
          <thead>
            <tr>
              <th>Tanggal Waktu</th>
              <th>Bahan Baku</th>
              <th>Jumlah</th>
              <th>Status</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {dataPesanan?.data?.map((item, i) => (
              <tr key={i}>
                <td>{item.datetime ?? "-"}</td>
                <td>{item.bahan ?? "-"}</td>
                <td>{item.jumlah ?? "-"}</td>
                <td>{item.status ?? "-"}</td>
                <td>
                  <div
                    onClick={() => konfirmasi(item._id)}
                    className="bg-blue-400 rounded text-white font-medium"
                  >
                    Konfirmasi
                  </div>
                </td>
              </tr>
            )) ?? <tr>Data tidak tersedia</tr>}
          </tbody>
        </table>
      </div>
      <div className="card min-h-[300px]">
        <h2>Pesanan Selesai</h2>
        <table>
          <thead>
            <tr>
              <th>Tanggal Waktu</th>
              <th>Bahan Baku</th>
              <th>Jumlah</th>
              <th>Supplier</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {dataPesanan?.data?.map((item, i) => (
              <tr key={i}>
                <td>{item.datetime ?? "-"}</td>
                <td>{item.bahan ?? "-"}</td>
                <td>{item.jumlah ?? "-"}</td>
                <td>{item.supplier ?? "-"}</td>
                <td>{item.status ?? "-"}</td>
              </tr>
            )) ?? <tr>Data tidak tersedia</tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PesananSupplier;
