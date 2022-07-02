import tw from 'twin.macro'
import xw from 'twin.macro'
import React from 'react'

const base = xw`relative flex justify-center w-64 min-w-full px-4 py-2 text-sm font-medium leading-5 text-white border border-transparent rounded-md `;

const styles = {
  container: tw`bg-indigo-500 w-full h-screen`,
}

export default function Layout({ children }) {
  return (
    <div css={styles.container}>
      <nav>
        nav
      </nav>
      <main>
        {children}
      </main>
      <footer>
        foot
      </footer>
    </div>
  )
}