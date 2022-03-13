import React from 'react'
import { motion, Variants, HTMLMotionProps } from 'framer-motion'

interface Props extends HTMLMotionProps<'div'> {
  text: string
  colour?: string
  delay?: number
  duration?: number
  heading: 'h1' | 'p'
}

const Letter: React.FC<Props> = ({
  text,
  colour,
  delay = 0,
  duration = 0.05,
  heading,
  ...props
}: Props) => {
  const letters = Array.from(text)
  const highlight = Array.from(colour!)

  const container: Variants = {
    hidden: {
      opacity: 0,
    },
    show: (i: number = 1) => ({
      opacity: 1,
      transition: { staggerChildren: duration, delayChildren: i * delay },
    }),
  }

  const child: Variants = {
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 200,
      },
    },
  }

  return (
    <>
      {heading === 'h1' ? (
        <motion.h1
          style={{ display: 'flex', overflow: 'hidden' }}
          variants={container}
          initial='hidden'
          animate='show'
          {...props}
        >
          {letters.map((letter, index) => (
            <motion.span key={index} variants={child}>
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}
          {highlight.map((letter, index) => (
            <motion.span key={index} variants={child} className='highlight'>
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}
        </motion.h1>
      ) : (
        <motion.p
          style={{ display: 'flex', overflow: 'hidden' }}
          variants={container}
          initial='hidden'
          animate='show'
          {...props}
        >
          {letters.map((letter, index) => (
            <motion.span key={index} variants={child}>
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}
        </motion.p>
      )}
    </>
  )
}

export default Letter
