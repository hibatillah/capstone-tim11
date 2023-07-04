import React from "react";
import { formatRupiah } from "../../components/format";
import { brickCinnamon, darkWine } from "../../assets/img";

const Report = () => {
  const penjualan = []

  return (
    <>
      <h1>Report</h1>
      <div className="mt-5 space-y-6">
        <h2>Product Viewed Report</h2>
        <div className="card">
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
        <div className="card">
          <h3>Sales Report</h3>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>No Orders</th>
                <th>Product Sold</th>
                <th>Price</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {penjualan.map((item, i) => (
                <tr key={i}>
                  <td>{item.datetime ?? '-'}</td>
                  <td>{item.order ?? '-'}</td>
                  <td>{item.sold ?? 0}</td>
                  <td>{formatRupiah(item.price) ?? 0}</td>
                  <td>{formatRupiah(item.total) ?? 0}</td>
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
