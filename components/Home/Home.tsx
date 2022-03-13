import React from 'react'

import * as S from './Home.style'
import { FadeContainer, FadeReverse, Image } from '@anims/index'

const Home: React.FC = () => {
  return (
    <S.Container
      id='home'
      variants={FadeContainer}
      initial='hidden'
      animate='visible'
    >
      <S.Box>
        <S.Intro text='We are a ' colour='professional' heading='h1' />
        <S.Intro text='editing & strategy agency.' colour='' heading='h1' />
        <S.Bio variants={FadeReverse}>
          Moonport Media is a video editing and channel strategy agency powed by
          strategy and analytics, helping you grow your YouTube channel to the
          moon!
        </S.Bio>
      </S.Box>
      <S.Button
        href='#schedule'
        variants={FadeReverse}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.8 }}
      >
        Book Now
      </S.Button>
    </S.Container>
  )
}

export default Home
