import { useState } from 'react';
import './LHAvatar.scss'

export default function LHAvatar(props:
    { size: 'xxxs' | 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl' } & (
        { type: 'image'; imagePath: string } |
        { type: 'initials'; firstName: string; lastName: string } |
        { type: 'icon' }
    )
) {
    const [imageError, setImageError] = useState<boolean>(false);

    const iconVec = (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54 64" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M27 7.33334C21.4772 7.33334 17 11.8105 17 17.3333C17 22.8562 21.4772 27.3333 27 27.3333C32.5229 27.3333 37 22.8562 37 17.3333C37 11.8105 32.5229 7.33334 27 7.33334ZM10.3333 17.3333C10.3333 8.12859 17.7953 0.666672 27 0.666672C36.2048 0.666672 43.6667 8.12859 43.6667 17.3333C43.6667 26.5381 36.2048 34 27 34C17.7953 34 10.3333 26.5381 10.3333 17.3333ZM11.8536 46.4215C8.33948 47.9819 7.00001 49.9527 7.00001 52.3333C7.00001 53.0788 7.13254 53.5007 7.32427 53.8065C7.51612 54.1126 7.97381 54.6309 9.20731 55.1889C11.8438 56.3817 17.0536 57.3333 27 57.3333C36.9464 57.3333 42.1563 56.3817 44.7927 55.1889C46.0262 54.6309 46.4839 54.1126 46.6757 53.8065C46.8675 53.5007 47 53.0788 47 52.3333C47 49.9527 45.6605 47.9819 42.1464 46.4215C38.5381 44.8192 33.2405 44 27 44C20.7595 44 15.4619 44.8192 11.8536 46.4215ZM9.14806 40.3285C13.9848 38.1808 20.3539 37.3333 27 37.3333C33.6461 37.3333 40.0152 38.1808 44.852 40.3285C49.7828 42.5181 53.6667 46.3806 53.6667 52.3333C53.6667 53.889 53.3825 55.6594 52.3243 57.3475C51.2661 59.0355 49.6405 60.3129 47.5406 61.2629C43.5104 63.0862 37.0536 64 27 64C16.9464 64 10.4896 63.0862 6.45937 61.2629C4.35954 60.3129 2.7339 59.0355 1.67575 57.3475C0.61748 55.6594 0.333344 53.889 0.333344 52.3333C0.333344 46.3806 4.21722 42.5181 9.14806 40.3285Z" fill="#A3A6AC" fillOpacity="0.48" />
            <path d="M7.00001 52.3333C7.00001 49.9527 8.33948 47.9819 11.8536 46.4215C15.4619 44.8192 20.7595 44 27 44C33.2405 44 38.5381 44.8192 42.1464 46.4215C45.6605 47.9819 47 49.9527 47 52.3333C47 53.0788 46.8675 53.5007 46.6757 53.8065C46.4839 54.1126 46.0262 54.6309 44.7927 55.1889C42.1563 56.3817 36.9464 57.3333 27 57.3333C17.0536 57.3333 11.8438 56.3817 9.20731 55.1889C7.97381 54.6309 7.51612 54.1126 7.32427 53.8065C7.13254 53.5007 7.00001 53.0788 7.00001 52.3333Z" fill="#A3A6AC" fillOpacity="0.48" />
            <path d="M17 17.3333C17 11.8105 21.4772 7.33334 27 7.33334C32.5229 7.33334 37 11.8105 37 17.3333C37 22.8562 32.5229 27.3333 27 27.3333C21.4772 27.3333 17 22.8562 17 17.3333Z" fill="#A3A6AC" fillOpacity="0.48" />
        </svg>
    );

    let avatarNode: React.ReactNode;
    if (props.type === 'image' && props.imagePath && !imageError) {
        avatarNode = <img
            className="avatarImage"
            src={props.imagePath}
            alt="avatar"
            onError={() => setImageError(true)}
        />;
    } else if (props.type === 'initials' && props.firstName && props.lastName) {
        const initials = `${props.firstName[0]}${props.lastName[0]}`.toUpperCase();
        avatarNode = <div className="avatarInitials">{initials}</div>;
    } else {
        avatarNode = <div className="avatarIcon">{iconVec}</div>;
    }


    return (
        <div className={`avatarWrapper avatarWrapper--${props.size}`}>
            {avatarNode}
        </div>
    )
}