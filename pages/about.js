import xw from 'twin.macro'

const base = xw`relative flex justify-center w-64 min-w-full px-4 py-2 text-sm font-medium leading-5 text-white border border-transparent rounded-md `;

export default function About(){
    return(
        <div css={xw`grid items-center justify-center h-screen`} >
            <button css={base}>Emotion + Tailwind</button>
        </div>
    )
}