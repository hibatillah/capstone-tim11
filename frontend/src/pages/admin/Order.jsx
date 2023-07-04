import React from "react";
import { formatRupiah } from "../../components/format";
import almondOil from "../../assets/img/almon-oil.png";
import gliserin from "../../assets/img/gliserin.png";
import pewarna from "../../assets/img/pewarna.png";
import fragrance from "../../assets/img/fragrance.png";

const Order = () => {
  const material = [
    ["Sweet Almond Oil", almondOil, 780000, 15, "98174571", 8],
    ["Gliserin", gliserin, 120000, 10, "98174572", 8],
    ["Pewarna", pewarna, 520000, 15, "0135223", 8],
    ["Fragrance", fragrance, 2209000, 7, "0135223", 8],
  ];

  return (
    <>
      <h1>Order</h1>
      <div className="mt-5 grid grid-cols-[25%_1fr] gap-6">
        <div className="col-span-1 card flex flex-col gap-4 h-fit">
          <h3>Order Details</h3>
          <div className="">
            <p className="text-gray-800">Order ID</p>
            <p className="text-lg font-medium text-gray-800">#14611</p>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="payment">Payment Method</label>
            <select name="payment" id="payment" className="form w-full">
              <option value="cash">Cash</option>
              <option value="debit">Debit</option>
            </select>
            <p>Set the payment method</p>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="shipping">Shipping Method</label>
            <select name="shipping" id="shipping" className="form w-full">
              <option value="Ojek Online">Ojek Online</option>
              <option value="Ekspedisi">Ekspedisi</option>
            </select>
            <p>set the shipping method</p>
          </div>
        </div>
        <div className="col-span-1 space-y-6">
          <div className="card">
            <h3>Select Products</h3>
            <h4>Add product to this order</h4>
            <p className="my-2">
              Select one or more from the list below by ticking the checkbox
            </p>
            <div className="text-lg font-medium text-gray-800">
              Total Cost: {formatRupiah(67000000)}
            </div>
            <hr className="my-4" />
            <div className="space-y-4 divide-y divide-gray-300">
              <div className="flex justify-between">
                <p>PRODUCT</p>
                <p>QTY REMAINING</p>
              </div>
              {material.map(([name, img, price, qty, sku, min], i) => (
                <div className="py-4 flex items-center gap-6">
                  <img src={img} alt="img" className="w-16 h-16 rounded" />
                  <div className="">
                    <h4 className="text-gray-800 font-medium">{name}</h4>
                    <p className="text-sm">{formatRupiah(price)}</p>
                    <p className="text-sm">SKU: {sku}</p>
                  </div>
                  <div className="ml-auto mr-5 flex gap-4 text-lg font-semibold">
                    {qty <= min ? (
                      <div className="px-2 py-1 text-sm rounded bg-yellow-100 text-yellow-500">
                        Low Stock
                      </div>
                    ) : null}
                    <span
                      className={
                        qty <= min ? "text-yellow-500" : "text-gray-500"
                      }
                    >
                      {qty}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="card">
            <h3>Delivery Details</h3>
            <h4 className="text-gray-800 font-medium">Billing Address</h4>
            <form className="w-full mt-6 flex flex-col gap-5 items-end">
              <div className="flex gap-4 w-full">
                <div className="flex flex-col gap-1 flex-auto">
                  <label htmlFor="address">Address</label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    className="form"
                    placeholder="Masukkan Alamat"
                  />
                </div>
                <div className="flex flex-col gap-1 flex-auto">
                  <label htmlFor="city">City</label>
                  <input
                    type="text"
                    name="city"
                    id="city"
                    className="form"
                    placeholder="Masukkan Kota"
                  />
                </div>
              </div>
              <div className="flex gap-4 w-full">
                <div className="flex flex-col gap-1 flex-auto">
                  <label htmlFor="kode-pos">Kode Pos</label>
                  <input
                    type="text"
                    name="kode-pos"
                    id="kode-pos"
                    className="form"
                    placeholder="Masukkan Kode Pos"
                  />
                </div>
                <div className="flex flex-col gap-1 flex-auto">
                  <label htmlFor="province">Province</label>
                  <input
                    type="text"
                    name="province"
                    id="province"
                    className="form"
                    placeholder="Masukkan Provinsi"
                  />
                </div>
              </div>
              <div className="flex gap-4 w-fit">
                <button type="reset" className="btn btn-secondary">Cancel</button>
                <button type="submit" className="btn btn-primary">Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
