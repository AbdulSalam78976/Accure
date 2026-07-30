'use client'

import * as React from 'react'
import { motion, useInView, type Variants } from 'framer-motion'

type ElementTag = keyof typeof motion

interface TimelineContentProps {
  children?: React.ReactNode
  as?: ElementTag
  animationNum: number
  customVariants: Variants
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
  const isInView = useInView(timelineRef, { once: true, margin: '-100px' })
  const MotionComponent = motion[as] as unknown as React.ComponentType<
    React.ComponentPropsWithoutRef<'div'> & {
      custom?: number
      variants?: Variants
      initial?: string
      animate?: string
    }
  >

  return (
    <MotionComponent
      custom={animationNum}
      variants={customVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={className}
      style={style}
    >
      {children}
    </MotionComponent>
  )
}
