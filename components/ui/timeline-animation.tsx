"use client"

import * as React from 'react'


type ElementTag = string

interface TimelineContentProps {
  children?: React.ReactNode
  as?: ElementTag
  animationNum: number
  customVariants?: any
  timelineRef: React.RefObject<HTMLElement | null>
  className?: string
  style?: React.CSSProperties
}

/**
 * Reveals its children once the element referenced by `timelineRef` scrolls
 * into view, using `customVariants` with `animationNum` as the stagger index
 * (passed as the `custom` prop to framer-motion).
 */
export function TimelineContent({
  children,
  as = 'div',
  animationNum,
  customVariants,
  timelineRef,
  className,
  style,
}: TimelineContentProps) {
  // Animations disabled — render static element
  const Element: any = as
  return (
    <Element className={className} style={style}>
      {children}
    </Element>
  )
}
