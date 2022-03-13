import { styled } from '@css/theme.config'
import { motion } from 'framer-motion'

export const Footer = styled('footer', {
  display: 'flex',
  margin: '100px 0',
  '@iPad': {
    flexDirection: 'column',
    alignItems: 'center',
  },
})

export const Box = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  variants: {
    main: {
      true: {
        alignItems: 'center',
        marginRight: 200,
        '@iPadPro': {
          marginRight: 50,
        },
        '@iPad': {
          marginRight: 0,
        },
      },
    },
  },
  '@iPad': {
    flexDirection: 'column',
  },
})

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginLeft: 100,
  '@iPadPro': {
    marginLeft: 0,
  },
  '@iPad': {
    alignItems: 'center',
  },
})

export const Title = styled('a', {
  fontSize: 20,
  color: '$primary',
  margin: '20px 0 10px 0',
  fontWeight: 600,
})

export const Links = styled('div', {
  display: 'flex',
})

export const Link = styled(motion.a, {
  fontSize: 20,
  color: '$main',
  textDecoration: 'none',
  marginRight: 20,
  variants: {
    icon: {
      true: {
        marginRight: 30,
        color: '$primary',
        '@iPad': {
          margin: '20px 10px',
        },
      },
    },
  },
  '@iPad': {
    fontSize: 16,
    margin: '0 10px',
    textAlign: 'center',
  },
})
