import React, { Component } from 'react'
import { withStyles, MuiThemeProvider } from 'material-ui/styles'
import wrapDisplayName from 'recompose/wrapDisplayName'
import { Provider } from 'mobx-react'
import stores from '../stores'

import getContext from '../styles/getContext'

// Apply some reset

const styles = theme => ({})

let AppWrapper = props => props.children

AppWrapper = withStyles(styles)(AppWrapper)

function withRoot (BaseComponent) {
  class WithRoot extends Component {
    static getInitialProps (ctx) {
      if (BaseComponent.getInitialProps) {
        return BaseComponent.getInitialProps(ctx)
      }

      return {}
    }

    componentWillMount () {
      this.styleContext = getContext()
    }

    componentDidMount () {
      // Remove the server-side injected CSS.
      const jssStyles = document.querySelector('#jss-server-side')
      if (jssStyles && jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles)
      }
    }

    render () {
      if (process.browser) {
        window.stores = stores
      }
      return (
        <Provider {...stores} >
          <MuiThemeProvider theme={this.styleContext.theme} sheetsManager={this.styleContext.sheetsManager}>
            <AppWrapper>
              <BaseComponent {...this.props} />
            </AppWrapper>
          </MuiThemeProvider>
        </Provider >
      )
    }
  }

  if (process.env.NODE_ENV !== 'production') {
    WithRoot.displayName = wrapDisplayName(BaseComponent, 'withRoot')
  }

  return WithRoot
}

export default withRoot
