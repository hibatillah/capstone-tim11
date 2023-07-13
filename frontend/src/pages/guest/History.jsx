import React from 'react'
import { formatRupiah } from '../../components/format';
import { GetData } from '../../components/api';

const History = () => {
  const Penjualan = () => {
    const { users } = GetData("http://localhost:5000/penjualan");
    console.log(users);
    return users;
  };
  const dataPenjualan = Penjualan();
  console.log({ dataPenjualan });
  const data = dataPenjualan?.data?.filter((item) => item.status === "selesai");

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
              </tr>
            </thead>
            <tbody>
              {data?.map((item, i) => (
                <tr>
                  <td>{i}</td>
                  <td>{item.datetime ?? "-"}</td>
                  <td>{item.produk ?? "-"}</td>
                  <td>{item.jumlah ?? 0}</td>
                  <td>{formatRupiah(item.total) ?? 0}</td>
                  <td>{item.pembayaran ?? "-  "}</td>
                  <td>{item.pembeli ?? "-"}</td>
                  <td>{item.status ?? "-"}</td>
                </tr>
              )) ?? <tr>Produk Tidak tersedia</tr>}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default History