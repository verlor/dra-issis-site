import tw from 'twin.macro'
import Link from 'next/link'

const styles = {
  container: '',
  center: tw`flex items-center justify-center`,
  inner: tw`max-w-3xl px-2 py-16 mx-auto`,
  text: tw`items-center md:flex md:space-x-6`,
  h3: tw`text-2xl font-semibold text-gray-800`,
  p: tw`max-w-md mt-4 text-gray-600 text-justify`,
  a: tw`block mt-8 text-indigo-700 underline`,
  img: tw`object-cover object-center w-full rounded-md shadow hover:(transform translate-y--1)`,
  blockquote: tw`border-l-4 border-green-500 italic my-8 pl-8 md:pl-12`,
}

export default function Main() {
  return (
    <>
      <section css={styles.container}>
        <div css={styles.inner}>
          <div css={styles.text}>
            <div css={tw`md:w-1/2`}>
              <h3 css={styles.h3}>Acerca</h3>
              <p css={styles.p}>
                Romero Ibarra es Maestra y Doctora en
                Ciencias Químicas y ha graduado a varios
                estudiantes de posgrado, cuatro de los
                cuales han obtenido mención honorífica
                y un galardón en el “Intercovamex
                Award to the best Master Degree”
              </p>
              {/* <p css={styles.p}>
              Titular del Laboratorio de Síntesis
                Química y del grupo de trabajo
                multidisciplinario Materiales Avanzados
                para Tecnologías con aplicaciones en
                Energía y Medioambiente (MATEA) de
                UPIITA, la investigadora politécnica
                afirmó que desde que somos bebés
                todos exploramos de manera tenaz
                el funcionamiento del mundo que
                nos rodea y eso es algo que ella no
                ha perdido, pues constantemente
                persigue esa curiosidad científica por los
                fenómenos naturales.</p> */}
              <Link href="/about">
                <a css={styles.a}>Continuar leyendo</a>
              </Link>
            </div>

            <div css={tw`mt-8 md:mt-0 md:w-1/2`}>
              <div css={styles.center}>
                <div css={tw`max-w-md`}>
                  <img css={styles.img}
                    src="./imgs/issis_romero.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}