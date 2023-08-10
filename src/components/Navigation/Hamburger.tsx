import { useState } from 'react'
import { HamburgerIcon } from '../Icons/HamburgerIcon'

export const Hamburger = () => {
  const [, setIsExpanded] = useState(false)

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
    </>
  )
}
