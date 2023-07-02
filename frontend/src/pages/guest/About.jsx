import React from "react";
import { products } from "../../assets/img";
import { Bio } from "../../components";

const About = () => {
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
        <div className="col-span-1 space-y-6">
          <Bio />
        </div>
      </div>
    </>
  );
};

export default About;
