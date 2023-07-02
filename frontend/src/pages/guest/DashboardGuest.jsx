import React from "react";
import { formatRupiah } from "../../components/format";

const DashboardGuest = () => {
  const [penjualan, setPenjualan] = React.useState();
  const totalPenjualan = 0;
  const totalPendapatan = 0;

  const gambarProduk = [];

  return (
    <>
      <h1>Dashboard</h1>
      <div className="mt-5 w-full h-full grid grid-cols-3 gap-6 place-items-stretch">
        {/* top selling */}
        <div className="col-span-2 col-start-1 card">
          <h3 className="text-blue-700">Top Selling</h3>
          <table>
            <thead>
              <tr>
                <th>Preview</th>
                <th>Product</th>
                <th>Price</th>
                <th>Sold</th>
                <th>Pendapatan</th>
              </tr>
            </thead>
            <tbody>
              {penjualan?.map((item, i) => (
                <tr key={i}>
                  <td>{gambarProduk[item.namaProduk] ?? "-"}</td>
                  <td>{item.namaProduk ?? "-"}</td>
                  <td>{formatRupiah(item.harga) ?? 0}</td>
                  <td>{totalPenjualan ?? 0}</td>
                  <td>{formatRupiah(totalPendapatan) ?? 0}</td>
                </tr>
              )) ?? <tr>Penjualan tidak tersedia</tr>}
            </tbody>
          </table>
        </div>
        {/* grafik */}
        <div className="col-span-1 row-span-2 col-start-3 card">
          <h3 className="text-blue-700">Top Selling</h3>
        </div>
        {/* stok produk */}
        <div className="col-span-2 col-start-1 card">
          <h3 className="text-blue-700">Stok Produk</h3>
          <table>
            <thead>
              <tr>
                <th>Preview</th>
                <th>Product</th>
                <th>Price</th>
                <th>Stock</th>
              </tr>
            </thead>
            <tbody>
              {penjualan?.map((item, i) => (
                <tr key={i}>
                  <td>{gambarProduk[item.nama] ?? "-"}</td>
                  <td>{item.nama ?? "-"}</td>
                  <td>{formatRupiah(item.harga) ?? 0}</td>
                  <td>{item.stok ?? 0}</td>
                </tr>
              )) ?? <tr>Produk tidak tersedia</tr>}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default DashboardGuest;
