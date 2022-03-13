import React from 'react'
import { Twitter, Mail, Youtube } from 'react-feather'

import * as S from './Footer.style'
import { Logo, Wordmark } from '@components/Nav/Nav.style'
import * as L from '@content/socials'

import { useTheme } from 'next-themes'

const Footer: React.FC = () => {
  const { theme, setTheme } = useTheme()
  const [src, setSrc] = React.useState('iconDark')

  React.useEffect(() => {
    setSrc(theme === 'dark' ? 'iconDark' : 'iconLight')
  }, [theme, setTheme])

  return (
    <S.Footer>
      <S.Box main>
        <Logo src={`/${src}.png`} alt='logo' draggable='false' />
        <Wordmark>Moonport Media</Wordmark>
      </S.Box>
      <S.Box>
        <S.Container>
          <S.Title>Get in touch</S.Title>
          <S.Link href={L.Email} target='_blank'>
            {L.EmailText}
          </S.Link>
          <S.Title>Navigation</S.Title>
          <S.Links>
            <S.Link href='#home'>Home</S.Link>
            <S.Link href='#about'>About</S.Link>
            <S.Link href='#testimonials'>Testimonials</S.Link>
            <S.Link href='#schedule'>Book Call</S.Link>
          </S.Links>
        </S.Container>
        <S.Container>
          <S.Title>Contact Us</S.Title>
          <S.Links>
            <S.Link
              href={L.Twitter}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              rel='norefferer'
              target='_blank'
              icon
            >
              <Twitter />
            </S.Link>
            <S.Link
              href={L.Email}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              rel='norefferer'
              target='_blank'
              icon
            >
              <Mail />
            </S.Link>
            <S.Link
              href={L.YouTube}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              rel='norefferer'
              target='_blank'
              icon
            >
              <Youtube />
            </S.Link>
          </S.Links>
        </S.Container>
      </S.Box>
    </S.Footer>
  )
}

export default Footer
