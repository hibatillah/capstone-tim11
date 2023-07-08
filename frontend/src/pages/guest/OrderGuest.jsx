import React from "react";
import { brickCinnamon, darkWine } from "../../assets/img";
import { Basket } from "../../components/icon";
const OrderGuest = () => {
  return (
    <div>
      <h1>Order Product</h1>
      <div className="flex mt-8 gap-5">
        <div className="card flex-none w-96 h-fit">
          <h2>Athea Beauty Brick Cinnamon</h2>
          <div className="mt-3 w-full h-64 rounded-lg overflow-hidden">
            <img
              src={brickCinnamon}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex gap-3 mt-5">
            <button className="btn btn-primary flex-auto">Beli Sekarang</button>
            <button className="btn btn-secondary flex items-center gap-2">
              <Basket />
              Keranjang
            </button>
          </div>
        </div>
        <div className="card flex-none w-96 h-fit">
          <h2>Athea Beauty Dark Wine</h2>
          <div className="mt-3 w-full h-64 rounded-lg overflow-hidden">
            <img src={darkWine} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="flex gap-3 mt-5">
            <button className="btn btn-primary flex-auto">Beli Sekarang</button>
            <button className="btn btn-secondary flex items-center gap-2">
              <Basket />
              Keranjang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderGuest;
