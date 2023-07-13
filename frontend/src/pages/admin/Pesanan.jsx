import React from "react";
import { GetData } from "../../components/api";
import { formatRupiah, currentDatetime } from "../../components/format";
import axios from "axios";

const Pesanan = () => {
  const Penjualan = () => {
    const { users } = GetData("http://localhost:5000/penjualan");
    console.log(users);
    return users;
  };
  const Produk = () => {
    const { users } = GetData("http://localhost:5000/produk");
    console.log(users);
    return users;
  };
  const dataPenjualan = Penjualan();
  const dataProduk = Produk();

  const handleSubmit = (id) => {
    const selectedPenjualan = dataPenjualan?.data?.find(
      (item) => item._id === id
    );

    const data = {
      produk: selectedPenjualan.produk,
      jumlah: selectedPenjualan.jumlah,
      total: selectedPenjualan.total,
      datetime: currentDatetime(),
      pembayaran: selectedPenjualan.pembayaran,
      pembeli: selectedPenjualan.pembeli,
      status: "selesai",
    };

    axios
      .put(`http://localhost:5000/penjualan/update/${selectedPenjualan._id}`, data)
      .then((res) => {
        console.log(res.data);

        data?.produk?.map(el => {
          console.log({ el })
          dataProduk?.data?.map(item => {
            console.log({ item })
            if (el[0].toLowerCase() === item.nama.toLowerCase()) {
              axios
              .put(`http://localhost:5000/produk/update/${item._id}`, {
                nama: item.nama,
                stok: item.stok - el[1],
                rating: item.rating,
                harga: item.harga,
                komposisi: item.komposisi,
              })
              .then((res) => {
                console.log(res);
              })
              .catch((err) => {
                console.log("Error: ", err);
              })
            }
          })
        })
        alert("Pesanan dikonfirmasi");
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  };

  return (
    <div>
      <h1>Pesanan Guest</h1>
      <div className="mt-5 card min-h-[300px]">
        <div className="flex bg-slate-100 w-72 items-center py-2 rounded-lg">
          <div className="stroke-slate-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke=""
              class="w-6 h-6 ml-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
          <input
            type="search"
            placeholder="Cari"
            className=" ml-3 bg-transparent"
          />
        </div>
        <div className="mt-5">
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th>#</th>
                <th>Tanggal Waktu</th>
                <th>Produk</th>
                <th>Jumlah</th>
                <th>Total</th>
                <th>Pembayaran</th>
                <th>Pembeli</th>
                <th>Status</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {dataPenjualan?.data?.map((item, i) => (
                <tr>
                  <td>{i}</td>
                  <td>{item.datetime ?? "-"}</td>
                  <td>{item.produk ?? "-"}</td>
                  <td>{item.jumlah ?? 0}</td>
                  <td>{formatRupiah(item.total) ?? 0}</td>
                  <td>{item.pembayaran ?? "-  "}</td>
                  <td>{item.pembeli ?? "-"}</td>
                  <td>{item.status ?? "-"}</td>
                  <td>
                    <div onClick={() => handleSubmit(item._id)} className="text-black cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
                        />
                      </svg>
                    </div>
                  </td>
                </tr>
              )) ?? <tr>Produk Tidak tersedia</tr>}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Pesanan;
