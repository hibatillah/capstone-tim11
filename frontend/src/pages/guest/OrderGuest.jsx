import * as React from "react";
import { brickCinnamon, darkWine } from "../../assets/img";
import { Basket } from "../../components/icon";
import { formatRupiah, currentDatetime } from "../../components/format";
import { GetData } from "../../components/api";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Penjualan = () => {
  const { users } = GetData("http://localhost:5000/penjualan");
  console.log(users);
  return users;
};

const OrderGuest = ({ user }) => {
  const navigate = useNavigate()
  const [cinnamon, setCinnamon] = React.useState(0);
  const [wine, setWine] = React.useState(0);
  const totalBelanja = cinnamon * 62300 + wine * 62300;

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      produk: [
        ["Brick Cinnamon", cinnamon, cinnamon * 62300],
        ["Dark Wine", wine, wine * 62300],
      ],
      jumlah: cinnamon + wine,
      total: totalBelanja,
      datetime: currentDatetime(),
      pembayaran: e.target.pembayaran.value,
      pembeli: user.nama,
      status: "diproses",
    };

    axios
      .post('http://localhost:5000/penjualan/add', data)
      .then((res) => {
        console.log('tambah',res);
        setCinnamon(0);
        setWine(0);
        alert("Pesanan berhasil dibuat");
        navigate('/history')
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  };

  return (
    <div>
      <h1>Order Product</h1>
      <div className="flex mt-8 gap-5">
        <div className="card flex-none w-96 h-fit">
          <h2>Athea Beauty Brick Cinnamon</h2>
          <p>{formatRupiah(62300)}</p>
          <div className="mt-3 w-full h-64 rounded-lg overflow-hidden">
            <img
              src={brickCinnamon}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <button
            onClick={() => setCinnamon((prev) => prev + 1)}
            className="btn btn-primary w-full mt-5 flex justify-center items-center gap-2"
          >
            <Basket />
            Keranjang
          </button>
        </div>
        <div className="card flex-none w-96 h-fit">
          <h2>Athea Beauty Dark Wine</h2>
          <p>{formatRupiah(62300)}</p>
          <div className="mt-3 w-full h-64 rounded-lg overflow-hidden">
            <img src={darkWine} alt="" className="w-full h-full object-cover" />
          </div>
          <button
            onClick={() => setWine((prev) => prev + 1)}
            className="btn btn-primary w-full mt-5 flex justify-center items-center gap-2"
          >
            <Basket />
            Keranjang
          </button>
        </div>
        <div className="card flex-auto flex flex-col gap-8">
          <h2>Keranjang</h2>
          <div className="flex flex-col gap-2">
            <h4>Athea Beauty Brick Cinnamon</h4>
            <p>x{cinnamon}</p>
            <h4>Athea Beauty Dark Wine</h4>
            <p>x{wine}</p>
          </div>
          <div className=" pt-4 border-t border-slate-500">
            <h4>Total Harga</h4>
            <h3>{formatRupiah(totalBelanja)}</h3>
          </div>
          <form onSubmit={handleSubmit} className="mt-auto space-y-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="pembayaran">Pembayaran</label>
              <select name="pembayaran" id="pembayaran" className="form">
                <option value="cash">Cash</option>
                <option value="debit">Debit</option>
              </select>
            </div>
            <div className="flex gap-3">
              <button type="reset" className="btn btn-secondary flex-auto">Cancel</button>
              <button type="submit" className="btn btn-primary flex-auto">
                Checkout
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OrderGuest;
