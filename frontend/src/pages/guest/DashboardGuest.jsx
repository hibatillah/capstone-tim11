import React from "react";
import { formatRupiah } from "../../components/format";
import { brickCinnamon, darkWine } from "../../assets/img/index";
import Product from "../../components/Dataproduct";
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
                <th>Product</th>
                <th>Price</th>
                <th>Sold</th>
                <th>Pendapatan</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Brick Cinnamon</td>
                <td>Rp 62.300,00</td>
                <td>500</td>
                <td>Rp 31.150.000</td>
              </tr>
              <tr>
                <td>Dark Wine</td>
                <td>Rp 62.300,00</td>
                <td>400</td>
                <td>Rp 24.920.000</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* grafik */}
        <div className="col-span-1 row-span-2 col-start-3 card">
          <h3 className="text-blue-700">Top Selling</h3>
        </div>
        {/* stok produk */}
        <div className="col-span-2 col-start-1 card">
          <Product />
        </div>
      </div>
    </>
  );
};

export default DashboardGuest;
