import tw from 'twin.macro'

const styles = {
  container: tw`container w-full md:max-w-3xl mx-auto pt-10`,
  inner: tw`w-full md:px-96 text-xl text-gray-800 leading-normal`,
}

export default function EntryLayout({children}){
  return (
    <div css={styles.container} >
      <div css={styles.inner}>
        {children}
      </div>
    </div>
  )
}