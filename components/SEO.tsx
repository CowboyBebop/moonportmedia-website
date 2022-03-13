import Head from 'next/head'
import React from 'react'

const SEO: React.FC = () => {
  return (
    <Head>
      <title>Moonport Media</title>
      <meta property='og:title' content='Moonport Media' />
      <meta property='twitter:title' content='Moonport Media' />
      <meta
        name='description'
        content='Hey there! We’re Moonport Media, and we work together with creators across a wide variety of platforms to help upscale their content and channel growth by brainstorming, analysing identifying and strengthening weak points.'
      />
      <meta
        property='og:description'
        content='Hey there! We’re Moonport Media, and we work together with creators across a wide variety of platforms to help upscale their content and channel growth by brainstorming, analysing identifying and strengthening weak points.'
      />
      <meta
        property='twitter:description'
        content='Hey there! We’re Moonport Media, and we work together with creators across a wide variety of platforms to help upscale their content and channel growth by brainstorming, analysing identifying and strengthening weak points.'
      />
      <meta property='og:type' content='website' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta name='theme-color' content='#0EA5E9' />
      <link rel='icon' href='/iconDark.png' />
    </Head>
  )
}

export default SEO
