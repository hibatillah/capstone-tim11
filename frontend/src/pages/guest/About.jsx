import React from "react";
import { products } from "../../assets/img";

const About = () => {
  const medsos = [];

  return (
    <>
      <h1>About Us</h1>
      <div className="mt-5 w-full grid grid-cols-3 gap-6 place-items-stretch">
        {/* athea */}
        <div className="col-span-2 card">
          <h2 className="text-blue-700 mb-3">Athea Beauty</h2>
          <div className="flex gap-5">
            <img src={products} alt="product" className="w-2/5" />
            <p>
              Athea Beauty dengan nama perusahaan PT. Ravella Beauty Indonesia,
              perusahaan kosmetik yang telah berkembang sejak didirikan pada
              tahun 2016. Perusahaan ini berkomitmen untuk menyediakan
              produk-produk kecantikan berkualitas tinggi dengan fokus produk
              berupa liptint dengan berbagai warna kepada konsumen. dengan
              berbagai inovasi dan penelitian yang dilakukan, PT. Ravella Beauty
              Indonesia telah berhasil mengukuhkan posisinya di pasar kosmetik.
            </p>
          </div>
          <p className="mt-4">
            Dalam pemasaran dan penjualan produk PT. Ravella Beauty Indoensai
            menggunakan sistem produksi MTS atau Make to Stock dalam memenuhi
            kebutuhan dan pelayanan pelanggan. Jadi dalam hal ini perusahaan
            tentunya membutuhkan inventoy atau gudang untuk menyimpan produk
            jadi yang sudah dibuat.
          </p>
        </div>
        {/* info */}
        <div className="col-span-1">
          <div className="card">
            <h3>Info</h3>
            <div className="grid grid-cols-[auto_1fr] gap-x-8 gap-y-2 mt-4">
              <p>Corporate Name</p>
              <p className="text-gray-700">Ravella Beauty Indonesia</p>
              <p>City</p>
              <p className="text-gray-700">Pekanbaru</p>
              <p>Address</p>
              <p className="text-gray-700">Jalan Lele No. 18</p>
              <p>Phone</p>
              <p className="text-gray-700">082268485930</p>
            </div>
            <div className="card">
              <h3>Stay Connected</h3>
              <div className="mt-4 space-y-2">
                <a
                  href="https://www.instagram.com/atheabeaute/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="text-gray-700">atheabeauty_official</p>
                </a>
                <a
                  href="https://shopee.co.id/atheabeauty"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="text-gray-700">Athea Beauty</p>
                </a>
                <a
                  href="https://www.tiktok.com/@atheabeauty"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="text-gray-700">atheabeauty</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
