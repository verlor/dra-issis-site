import { useContext } from 'react'
import xw from 'twin.macro'
import { NavContext } from './_app';
import {useStore} from '../stores'

export default function Home() {
  const theme = useContext(NavContext);
  const bears = useStore((state) => state.bears)
  const increasePopulation = useStore((state) => state.increasePopulation)
  return (
    <>
    <h1>ano we {bears} bears</h1>
    <button onClick={increasePopulation}>one up</button>
    </>
  )
}
