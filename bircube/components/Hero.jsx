import React from 'react'

const Hero = () => {
  return (
    <>
  <div className="container">
    <div className="flex flex-col-reverse sm:flex-col-reverse sm:my-5 md:flex-row items-center justify-between min-h-[700px] h-screen max-h-[900px]">
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold my-10">
          Nice to meet you! <br />
          I'm <span className="border-b-6 border-[#164931]">Adanm Keyes.</span>
        </h1>
        <p className="text-base sm:text-lg">
          Based in UK, I'm a front-end developer <br />
          passionate about building accessible web apps <br />
          that users love.
        </p>
        <button className="border-b-3 border-[#164931] mt-6 p-2 px-4 font-semibold hover:bg-[#4e7c66] transition-all hover:cursor-pointer">
          CONTACT ME
        </button>
      </div>
      <div className="w-full md:w-1/2 mb-6 md:mb-0">
        <img className="w-[18rem] sm:w-[13rem] md:w-[25rem] m-auto" src="/men.png" alt="Portrait" />
      </div>

    </div>
  </div>

  <hr className="mx-34 mb-15 border-2 border-gray-100" />
</>

  )
}

export default Hero