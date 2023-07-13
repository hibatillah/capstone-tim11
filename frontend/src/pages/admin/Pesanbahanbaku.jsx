import React from 'react'
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Pesanbahanbaku = () => {
    const navigate = useNavigate();
    const handleSubmit = (event) => {
      event.preventDefault();
      const data = {
        bahan: event.target.bahan.value,
        jumlah: event.target.jumlah.value,
        supplier: event.target.supplier.value,
        status: "diproses",
      };
      axios
        .post("http://127.0.0.1:5000/belibahan/add", data)
        .then((res) => {
          console.log(res);
          event.target.reset();
          navigate("/bahanbaku");
        })
        .catch((err) => {
          console.error(err);
        });
    };
    return (
      <div className="p-8">
        <div className="bg-white aspect-[4/2] rounded-lg">
          <p className="px-4 py-2">Pesan Bahan Baku</p>
          <div className="flex px-4 py-2 gap-4">
            <form className="w-full flex flex-col gap-2" onSubmit={handleSubmit}>
              <input
                type="text"
                className="px-4 py-2 border-2 w-full rounded-lg"
                placeholder="Nama Bahan Baku"
                id="bahan"
                name="bahan"
                required
              />
              <input
                type="text"
                className="px-4 py-2 border-2 w-full rounded-lg"
                placeholder="jumlah"
                id="jumlah"
                name="jumlah"
                required
              />
              <input
                type="text"
                className="px-4 py-2 border-2 w-full rounded-lg"
                placeholder="Supplier"
                id="supplier"
                name="supplier"
                required
              />
              <div className="flex justify-end px-4 py-4">
                <button
                  className="px-6 py-2 bg-[#3b82f6] text-white rounded-lg"
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
}

export default Pesanbahanbaku