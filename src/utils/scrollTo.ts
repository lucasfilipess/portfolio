import { RefObject } from 'react'
import animateScroll from './animateScroll'

export type ScrollToProps = {
  ref: RefObject<HTMLDivElement> | null
  duration?: number
}

const logError = () =>
  console.error(
    `Invalid element, are you sure you've provided element react ref?`
  )

const getElementPosition = (element: HTMLElement) => element.offsetTop

export const scrollTo = ({ ref = null, duration = 1500 }: ScrollToProps) => {
  const initialPosition = window.scrollY
  const element = ref ? ref?.current : null

  if (!element) {
    logError()
    return
  }

  animateScroll({
    targetPosition: getElementPosition(element),
    initialPosition,
    duration
  })
}
