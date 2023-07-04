import React from 'react'
import { brickCinnamon, darkWine } from '../../assets/img';
import { formatRupiah } from '../../components/format';
import { Link } from 'react-router-dom';

const Product = () => {
  return (
    <>
      <h1>Products</h1>
      <div className="mt-5 card">
        <div className="flex justify-end">
          <Link to='/product/add' className="btn btn-primary">Add Product</Link>
        </div>
        <table className='mt-5'>
          <thead>
            <tr>
              <th>Product</th>
              <th>SKU</th>
              <th>Rating</th>
              <th>Price</th>
              <th>Viewed</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="flex gap-5 items-center">
                <img
                  src={brickCinnamon}
                  alt="brick-cinnamon"
                  className="w-14 h-14 rounded bg-cover"
                />
                <span>Brick Cinnamon</span>
              </td>
              <td>01231441</td>
              <td>4/5</td>
              <td>{formatRupiah(65000)}</td>
              <td>124</td>
            </tr>
            <tr>
              <td className="flex gap-5 items-center">
                <img
                  src={darkWine}
                  alt="brick-cinnamon"
                  className="w-14 h-14 rounded bg-cover"
                />
                <span>Dark Wine</span>
              </td>
              <td>01231441</td>
              <td>4/5</td>
              <td>{formatRupiah(65000)}</td>
              <td>98</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Product