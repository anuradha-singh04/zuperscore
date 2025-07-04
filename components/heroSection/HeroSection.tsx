import React from 'react';

const HeroSection = () => {
  return (

    <div className='w-auto h-auto px-16 py-20 inline-flex justify-between items-center gap-x-10'>

      {/* left side */}
      <div className='w-[624px] inline-flex flex-col justify-start items-start gap-9'>
        <div className='self-stretch flex flex-col justify-start items-start gap-2'>
          <div className='self-stretch justify-start'>
            <span className="text-[#374151] font-poppins text-[48px] font-semibold leading-[125%] tracking-[-0.72px]">
              Ace Your Studies with<br />
            </span>
            <span className="text-[#BB108C]  font-poppins text-[48px] font-semibold leading-[125%] tracking-[-0.72px]">
              Expert{""}&nbsp;
            </span>
            <span className="text-[#374151] font-poppins text-[48px] font-semibold leading-[125%] tracking-[-0.72px]">
              Support & Real-<br />Time&nbsp;
            </span>
            <span className="text-[#BB108C]  font-poppins text-[48px] font-semibold leading-[125%] tracking-[-0.72px]">
              Analysis
            </span>
          </div>
          <div className="self-stretch mt-2 w-[600px] justify-start text-gray-700 text-xl font-normal font-['Poppins'] leading-7 tracking-tight">
            Connect with top-notch tutors and access tailored study<br />
            materials all in one platform. Elevate your academic journey<br />
            with interactive tests and insightful performance analysis.

            {/* button */}
            <div className=" h-14 px-8 py-4 mt-[8%] bg-[#BB108C] rounded-xl inline-flex justify-center items-center gap-2.5">
              <button className="text-white font-[Poppins] text-[24px] font-medium leading-[140%] tracking-[0.432px]">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* right side */}
      <img className="w-[500px] h-96 rounded-lg outline-4 outline-Primary-100"
        src="https://placehold.co/560x373"
      />
    </div>
  )
}

export default HeroSection
