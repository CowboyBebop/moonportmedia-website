import { styled } from '@css/theme.config'
import { motion } from 'framer-motion'

export const Nav = styled(motion.div, {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  overflow: 'hidden',
  width: '70vw',
  marginTop: 50,
  '@iPadPro': {
    width: '90vw',
  },
})

export const LogoContainer = styled(motion.a, {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

export const Logo = styled(motion.img, {
  height: 75,
  width: 75,
  marginRight: 20,
  '@iPadPro': {
    marginRight: 10,
  },
})

export const Wordmark = styled(motion.h1, {
  fontSize: 30,
  color: '$primary',
  '@iPhonePlus': {
    fontSize: 24,
  },
})

export const Toggle = styled(motion.div, {
  zIndex: 9999,
  color: '$primary',
})
