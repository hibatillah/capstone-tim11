import React from 'react'
import { instagram, shopee, tiktok } from '../assets/icons';

const Bio = () => {
  return (
    <>
      {/* info */}
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
      </div>
      {/* medsos */}
      <div className="card">
        <h3>Stay Connected</h3>
        <div className="mt-4 flex flex-col gap-2">
          <a
            href="https://www.instagram.com/atheabeaute/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-2 items-center"
          >
            <img src={instagram} alt="instagram" className='w-4 h-4 bg-contain' />
            <p>atheabeauty_official</p>
          </a>
          <a
            href="https://shopee.co.id/atheabeauty"
            target="_blank"
            rel="noopener noreferrer"
            className='flex gap-2 items-center'
          >
            <img src={shopee} alt="shopee" className='w-4 h-4 bg-contain' />
            <p>Athea Beauty</p>
          </a>
          <a
            href="https://www.tiktok.com/@atheabeauty"
            target="_blank"
            rel="noopener noreferrer"
            className='flex gap-2 items-center'
          >
            <img src={tiktok} alt="tiktok" className='w-4 h-4 bg-contain' />
            <p>atheabeauty</p>
          </a>
        </div>
      </div>
    </>
  );
}

export default Bio