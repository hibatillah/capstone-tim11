import axios from "axios";
import * as React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { GetData } from "../../components/api";

const Products = () => {
  const { users } = GetData("http://localhost:5000/produk");
  console.log(users);
  return users;
};

const Bahan = () => {
  const { users } = GetData("http://localhost:5000/bahanbaku");
  console.log(users);
  return users;
};

const Editproduct = () => {
  let location = useLocation();
  const navigate = useNavigate();
  const getID = location.pathname.split("/")[2];
  const dataProducts = Products();
  const dataBahan = Bahan();
  const getProduct = dataProducts?.data?.find((item) => item._id === getID);

  const [nama, setNama] = React.useState(getProduct.nama);
  const [harga, setHarga] = React.useState(getProduct.harga);
  const [stok, setStok] = React.useState(getProduct.stok);
  const [rating, setRating] = React.useState(getProduct.rating);

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      nama: nama,
      stok: parseInt(stok),
      rating: parseInt(rating),
      harga: parseInt(harga),
      komposisi: getProduct.komposisi,
    };

    const range =
      parseInt(data.stok) - parseInt(getProduct.stok);

    axios
      .put(`http://localhost:5000/produk/update/${getProduct._id}`, data)
      .then((res) => {
        console.log(res);

        getProduct.komposisi?.map((el) => {
          dataBahan?.data?.map((item) => {
            if (item.nama.toLowerCase() === el[0].toLowerCase()) {
              axios
                .put(`http://localhost:5000/bahanbaku/update/${item._id}`, {
                  nama: item.nama,
                  tersedia:
                    parseInt(item.tersedia) - parseInt(el[1]) * parseInt(range),
                  minimum: item.minimum,
                  supplier: item.supplier,
                })
                .then((res) => {
                  console.log(res);
                })
                .catch((err) => {
                  console.error(err);
                });
            }
          });
        });
        event.target.reset();
        alert("Product updated");
        navigate("/product");
      })
      .catch((err) => {
        alert("Product fail to update");
        console.error(err);
      });
  };

  return (
    <div className="p-8">
      <div className="bg-white aspect-[4/2] rounded-lg">
        <p className="px-4 py-2">Input Pesanan</p>
        <div className="flex px-4 py-2 gap-4">
          <form className="w-full flex flex-col gap-2" onSubmit={handleSubmit}>
            <input
              type="text"
              className="px-4 py-2 border-2 w-full rounded-lg"
              placeholder="Nama Produk"
              id="nama"
              name="nama"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              required
            />
            <input
              type="text"
              className="px-4 py-2 border-2 w-full rounded-lg"
              placeholder="Harga"
              id="harga"
              name="harga"
              value={harga}
              onChange={(e) => setHarga(e.target.value)}
              required
            />
            <input
              type="text"
              className="px-4 py-2 border-2 w-full rounded-lg"
              placeholder="Stok"
              id="stok"
              name="stok"
              value={stok}
              onChange={(e) => setStok(e.target.value)}
              required
            />
            <input
              type="text"
              className="px-4 py-2 border-2 w-full rounded-lg"
              placeholder="Rating"
              id="rating"
              name="rating"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              required
            />
            <div className="flex justify-end px-4 py-4">
              <button
                className="px-6 py-2 bg-blue-500 text-white rounded-lg"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Editproduct;
