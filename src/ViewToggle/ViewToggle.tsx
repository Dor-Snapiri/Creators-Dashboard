import './ViewToggle.scss';
import GridIcon from '../assets/gridViewIcon.svg?react';
import ListIcon from '../assets/listViewIcon.svg?react';

import useCreatorDashboard from '../useCreatorsDashboard'

export default function ViewToggle() {
    const { view, toggleView } = useCreatorDashboard();

    return (
        <button
            onClick={toggleView}
            className={`viewToggle ${view === 'list' ? 'viewToggleList' : 'viewToggleGrid'}`}
        >
            <div className='iconContainer gridIcon'>
                <GridIcon />
            </div>
            <div className='iconContainer listIcon'>
                <ListIcon className='iconContainer listIcon' />
            </div>
        </button>
    )
}
