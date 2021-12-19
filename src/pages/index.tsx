import React from 'react'
import type { NextPage } from 'next'
import Door from '../components/Door'
import Gift from '../components/Gift'

const Home: NextPage = () => {
  return (
    <div>
      <Gift />
      <Door />
    </div>
  )
}

export default Home
