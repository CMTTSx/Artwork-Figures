import { Html, Head, Main, NextScript } from 'next/document'
export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        {/*SLACKEY FONT*/}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link href="https://fonts.googleapis.com/css2?family=Slackey&display=swap" rel="stylesheet" />
      {/*SCHEHERAZADE*/}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Scheherazade+New:wght@400;700&family=Slackey&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}