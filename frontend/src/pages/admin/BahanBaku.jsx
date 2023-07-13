import React from "react";
import { GetData } from "../../components/api";
import { Link } from "react-router-dom";

const BahanBaku = () => {
  const Bahan = () => {
    const { users } = GetData("http://localhost:5000/bahanbaku");
    console.log(users);
    return users;
  };
  const databahanbaku = Bahan();
  console.log({ databahanbaku });
  return (
    <div>
      <h1>Bahan Baku</h1>
      <div className="mt-5 card min-h-[300px]">
        <div className="flex gap-5 justify-end ">
          <Link
            className="bg-red-400 text-white rounded-lg px-4 py-2"
            to={"/pesanbahanbaku"}
          >
            Pesan Bahan Baku
          </Link>
        </div>
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
        <div className="mt-5 ml-10">
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th>#</th>
                <th>Nama</th>
                <th>Stock Tersedia</th>
                <th>Minimum</th>
                <th>Supplier</th>
              </tr>
            </thead>
            <tbody>
              {databahanbaku?.data?.map((item, i) => (
                <tr>
                  <td>{i}</td>
                  <td>{item.nama ?? "-"}</td>
                  <td>{item.tersedia ?? "-"}</td>
                  <td>{item.minimum ?? 0}</td>
                  <td>{item.supplier ?? 0}</td>
                </tr>
              )) ?? <tr>Produk Tidak tersedia</tr>}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BahanBaku;
