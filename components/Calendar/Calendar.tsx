import React from 'react'
import { InlineWidget } from 'react-calendly'

import * as S from './Calendar.style'
import { Fade, FadeContainer } from '@anims/index'
import { motion } from 'framer-motion'

import { useTheme } from 'next-themes'

const Calendar: React.FC = () => {
  const { theme, setTheme } = useTheme()
  const [dark, setDark] = React.useState(true)

  React.useEffect(() => {
    setDark(theme === 'dark')
  }, [theme, setTheme])

  return (
    <S.Container
      id='schedule'
      variants={FadeContainer}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
    >
      <S.Title variants={Fade}>
        Schedule an <span>Appointment</span>
        <Arrow />
      </S.Title>
      
      <div style={{display: 'flex', "justify-content":"center"}}>

        <motion.div variants={Fade}>
          {dark ? (
            <InlineWidget
              url='https://calendly.com/ryker-yt/youtube-consultation'
              pageSettings={{
                backgroundColor: '1e293b',
                hideEventTypeDetails: false,
                hideLandingPageDetails: false,
                hideGdprBanner: true,
                primaryColor: '0ea5e9',
                textColor: 'c6d1dc',
              }}
              styles={{
                width: '70vw',
                minWidth: 320,
                height: 700,
                overflow: 'hidden !important',
                borderRadius: 20,
                padding: 0,
              }}
            />
          ) : (
            <InlineWidget
              url='https://calendly.com/ryker-yt/youtube-consultation'
              pageSettings={{
                backgroundColor: 'E5E8EC',
                hideEventTypeDetails: false,
                hideLandingPageDetails: false,
                hideGdprBanner: true,
                primaryColor: '0ea5e9',
                textColor: '0F172A',
              }}
              styles={{
                width: '70vw',
                minWidth: 320,
                height: 700,
                overflow: 'hidden !important',
                borderRadius: 20,
                padding: 0,
              }}
            />
          )}
        </motion.div>
        <motion.div variants={Fade}>
        {dark ? (
          <InlineWidget
            url='https://calendly.com/ryker-yt/youtube-consultation'
            pageSettings={{
              backgroundColor: '1e293b',
              hideEventTypeDetails: false,
              hideLandingPageDetails: false,
              hideGdprBanner: true,
              primaryColor: '0ea5e9',
              textColor: 'c6d1dc',
            }}
            styles={{
              width: '70vw',
              minWidth: 320,
              height: 700,
              overflow: 'hidden !important',
              borderRadius: 20,
              padding: 0,
            }}
          />
        ) : (
          <InlineWidget
            url='https://calendly.com/ryker-yt/youtube-consultation'
            pageSettings={{
              backgroundColor: 'E5E8EC',
              hideEventTypeDetails: false,
              hideLandingPageDetails: false,
              hideGdprBanner: true,
              primaryColor: '0ea5e9',
              textColor: '0F172A',
            }}
            styles={{
              width: '70vw',
              minWidth: 320,
              height: 700,
              overflow: 'hidden !important',
              borderRadius: 20,
              padding: 0,
            }}
          />
        )}
        </motion.div> 
      </div>
    </S.Container>
  )
}

const Arrow: React.FC = () => {
  return (
    <S.Arrow
      width='125'
      height='200'
      viewBox='0 0 134 203'
      fill='currentColor'
      xmlns='http://www.w3.org/2000/svg'
      variants={Fade}
    >
      <path
        d='M3 0C1.61929 0 0.5 1.11929 0.5 2.5C0.5 3.88071 1.61929 5 3 5V0ZM56.5 127L80.6565 111.195L54.8907 98.1774L56.5 127ZM80.5 28L82.837 27.112L82.837 27.112L80.5 28ZM3 5C19.3094 5 36.0157 5.13639 49.8145 8.31134C63.5884 11.4806 73.8457 17.5265 78.163 28.888L82.837 27.112C77.6543 13.4735 65.4117 6.76943 50.9356 3.43866C36.4845 0.113612 19.1908 0 3 0V5ZM78.163 28.888C80.6381 35.4014 80.6675 46.8133 78.2233 60.8022C75.8028 74.6555 71.0358 90.6022 64.3565 105.915L68.9395 107.914C75.7667 92.2621 80.6551 75.9342 83.1487 61.6628C85.6185 47.5269 85.8206 34.9636 82.837 27.112L78.163 28.888Z'
        fill='currentColor'
      />
    </S.Arrow>
  )
}

export default Calendar
