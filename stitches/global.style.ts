import { globalCss } from './theme.config'

const globalStyle = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    scrollBehavior: 'smooth',
  },
  'html, body': {
    background: '$bg !important',
    overflowX: 'hidden',
    fontFamily: '$main',
  },
  'input, textArea, button, select': {
    fontFamily: '$main',
  },
  '::selection': {
    background: '$primary',
    color: '$bg',
  },
  img: {
    userSelect: 'none',
  },
  '::-webkit-scrollbar': {
    width: 10,
  },
  '::-webkit-scrollbar-track': {
    background: 'transparent',
  },
  '::-webkit-scrollbar-thumb': {
    background: '$main',
  },
  'iframe html, iframe body': {
    background: 'red !important',
  },
})

export default globalStyle
