import { montserrat } from '@/utils/fonts'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" style={
      {
        scrollBehavior: 'smooth',
      }
    }>
      <Head />
      <body className={`${montserrat.className}`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
