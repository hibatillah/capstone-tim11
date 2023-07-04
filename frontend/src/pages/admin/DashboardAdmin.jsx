import React from "react";
import { formatRupiah } from "../../components/format";
import { cart, people, usd } from "../../assets/icons";

const ScoreCard = () => {
  return (
    <div className="flex gap-6">
      <div className="card flex-auto">
        <h3>Penjualan</h3>
        <div className="flex items-center gap-4 mt-3">
          <div className="w-14 h-14 rounded-full bg-blue-100 grid place-items-center">
            <img src={cart} alt="cart" className="w-6 h-6 bg-contain" />
          </div>
          <div className="space-y-1">
            <h1>145</h1>
            <p className="font-medium text-sm line-clamp-1">
              <span className="text-green-700 mr-1">12%</span>
              meningkat
            </p>
          </div>
        </div>
      </div>
      <div className="card flex-auto">
        <h3>Pendapatan</h3>
        <div className="flex items-center gap-4 mt-3">
          <div className="w-14 h-14 rounded-full bg-green-100 grid place-items-center">
            <img src={usd} alt="cart" className="w-6 h-6 bg-contain" />
          </div>
          <div className="space-y-1">
            <h1>Rp 3.450.000,-</h1>
            <p className="font-medium text-sm line-clamp-1">
              <span className="text-green-700 mr-1">8%</span>
              meningkat
            </p>
          </div>
        </div>
      </div>
      <div className="card flex-auto">
        <h3>Pelanggan</h3>
        <div className="flex items-center gap-4 mt-3">
          <div className="w-14 h-14 rounded-full bg-orange-100 grid place-items-center">
            <img src={people} alt="cart" className="w-6 h-6 bg-contain" />
          </div>
          <div className="space-y-1">
            <h1>1244</h1>
            <p className="font-medium text-sm line-clamp-1">
              <span className="text-red-700 mr-1">12%</span>
              menurun
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Status = ({ bg, title }) => {
  const label = {
    red: "bg-red-500",
    green: "bg-green-500",
    yellow: "bg-yellow-500",
  };
  const bgColor = label[bg];

  return (
    <div
      className={`px-2 py-1 text-sm w-fit rounded-lg text-white font-medium ${bgColor}`}
    >
      {title}
    </div>
  );
};

const DashboardAdmin = () => {
  const penjualan = [];

  return (
    <>
      <h1>Dashboard</h1>
      <div className="w-full grid grid-cols-3 gap-6 mt-5">
        <div className="col-span-2 space-y-6">
          <ScoreCard />
          <div className="card min-h-[300px]">
            <h3>Laporan</h3>
          </div>
          <div className="card min-h-[300px]">
            <h3>Penjualan Terkini</h3>
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Pelanggan</th>
                  <th>Produk</th>
                  <th>Price</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {penjualan?.map((item, i) => (
                  <tr key={i}>
                    <td>{item._id ?? "-"}</td>
                    <td>{item.pembeli ?? "-"}</td>
                    <td>{item.namaProduk ?? "-"}</td>
                    <td>{formatRupiah(item.harga) ?? 0}</td>
                    <td>
                      {item.status === "approved" ? (
                        <Status bg="green" title={item.status} />
                      ) : item.status === "pending" ? (
                        <Status bg="yellow" title={item.status} />
                      ) : item.status === "rejected" ? (
                        <Status bg="red" title={item.status} />
                      ) : (
                        "-"
                      )}
                    </td>
                  </tr>
                )) ?? <tr>Transaksi tidak tersedia</tr>}
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-span-1 space-y-6">
          <div className="card min-h-[300px]">
            <h3>Stock Product</h3>
            <div className=""></div>
          </div>
          <div className="card min-h-[300px]">
            <h3>Stock Product</h3>
            <div className=""></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardAdmin;
