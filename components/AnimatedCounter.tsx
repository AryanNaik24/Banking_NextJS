
'use client'

import React from 'react'
import CountUp from 'react-countup'

function AnimatedCounter({amount}:{amount:number}) {
  return (
    <div className='w-full'><CountUp decimals={2} duration={1.75} decimal=',' prefix='₹ ' end={amount}/></div>
  )
}

export default AnimatedCounter