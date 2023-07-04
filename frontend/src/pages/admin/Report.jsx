import React from "react";
import { formatRupiah } from "../../components/format";
import { brickCinnamon, darkWine } from "../../assets/img";

const Report = () => {
  const penjualan = [
    {
      nama: "brick cinnamon",
    },
    {
      nama: "dark wine",
    },
  ];

  return (
    <>
      <h1>Report</h1>
      <div className="mt-5">
        <h2>Product Viewed Report</h2>
        <div className="card mt-2">
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
              {penjualan?.map((item, i) => (
                <tr key={i}>
                  <td className="flex gap-5 items-center">
                    {item.nama === "brick cinnamon" ? (
                      <img
                        src={brickCinnamon}
                        alt="brick-cinnamon"
                        className="w-14 h-14 rounded bg-cover"
                      />
                    ) : (
                      <img
                        src={darkWine}
                        alt="dark-wine"
                        className="w-14 h-14 rounded bg-cover"
                      />
                    )}
                    <span>{item.nama}</span>
                  </td>
                  <td>{item._id ?? "-"}</td>
                  <td>{item.rating ?? "-"}</td>
                  <td>{formatRupiah(item.harga) ?? 0}</td>
                  <td>{item.viewed}</td>
                </tr>
              )) ?? <tr>Produk tidak tersedia</tr>}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Report;
