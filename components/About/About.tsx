import React from 'react'

import * as S from './About.style'
import { FadeContainer, Fade } from '@anims/index'

const About: React.FC = () => {
  return (
    <S.Container
      variants={FadeContainer}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      id='about'
    >
      <S.Title variants={Fade}>About</S.Title>
      <S.Bio variants={Fade}>
        Hey there! We are Moonport Media, and we work together with creators
        across a wide variety of platforms to help upscale their content and
        channel growth by brainstorming, analysing, and identifying and
        strengthening weak points.
      </S.Bio>
      <S.Button
        variants={Fade}
        href='#schedule'
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.8 }}
      >
        Let&apos;s Chat!
      </S.Button>
    </S.Container>
  )
}

export default About
