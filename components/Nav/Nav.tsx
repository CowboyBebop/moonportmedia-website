import React from 'react'

import * as S from './Nav.style'
import { FadeContainer, FadeReverse, Image } from '@anims/index'
import Toggle from './Toggle'
import { useTheme } from 'next-themes'

const Nav: React.FC = () => {
  const { theme, setTheme } = useTheme()
  const [src, setSrc] = React.useState('iconDark')

  React.useEffect(() => {
    setSrc(theme === 'dark' ? 'iconDark' : 'iconLight')
  }, [theme, setTheme])

  return (
    <S.Nav variants={FadeContainer} initial='hidden' animate='visible'>
      <S.LogoContainer>
        <S.Logo
          src={`/${src}.png`}
          alt='logo'
          draggable='false'
          variants={Image}
        />
        <S.Wordmark variants={FadeReverse}>Moonport Media</S.Wordmark>
      </S.LogoContainer>
      <Toggle />
    </S.Nav>
  )
}

export default Nav
