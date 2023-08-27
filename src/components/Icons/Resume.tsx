import { memo } from 'react'
import { IconType } from './Icon.types'

export const Resume = memo(({ className, color, height, width }: IconType) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke={color}
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M8 6h10a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-12" />
    <path d="M6 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M8 18v-12a2 2 0 1 0 -4 0v12" />
  </svg>
))
