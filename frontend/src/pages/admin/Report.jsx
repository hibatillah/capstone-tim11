import React from "react";
import { formatRupiah } from "../../components/format";
import { brickCinnamon, darkWine } from "../../assets/img";
import { GetData } from "../../components/api";

const Penjualan = () => {
  const { users } = GetData("http://localhost:5000/penjualan");
  console.log(users);
  return users;
};

const Report = () => {
  const dataPenjualan = Penjualan()

  return (
    <>
      <h1>Report</h1>
      <div className="mt-5 space-y-6">
        <div className="card">
        <h3>Product Viewed Report</h3>
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>SKU</th>
                <th>Rating</th>
                <th>Price</th>
                <th>Viewed</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="flex gap-5 items-center">
                  <img
                    src={brickCinnamon}
                    alt="brick-cinnamon"
                    className="w-14 h-14 rounded bg-cover"
                  />
                  <span>Brick Cinnamon</span>
                </td>
                <td>01231441</td>
                <td>4/5</td>
                <td>{formatRupiah(65000)}</td>
                <td>124</td>
              </tr>
              <tr>
                <td className="flex gap-5 items-center">
                  <img
                    src={darkWine}
                    alt="brick-cinnamon"
                    className="w-14 h-14 rounded bg-cover"
                  />
                  <span>Dark Wine</span>
                </td>
                <td>01231441</td>
                <td>4/5</td>
                <td>{formatRupiah(65000)}</td>
                <td>98</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="card h-[400px]">
          <h3>Sales Report</h3>
          <table>
            <thead>
              <tr>
                <th>Tanggal Waktu</th>
                <th>Produk</th>
                <th>Jumlah</th>
                <th>Total</th>
                <th>Pembeli</th>
              </tr>
            </thead>
            <tbody>
              {dataPenjualan?.data?.map((item, i) => (
                <tr key={i}>
                  <td>{item.tanggal ?? '-'}</td>
                  <td>{item.produk ?? '-'}</td>
                  <td>{item.jumlah ?? 0}</td>
                  <td>{formatRupiah(item.total) ?? 0}</td>
                  <td>{item.pembeli ?? 0}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Report;
