import './SearchPage.scss'
import LightricksLogo from '../../assets/LightricksLogo.svg?react';
import Avatar from '../../Avatar/Avatar';
import type { CreatorDetailsProps } from '../../CreatorDetails/CreatorDetails';
import SearchField from '../../SearchField/SearchField';
import { useState } from 'react';
import Toggle from '../../Toggle/Toggle';
import ListIcon from '../../assets/listViewIcon.svg?react';
import GridIcon from '../../assets/gridViewIcon.svg?react';
import UserRow from '../../Row/UserRow';
import CreatorCard from '../../CreatorCard/CreatorCard';
import TableHeadRow from '../../TableHeadRow/TableHeadRow';

type SearchPageProps = {
    userFirstName: string;
    userLastName: string;
    creators: Map<number, Omit<CreatorDetailsProps, 'detailButtonOnClick'>>;
}

export default function SearchPage({ userFirstName, userLastName, creators }: SearchPageProps) {
    const [toggleState, setToggleState] = useState<boolean>(false);

    const goToCreatorPage = (id: number) => {
        // ROUTING TO BE IMPLEMENTED
    }

    return (
        <div className='searchPage'>
            <header>
                <LightricksLogo className='logo' />
                <Avatar config={{ type: 'initials', firstName: userFirstName, lastName: userLastName }} size='md' />
            </header>

            <div className="content">
                <div className="pageHeader">
                    Search Users
                    <SearchField />
                </div>

                <div className="filterAndSort">
                    <div className="filtersContainer">
                        Filter by:
                        <button className="chip">Cities</button>
                        <button className="chip">Age</button>
                    </div>

                    <div className="viewsContainer">
                        {creators.size} results
                        <Toggle
                            state={toggleState}
                            setState={setToggleState}
                            falseIcon={<GridIcon />}
                            trueIcon={<ListIcon />}
                        />
                    </div>
                </div>

                <div className="creatorsContainer">
                    {toggleState ? (
                        <table className="creatorsList">
                            <thead>
                                <TableHeadRow firstCell="Name" secondCell="Email" thirdCell="Age" fourthCell="Location" />
                            </thead>
                            <tbody>
                                {[...creators].map(([id, creator]) => (
                                    <UserRow key={id} {...creator} onClick={() => goToCreatorPage(id)} />
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <div className="creatorsGrid">
                            {Array.from(creators.values()).map((creator, idx) => (
                                <CreatorCard
                                    key={Array.from(creators.keys())[idx]}
                                    details={{
                                        ...creator,
                                        detailButtonOnClick: () => goToCreatorPage(Array.from(creators.keys())[idx])
                                    }}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div >
    )
}