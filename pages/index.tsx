import type { NextPage } from 'next'

import SEO from '@components/SEO'
import Nav from '@components/Nav/Nav'
import Intro from '@components/Home/Home'
import Testimonials from '@components/Testimonials/Testimonials'
import SocialBar from '@components/Testimonials/SocialBar'
import About from '@components/About/About'
import Calendar from '@components/Calendar/Calendar'
import Footer from '@components/Footer/Footer'

import { styled } from '@css/theme.config'

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100vw',
  alignItems: 'center',
})

const Home: NextPage = () => {
  return (
    <Container>
      <SEO />
      <Nav />
      <Intro />
      <Testimonials />
      <SocialBar />
      <About />
      <Calendar />
      <Footer />
    </Container>
  )
}

export default Home
