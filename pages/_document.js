import { Html, Head, Main, NextScript } from 'next/document'
import tw from 'twin.macro'

export default function Document() {
  return (
    <Html>
      <Head/>
      <body css={tw`m-0`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
