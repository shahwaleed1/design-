import React from 'react'

const Contect = () => {
    return (
        <div className='bg-[#242424]'>
  <div className='container flex flex-wrap lg:flex-nowrap mt-20 py-10 gap-7'>
    <div className='w-full lg:w-1/2'>
      <h1 className='font-bold text-6xl sm:text-center md:text-start'>Contact </h1>
      <div className='mt-8'>
        I would love hear about your project and how I could help. Please fill in the form, and I'll get back to you as soon as possible.
      </div>
    </div>
    <div className='w-full lg:w-1/2'>
      <form className='flex flex-col gap-3 px-5'>
        <input className='border-b-2 p-3 outline-none' type="text" placeholder='NAME' />
        <input className='border-b-2 p-3 outline-none' type="email" placeholder='EMAIL' />
        <textarea className='border-b-2 p-3 resize-none outline-none' rows={5} placeholder='Message'></textarea>
        <button className='border-b-3 border-[#164931] self-end mt-15 p-2 px-3 font-semibold hover:bg-[#164931] transition-all hover:cursor-pointer'>SEND MESSAGE</button>
      </form>
    </div>
  </div>
</div>

    )
}

export default Contect