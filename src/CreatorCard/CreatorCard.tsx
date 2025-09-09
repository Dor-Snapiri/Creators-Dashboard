import './CreatorCard.scss';
import { type AavatarConfig } from '../Avatar/Avatar';
import CoverImages from '../CoverImages/CoverImages';
import CreatorDetails, { type CreatorDetailsProps } from '../CreatorDetails/CreatorDetails';



type CreatorCardProps = {
    details: CreatorDetailsProps;
    coverUrls?: string[]
    avatarConfig?: (
        | { type: 'image'; url: string }
        | { type: 'initials' }
        | { type: 'icon' }
    )
}

export default function CreatorCard({ details, coverUrls = [], avatarConfig = { type: 'icon' } }: CreatorCardProps) {

    let avatarConfigWithDetails: AavatarConfig;

    switch (avatarConfig.type) {
        case 'initials':
            avatarConfigWithDetails = {
                ...avatarConfig,
                firstName: details.firstName,
                lastName: details.lastName
            };
            break;

        case 'icon':
        case 'image':
            avatarConfigWithDetails = avatarConfig;
            break;
    }

    return (
        <div className="creatorCardContainer">
            <CoverImages coverUrls={coverUrls} avatarConfig={avatarConfigWithDetails} />
            <CreatorDetails {...details} />
        </div>
    );
}