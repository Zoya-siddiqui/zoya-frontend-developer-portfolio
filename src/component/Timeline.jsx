import React from 'react'
import { Summery } from './ui/summery'
import { Projects } from './ui/Projects'
import { Experience } from './ui/Experience'

const Timeline = () => {
  return (
    <div className='flex flex-col md:flex-row md:max-w-5xl mx-auto py-20'>
        <Experience/>
      <Summery/>
      {/* <Projects/> */}
    

    </div>
  )
}

export default Timeline
