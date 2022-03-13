import React from 'react'

import testimonials from '@content/testimonials'
import * as S from './Testimonials.style'
import { FadeContainer, Fade, FadeReverse, Image } from '@anims/index'

const Testimonials: React.FC = () => {
  return (
    <S.Grid
      variants={FadeContainer}
      initial='hidden'
      animate='visible'
      id='testimonials'
    >
      {testimonials.map((testimonial, index) => (
        <S.Testimonial variants={Fade} key={index} href={testimonial.link}>
          <S.Box parent>
            <S.Image src={testimonial.image} variants={Image} />
            <S.Box>
              <S.Info variants={FadeReverse}>{testimonial.name}</S.Info>
              <S.Info subs variants={Fade}>
                {testimonial.subscribers} subscribers
              </S.Info>
            </S.Box>
          </S.Box>
          <S.Text variants={Fade}>{testimonial.text}</S.Text>
        </S.Testimonial>
      ))}
    </S.Grid>
  )
}

export default Testimonials
