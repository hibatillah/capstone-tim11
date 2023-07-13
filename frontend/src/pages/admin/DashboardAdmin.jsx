/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import { formatRupiah } from "../../components/format";
import { cart, people, usd } from "../../assets/icons";
import { brickCinnamon, darkWine } from "../../assets/img";
import { GetData } from "../../components/api";

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

const Penjualan = () => {
  const { users } = GetData("http://localhost:5000/penjualan");
  console.log(users);
  return users;
};

const DashboardAdmin = () => {
  const penjualan = Penjualan();

  return (
    <div className="p-8">
      <iframe
        width="100%"
        height="4000"
        src="https://lookerstudio.google.com/embed/reporting/e768c38a-d8f3-4fbf-8def-d144c1a1a310/page/BWoWD"
        frameborder="0"
        allowfullscreen
      />
    </div>
  );
};

export default DashboardAdmin;
