import React from 'react'
import type { NextPage } from 'next'
import Gift from '../components/Gift'

const Home: NextPage = () => {
  return (
    <div>
      <main>
        <h1>
          <Gift />
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </main>
    </div>
  )
}

export default Home
