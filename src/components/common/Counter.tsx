'use client'

import CountUp from 'react-countup'

const Counter = ({ end, decimals, extraClass }: any) => {
  if (!window) return
  return (
    <CountUp
      end={end ? end : 100}
      duration={3}
      decimals={decimals ? decimals : 0}>
      {({ countUpRef, start }) => (
        <span
          className={`count-text ${extraClass}`}
          data-from='0'
          data-to={end}
          ref={countUpRef}>
          count
        </span>
      )}
    </CountUp>
  )
}

export default Counter
