import React from 'react'
import { Bio } from '../../components';
import { brickCinnamon, darkWine } from '../../assets/img';

const Detail = () => {
  return (
    <>
      <h1>Products</h1>
      <div className="mt-5 w-full grid grid-cols-3 gap-6 place-items-stretch">
        {/* athea */}
        <div className="col-span-2 space-y-6">
          {/* brick cinnamon */}
          <div className="card">
            <h2>Athea Beauty Brick Cinnamon</h2>
            <p>Athea Beauty dengan varian warna Brick Cinnamon</p>
            <div className="flex gap-5 mt-5">
              <img src={brickCinnamon} alt="brick-cinnamon" className='w-1/3 rounded-md' />
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque dolorum expedita explicabo dolor. Eos atque laborum, veniam nemo dicta repellat, repellendus quibusdam nihil tenetur et officiis vel enim dolorum, fugiat eaque saepe? Quaerat quam quibusdam ab unde nihil sint laboriosam.
              </p>
            </div>
          </div>
          {/* dark wine */}
          <div className="card">
            <h2>Athea Beauty Dark Wine</h2>
            <p>Athea Beauty dengan varian warna Dark Wine</p>
            <div className="flex gap-5 mt-5">
              <img src={darkWine} alt="brick-cinnamon" className='w-1/3 rounded-md' />
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque dolorum expedita explicabo dolor. Eos atque laborum, veniam nemo dicta repellat, repellendus quibusdam nihil tenetur et officiis vel enim dolorum, fugiat eaque saepe? Quaerat quam quibusdam ab unde nihil sint laboriosam.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 space-y-6">
          <Bio />
        </div>
      </div>
    </>
  );
}

export default Detail