import tw from 'twin.macro'
import Header from './Header'
import Footer from './Footer'

const styles = {
  container: tw`w-full h-screen`,
}

export default function Layout({ children }) {
  return (
    <div css={styles.container}>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}