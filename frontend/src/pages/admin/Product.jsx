import React from "react";
import { brickCinnamon, darkWine } from "../../assets/img";
import { formatRupiah } from "../../components/format";
import { Link } from "react-router-dom";
import { GetData } from "../../components/api";

const Produk = () => {
  const { users } = GetData("http://localhost:5000/produk");
  console.log(users);
  return users;
};

const Product = () => {
  const dataProduk = Produk();
  const gambarProduk = [brickCinnamon, darkWine];

  return (
    <>
      <h1>Products</h1>
      <div className="mt-5 card">
        <div className="flex justify-end">
          <Link to="/product/add" className="btn btn-primary">
            Add Product
          </Link>
        </div>
        <table className="mt-5">
          <thead>
            <tr>
              <th>Product</th>
              <th>SKU</th>
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
                    src={gambarProduk[i]}
                    alt={item.nama}
                    className="w-14 h-14 rounded bg-cover"
                  />
                  <span>{item.nama ?? "-"}</span>
                </td>
                <td>{item.sku ?? "-"}</td>
                <td>{item.rating ?? 0}/5</td>
                <td>{formatRupiah(item.harga)}</td>
                <td>{dataProduk?.data[0]?.stok ?? 0}</td>
              </tr>
            )) ?? <tr>Data tidak tersedia</tr>}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Product;
