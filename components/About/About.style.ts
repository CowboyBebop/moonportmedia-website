import { styled } from '@css/theme.config'
import { motion } from 'framer-motion'

export const Container = styled(motion.div, {
  display: 'flex',
  flexDirection: 'column',
  width: '70vw',
  marginTop: 75,
  '@iPadPro': {
    width: '90vw',
  },
})

export const Title = styled(motion.h1, {
  fontSize: 48,
  color: '$primary',
})

export const Bio = styled(motion.p, {
  color: '$secondary',
  fontSize: 20,
  width: '50%',
  margin: '50px 0',
  '@iPadPro': {
    width: '100%',
  },
})

export const Button = styled(motion.a, {
  textAlign: 'center',
  textDecoration: 'none',
  color: '#FFF',
  background: '$main',
  fontSize: 18,
  padding: '20px 40px',
  borderRadius: 50,
  userSelect: 'none',
  whiteSpace: 'nowrap',
  width: 'fit-content',
})
