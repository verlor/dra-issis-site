import tw from 'twin.macro'

const styles = {
  h1: tw`font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl`,
  h4: tw`text-sm md:text-base font-normal text-gray-600`,
  p: tw`py-2`,
}

export const H1 = ({children}) => {
  return <h1 css={styles.h1}>{children}</h1>
}

export const H4 = ({children}) => {
  return <h4 css={styles.h4}>{children}</h4>
}

export const P = ({children}) => {
  return <p css={styles.p}>{children}</p>
}
