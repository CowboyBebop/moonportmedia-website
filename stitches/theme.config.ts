import { createStitches } from '@stitches/react'

export const { css, styled, globalCss, getCssText, keyframes, createTheme } =
  createStitches({
    theme: {
      colors: {
        bg: '#0B1120',
        main: '#0EA5E9',
        secondary: '#94A3B8',
        primary: '#FFFFFF',
        fg: '#1E293B',
        fgText: '#CBD5E1',
        fgSecondary: '#94A3B8',
      },
      fontSizes: {
        1: '14px',
        2: '18px',
        3: '20px',
        4: '24px',
        5: '36px',
        6: '48px',
      },
      fonts: {
        main: 'Lexend, sans-serif',
      },
    },
    media: {
      iPadPro: '(max-width: 1024px)',
      iPad: '(max-width: 768px)',
      iPhonePlus: '(max-width: 425px)',
      iPhone: '(max-width: 375px)',
      iPhoneSE: '(max-width: 320px)',
    },
  })
