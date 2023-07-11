import React from 'react'
import { brickCinnamon, darkWine } from '../../assets/img';
import { formatRupiah } from '../../components/format';

const DashboardSupplier = () => {
  return (
    <>
      <h1>DashBoard</h1>
      <div className="grid grid-cols-3 gap-6 mt-5">
        <div className="col-span-2 space-y-6">
          <div className="card">
            <h3>Top Selling</h3>
            <table>
              <thead>
                <tr>
                  <th>Preview</th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Sold</th>
                  <th>Pendapatan</th>
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
                  </td>
                  <td className="text-blue-600">Athea - Vintage Rose</td>
                  <td>{formatRupiah(64000)}</td>
                  <td>124</td>
                  <td>{formatRupiah(7936000)}</td>
                </tr>
                <tr>
                  <td className="flex gap-5 items-center">
                    <img
                      src={darkWine}
                      alt="dark-wine"
                      className="w-14 h-14 rounded bg-cover"
                    />
                  </td>
                  <td className="text-blue-600">Athea - Apple Red</td>
                  <td>{formatRupiah(65000)}</td>
                  <td>98</td>
                  <td>{formatRupiah(4420000)}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="card">
            <h3>Stock Product</h3>
            <table>
              <thead>
                <tr>
                  <th>Preview</th>
                  <th>Product</th>
                  <th>Stock</th>
                  <th>Sold</th>
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
                  </td>
                  <td className="text-blue-600">Athea - Vintage Rose</td>
                  <td>45</td>
                  <td>124</td>
                </tr>
                <tr>
                  <td className="flex gap-5 items-center">
                    <img
                      src={darkWine}
                      alt="dark-wine"
                      className="w-14 h-14 rounded bg-cover"
                    />
                  </td>
                  <td className="text-blue-600">Athea - Apple Red</td>
                  <td>67</td>
                  <td>98</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-span-1">
          <div className="card min-h-[300px]">
            <h3>Top Selling</h3>
            <div className=""></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardSupplier