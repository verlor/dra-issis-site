import Layout from "../components/Layout"
import GlobalStyles from '../styles/GlobalStyles'
import { MDXProvider } from '@mdx-js/react'
import {H1, H4, P} from '../components/CustomMDX'

const components = {
  h1: H1,
  h4: H4,
  p: P,
}

function MyApp({ Component, pageProps }) {
  return (
    <MDXProvider components={components}>
      <Layout>
        <GlobalStyles />
        <Component {...pageProps} />
      </Layout>
    </MDXProvider>
  )
}

export default MyApp
