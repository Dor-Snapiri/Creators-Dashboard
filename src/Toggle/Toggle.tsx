import './Toggle.scss'
import { useState } from "react"
import GridViewIcon from '../assets/gridViewIcon.svg?react';
import ListViewIcon from '../assets/listViewIcon.svg?react';

type ToggleState = 'grid' | 'list';


export default function Toggle() {
    const [toggleState, setToggleState] = useState<ToggleState>('grid');

    const handleToggle = () => setToggleState((toggleState === 'grid') ? 'list' : 'grid');

    return (
        <button onClick={handleToggle} className={'toggle toggle' + ((toggleState === 'grid') ? 'Grid' : 'List')}>
            <div className='iconContainer grid'>
                <GridViewIcon />
            </div>
            <div className='iconContainer list'>
                <ListViewIcon />
            </div>

        </button>
    )
}