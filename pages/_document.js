import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import JssProvider from 'react-jss/lib/JssProvider'
import getContext from '../styles/getContext'
import theme from './../theme'

class MyDocument extends Document {
  render () {
    return (
      <html>
        <Head>
          <link href='https://cdn.sendit.asia/fonts/hk-grotesk/500;500italic;700;700italic.css' rel='stylesheet' />
          <link href='http://github.sendit.asia/sendicon2/style.css' rel='stylesheet' />
          <script src='https://maps.googleapis.com/maps/api/js?key=AIzaSyB5GIMx6LCTLK-qCOE-lf69oVeGKlZd1i4' />
          {this.props.styleTags}
        </Head>
        <body
          style={{
            margin: 0,
            fontFamily: 'hk-grotesk',
            backgroundColor: `${theme().color.foreground}`,
            WebkitFontSmoothing: 'antialiased',
            MozOsxFontSmoothing: 'grayscale'
          }}>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

MyDocument.getInitialProps = ctx => {
  const context = getContext()
  const sheet = new ServerStyleSheet()
  // const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
  const page = ctx.renderPage(Component => props => {
    return sheet.collectStyles(
      <JssProvider registry={context.sheetsRegistry} jss={context.jss}>
        <Component {...props} />
      </JssProvider>
    )
  })
  const styleTags = sheet.getStyleElement()

  return {
    styleTags,
    ...page,
    stylesContext: context,
    styles: (
      <style
        id='jss-server-side'
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: context.sheetsRegistry.toString() }}
      />
    )
  }
}

export default MyDocument
