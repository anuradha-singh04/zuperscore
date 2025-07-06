import Link from 'next/link'
import React from 'react'

const Header = () => {

  return (
    <div className='flex h-[92px] px-16 py-6 justify-between items-center border-b border-[#F3F4F6] bg-[#FFF] shadow-[0px_3px_6px_0px_rgba(0,0,0,0.06)]'>
      {/* left side */}
      <div className='text-[#BB108C] font-[Protest_Strike] text-[24px] not-italic font-normal leading-[140%] tracking-[0.432px]'>
        Zuperscore
      </div>

      {/* navbar */}
      <div className='flex items-center gap-6'>
        <Link href="/Why Us" className='text-[#BB108C] font-[Poppins] text-[20px] font-medium leading-[140%] tracking-[0.36px]'>Why Us</Link>
        <Link href="/Features" className='text-[#374151] font-[Poppins] text-[20px] font-normal leading-[140%] tracking-[0.36px]'>Features</Link>
        <Link href="/FAQ" className='text-[#374151] font-[Poppins] text-[20px] font-normal leading-[140%] tracking-[0.36px]'>FAQ</Link>
        <Link href="/Community" className='text-[#374151] font-[Poppins] text-[20px] font-normal leading-[140%] tracking-[0.36px]'>Community</Link>
        <Link href="/How It Works" className='text-[#374151] font-[Poppins] text-[20px] font-normal leading-[140%] tracking-[0.36px]'>How It Works</Link>
      </div>

      {/* right side */}
      <div className='rounded-[8px] bg-[#BB108C] shadow-[0px_4px_4px_rgba(0,0,0,0.04)] h-[42px] px-4 py-2 justify-center flex items-center gap-[10px]'>
        <Link href="/Get-Started">
          <button className='text-white font-[Poppins] text-[16px] font-medium leading-[140%] tracking-[0.288px]'>
            Get Started
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Header


