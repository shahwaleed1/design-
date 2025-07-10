import React from 'react'

const Technoles = () => {


    const technology = [
        {
            id: 1,
            name: 'HTML',
            experience: '4 Year Experience'
        },
        {
            id: 2,
            name: 'CSS',
            experience: '4 Year Experience'
        },
        {
            id: 3,
            name: 'Javascript',
            experience: '4 Year Experience'
        },
        {
            id: 4,
            name: 'Accessibility',
            experience: '4 Year Experience'
        },
        {
            id: 5,
            name: 'React',
            experience: '4 Year Experience'
        },
        {
            id: 6,
            name: 'Sass',
            experience: '4 Year Experience'
        }
    ]


    return (
        <div className='container '>
            <div className=' flex items-center justify-center flex-wrap gap-2'>
                {technology.map((tech, index) => (
                    <div key={index} className='p-6 w-sm hover:bg-zinc-800 transition-all md:w-[20rem]'>
                        <div className='text-center md:text-left'>
                            <h2 className='text-2xl sm:font-semibold md:text-3xl md:font-bold'>{tech.name}</h2>
                            <p>{tech.experience}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Technoles