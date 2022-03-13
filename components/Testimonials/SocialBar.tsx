import React from 'react'
import { Twitter, Mail, Youtube } from 'react-feather'

import { styled } from '@css/theme.config'
import { motion } from 'framer-motion'

import * as L from '@content/socials'
import { FadeContainer, Fade } from '@anims/index'

const Links = styled(motion.div, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '70vw',
  marginTop: 50,
  '@iPadPro': {
    width: '85vw',
  },
})

const Link = styled(motion.a, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$primary',
  marginRight: 30,
})

const Line = styled(motion.div, {
  float: 'right',
  width: '100%',
  height: 3,
  background: '$secondary',
  borderRadius: 10,
})

const SocialBar: React.FC = () => {
  return (
    <Links variants={FadeContainer} initial='hidden' animate='visible'>
      <Link
        href={L.Twitter}
        variants={Fade}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.8 }}
        rel='norefferer'
        target='_blank'
      >
        <Twitter size={30} />
      </Link>
      <Link
        href={L.Email}
        variants={Fade}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.8 }}
        rel='norefferer'
        target='_blank'
      >
        <Mail size={30} />
      </Link>
      <Link
        href={L.YouTube}
        variants={Fade}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.8 }}
        rel='norefferer'
        target='_blank'
      >
        <Youtube size={30} />
      </Link>
      <Line variants={Fade} />
    </Links>
  )
}

export default SocialBar
