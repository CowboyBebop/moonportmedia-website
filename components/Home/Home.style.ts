import { styled } from '@css/theme.config'
import Wavy from '@anims/WavyText'
import { motion } from 'framer-motion'

export const Container = styled(motion.div, {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-end',
  width: '70vw',
  marginTop: 100,
  '@iPadPro': {
    width: '90vw',
    flexDirection: 'column',
    alignItems: 'center',
  },
})

export const Box = styled(motion.div, {
  display: 'flex',
  flexDirection: 'column',
  '@iPadPro': {
    alignItems: 'center',
    textAlign: 'center',
  },
})

export const Intro = styled(Wavy, {
  color: '$primary',
  fontSize: 60,
  '@iPhonePlus': {
    fontSize: 30,
  },
  '.highlight': {
    color: '$main',
  },
})

export const Bio = styled(motion.p, {
  fontSize: 20,
  color: '$secondary',
  width: '65%',
  marginTop: 30,
  '@iPad': {
    width: '100%',
    fontSize: 18,
  },
})

export const Button = styled(motion.a, {
  textAlign: 'center',
  textDecoration: 'none',
  color: '#FFF',
  background: '$main',
  fontSize: 20,
  padding: '20px 40px',
  borderRadius: 50,
  userSelect: 'none',
  whiteSpace: 'nowrap',
  '@iPadPro': {
    marginTop: 40,
  },
})
