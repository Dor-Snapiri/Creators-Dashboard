import './CreatorCard.scss';
import Avatar, { type AavatarConfig } from '../Avatar/Avatar';
import Button from '../Button/Button';


type CreatorDetails = {
    name: {
        firstName: string;
        lastName: string;
    }
    age: number;
    city: string;
    state: string;
    email: string;
}

type CreatorCardProps = {
    details: CreatorDetails;
    urls?: string[]
    avatarConfig?: (
        | { type: 'image'; url: string }
        | { type: 'initials' }
        | { type: 'icon' }
    )
}

function Images({ urls, avatarConfig }: { urls: string[], avatarConfig: AavatarConfig }) {
    return (

        // if urls array is not empty, display up to the first 3 images provided. otherwise display 3 empty frames.
        <div className="images">
            {urls.length > 0 && urls.slice(0, 3).map((url, idx) => (
                <div className="imageFrame" key={idx} style={{ backgroundImage: `url(${url})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            ))}

            {urls.length === 0 && <>
                <div className="imageFrame"></div>
                <div className="imageFrame"></div>
                <div className="imageFrame"></div>
            </>}

            <div className='avatarWrapper'>
                <Avatar size="xxl" config={avatarConfig} />
            </div>
        </div>
    );
}

function Details({ name, age, city, state, email }: CreatorDetails) {

    return (
        <div className="detailsContainer">
            <div className="boldDetails">
                <div className="nameContainer">{name.firstName} {name.lastName}</div>
                <div className="ageLocationContainer">{age} | {city} {state}</div>
            </div>

            <div className="emailContainer">{email}</div>

            <Button composition="text" text="Details" />
        </div>
    );
}

export default function CreatorCard({ details, urls = [], avatarConfig = { type: 'icon' } }: CreatorCardProps) {

    let avatarConfigWithDetails: AavatarConfig;
    if (avatarConfig.type === 'initials') {
        avatarConfigWithDetails = {
            ...avatarConfig,
            firstName: details.name.firstName,
            lastName: details.name.lastName
        };
    } else {
        avatarConfigWithDetails = avatarConfig;
    }

    return (
        <div className="creatorCardContainer">
            <Images urls={urls} avatarConfig={avatarConfigWithDetails} />
            <Details {...details} />
        </div>
    );
}