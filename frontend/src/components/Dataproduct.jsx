import React from "react";
import { brickCinnamon, darkWine } from "../assets/img/index";
import { formatRupiah } from "../components/format";
import { Link } from "react-router-dom";
import { GetData } from "../components/api";

const Produk = () => {
  const { users } = GetData("http://localhost:5000/produk");
  console.log(users);
  return users;
};

const Product = () => {
  const dataProduk = Produk();
  const gambarProduk = {
    "Brick Cinnamon": brickCinnamon, 
    "Dark Wine": darkWine
  };

  return (
    <>
      <h1>Products</h1>
      <div className="mt-5">
        <table className="mt-5">
          <thead>
            <tr>
              <th>Product</th>
              <th>Rating</th>
              <th>Price</th>
              <th>Stock</th>
            </tr>
          </thead>
          <tbody>
            {dataProduk?.data?.map((item, i) => (
              <tr>
                <td className="flex gap-5 items-center">
                  <img
                    src={gambarProduk[item.nama]}
                    alt={item.nama}
                    className="w-14 h-14 rounded bg-cover"
                  />
                  <span>{item.nama ?? "-"}</span>
                </td>
                <td>{item.rating ?? 0}/5</td>
                <td>{formatRupiah(item.harga)}</td>
                <td>{item.stok ?? 0}</td>
              </tr>
            )) ?? <tr>Data tidak tersedia</tr>}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Product;
