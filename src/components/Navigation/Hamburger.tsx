import { useState } from 'react'
import { HamburgerIcon } from '../Icons/HamburgerIcon'

export const Hamburger = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  const onHamburgerClick = () => {
    setIsExpanded((prevState) => !prevState)
  }
  return (
    <>
      <button onClick={onHamburgerClick}>
        <HamburgerIcon
          height={50}
          width={50}
          className=""
          onClick={() => console.log('clicked')}
          color=""
          backgroundColor=""
        />
      </button>
      {/* <button
      className="button-three"
      aria-controls="primary-navigation"
      aria-expanded={isExpanded ? "true" : "false"}
      onClick={onHamburgerClick}
      data-state={isExpanded ? "opened" : "closed"}
    >
      <svg
        stroke="var(--button-color)"
        fill="none"
        className="hamburger"
        viewBox="-10 -10 120 120"
        width="48"
      >
        <path
          className="line"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m 20 40 h 60 a 1 1 0 0 1 0 20 h -60 a 1 1 0 0 1 0 -40 h 30 v 70"
        ></path>
      </svg>
    </button> */}
    </>
  )
}
