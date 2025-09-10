import './Toggle.scss'
import { type ReactNode } from "react"

type ToggleProps = {
    state: boolean;
    setState: (state: boolean) => void;
    trueIcon: ReactNode;
    falseIcon: ReactNode;
}


export default function Toggle({ state, setState, trueIcon, falseIcon }: ToggleProps) {

    return (
        <button onClick={() => setState(!state)} className={'toggle ' + (state ? 'toggleTrue' : 'toggleFalse')}>
            <div className='iconContainer falseIcon'>
                {falseIcon}
            </div>
            <div className='iconContainer trueIcon'>
                {trueIcon}
            </div>

        </button>
    )
}