import React from "react";

const BahanBaku = () => {
  const data = [];
  return (
    <div>
      <h1>Bahan Baku</h1>
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
        <div className="mt-5 ml-10">
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th>#</th>
                <th>Nama</th>
                <th>Stock Tersedia</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((item) => (
                <tr>
                  <td>{item.name ?? "-"}</td>
                  <td>{item.price ?? "-"}</td>
                  <td>{item.amount ?? 0}</td>
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
