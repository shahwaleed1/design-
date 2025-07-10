import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react';

const Projects = () => {

  const [data, setData] = useState([]);

  const baseUrl = "http://localhost:8000"


  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(`${baseUrl}/api/projects`);
      setData(response.data)
    }

    fetch();
  }, [])

  console.log(data)


  return (
    <div className='container my-6'>
      <div className='flex items-center justify-between'>
        <div className='text-5xl font-bold'>
          Projects
        </div>
        <div>
          <button className='border-b-3 border-[#164931] p-2 px-3 font-semibold hover:bg-[#4e7c66] transition-all hover:cursor-pointer'>CONTECT ME</button>
        </div>
      </div>
      <div className='my-6 flex items-center flex-wrap'>
        {data.map((project, index) => (
          <div key={index} className='p-2 mb-8 m-auto'>
            <img src="/project-2.jpg" className='w-[28rem] md:w-[20rem]' alt="" />
            <div className='mt-2'>
              <h3 className='text-2xl font-semibold'>{project.name}</h3>
              <p>{project.tech}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects