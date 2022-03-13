import { styled } from '@css/theme.config'
import { motion } from 'framer-motion'

export const Container = styled(motion.div, {
  width: '70vw',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  marginTop: 100,
})

export const Title = styled(motion.h1, {
  color: '$primary',
  textAlign: 'center',
  fontSize: 60,
  width: 500,
  marginBottom: 50,
  span: {
    color: '$main',
  },
  '@iPadPro': {
    marginBottom: 100,
    fontSize: 48,
  },
})

export const Arrow = styled(motion.svg, {
  position: 'absolute',
  marginLeft: 50,
  fill: '$primary',
  '@iPadPro': {
    display: 'none',
  },
})
