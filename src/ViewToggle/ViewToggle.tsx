import './ViewToggle.scss'
import { type ReactNode } from "react"
import useCreatorDashboard from '../useCreatorsDashboard'

type ViewToggleProps = {
    listIcon: ReactNode;
    gridIcon: ReactNode;
}

export default function ViewToggle({ listIcon, gridIcon }: ViewToggleProps) {
    const { view, toggleView } = useCreatorDashboard();

    const isListView = view === 'list';

    return (
        <button
            onClick={toggleView}
            className={`viewToggle ${isListView ? 'viewToggleList' : 'viewToggleGrid'}`}
        >
            <div className='iconContainer gridIcon'>
                {gridIcon}
            </div>
            <div className='iconContainer listIcon'>
                {listIcon}
            </div>
        </button>
    )
}
