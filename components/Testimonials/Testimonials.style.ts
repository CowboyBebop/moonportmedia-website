import { styled } from '@css/theme.config'
import { motion } from 'framer-motion'

export const Grid = styled(motion.div, {
  display: 'grid',
  gridTemplateColumns: '22vw 22vw 22vw',
  gap: '2vw',
  width: '70vw',
  marginTop: 100,
  '@iPad': {
    display: 'flex',
    flexDirection: 'column',
    width: '90vw',
  },
  '@iPadPro': {
    gridTemplateColumns: '28vw 28vw 28vw',
    width: '90vw',
  },
})

export const NonGrid = styled(motion.div, {
  display: 'block',
  gap: '2vw',
  width: '70vw',
  marginTop: 100,
  '@iPad': {
    width: '90vw',
  },
  '@iPadPro': {
    width: '90vw',
  },
})

export const SingleTestimonial = styled(motion.a, {
  margin:"auto",
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  height: 225,
  background: '$fg',
  color: '$fgText',
  width: '22vw',
  padding: 30,
  borderRadius: 20,
  textDecoration: 'none',
  '@iPadPro': {
    width: '28vw',
    padding: 20,
  },
  '@iPad': {
    padding: 30,
    width: '90vw',
    marginTop: 20,
  },
})

export const Testimonial = styled(motion.a, {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  height: 225,
  background: '$fg',
  color: '$fgText',
  width: '22vw',
  padding: 30,
  borderRadius: 20,
  textDecoration: 'none',
  '@iPadPro': {
    width: '28vw',
    padding: 20,
  },
  '@iPad': {
    padding: 30,
    width: '90vw',
    marginTop: 20,
  },
})

export const Box = styled(motion.div, {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  marginLeft: 15,
  variants: {
    parent: {
      true: {
        flexDirection: 'row',
        marginLeft: 0,
      },
    },
  },
})

export const Info = styled(motion.p, {
  color: '$primary',
  fontSize: 20,
  variants: {
    subs: {
      true: {
        color: '$fgSecondary',
        fontWeight: 400,
        '@media only screen and (max-width: 1024px)': {
          fontSize: 18,
        },
      },
    },
  },
})

export const Image = styled(motion.img, {
  width: 65,
  height: 65,
  borderRadius: 100,
  '@iPhonePlus': {
    width: 40,
    height: 40,
  },
})

export const Text = styled(motion.p, {
  color: '$fgText',
  fontSize: 18,
  marginTop: 20,
  '@iPadPro': {
    marginTop: 10,
    fontSize: 16,
  },
  '@iPhonePlus': {
    fontSize: 14,
  },
})
