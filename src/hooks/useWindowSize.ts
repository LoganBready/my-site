import React from 'react'

export default function useWindowSize() {
  const [windowSize, setWindowSize] = React.useState({
    width: 1200, // Default width during SSR
    height: 800, // Default height during SSR
  })

  React.useEffect(() => {
    const isSSR = typeof window === 'undefined'

    function changeWindowSize() {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    }

    if (!isSSR) {
      window.addEventListener('resize', changeWindowSize)

      return () => {
        window.removeEventListener('resize', changeWindowSize)
      }
    }
  }, [])

  return windowSize
}
