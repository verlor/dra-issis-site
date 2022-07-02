import { createContext } from "react"
import Layout from "../components/Layout"

const navigation = {
  current: 'home'
}

export const NavContext = createContext(navigation)

function MyApp({ Component, pageProps }) {
  return (
    <NavContext.Provider value={navigation}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NavContext.Provider>
  )
}

export default MyApp
