import './SearchPage.scss'
import LightricksLogo from '../../assets/LightricksLogo.svg?react';
import Avatar from '../../Avatar/Avatar';
import type { CreatorDetailsProps } from '../../CreatorDetails/CreatorDetails';
import SearchField from '../../SearchField/SearchField';
import { useState, useMemo } from 'react';
import ViewToggle from '../../ViewToggle/ViewToggle';
import useCreatorDashboard from '../../useCreatorsDashboard';
import UserRow from '../../Row/UserRow';
import CreatorCard from '../../CreatorCard/CreatorCard';
import TableHeadRow from '../../TableHeadRow/TableHeadRow';

type CreatorInfo = Omit<CreatorDetailsProps, 'detailButtonOnClick'>

type CreatorsMap = Map<string, CreatorInfo>

type SearchPageProps = {
    userFirstName: string;
    userLastName: string;
    creators: CreatorsMap;
}

export default function SearchPage({ userFirstName, userLastName, creators }: SearchPageProps) {
    const { view } = useCreatorDashboard();
    const [searchQuery, setSearchQuery] = useState<string>('');

    // Only re - render filtered creators when either the creators db or the search query changes
    const filteredCreators = useMemo(() => {
        if (!searchQuery.trim()) {
            return creators;
        }

        return new Map<string, Omit<CreatorDetailsProps, 'detailButtonOnClick'>>(
            Array.from(creators.entries()).filter(([id, creator]) => {
                const fullName = `${creator.firstName} ${creator.lastName}`.toLowerCase();
                return fullName.includes(searchQuery.toLowerCase().trim());
            })
        );
    }, [creators, searchQuery]);

    return (
        <div className='searchPage'>
            <header>
                <LightricksLogo className='logo' />
                <Avatar config={{ type: 'initials', firstName: userFirstName, lastName: userLastName }} size='md' />
            </header>

            <div className="content">
                <div className="pageHeader">
                    Search Users
                    <SearchField onChange={setSearchQuery} />
                </div>

                <div className="filterAndSort">
                    <div className="filtersContainer">
                        Filter by:
                        <button className="chip">Cities</button>
                        <button className="chip">Age</button>
                    </div>

                    <div className="viewsContainer">
                        {creators.size} results
                        <ViewToggle />
                    </div>
                </div>

                <div className="creatorsContainer">
                    {view === 'list' ? (
                        <table className="creatorsList">
                            <thead>
                                <TableHeadRow firstCell="Name" secondCell="Email" thirdCell="Age" fourthCell="Location" />
                            </thead>
                            <tbody>
                                {[...filteredCreators].map(([id, creator]) => (
                                    <UserRow key={id} {...creator} />
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <div className="creatorsGrid">
                            {Array.from(filteredCreators.entries()).map(([id, creator]) => (
                                <CreatorCard
                                    key={id}
                                    details={{
                                        ...creator
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