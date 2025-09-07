import './Avatar.scss'
import AvatarIcon from '../assets/defaultAvatarIcon.svg?react'


type Size = 'xxxs' | 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';
export type AavatarConfig =
    | { type: 'image'; url: string }
    | { type: 'initials'; firstName: string; lastName: string }
    | { type: 'icon' };

type AvatarProps = { size: Size, config: AavatarConfig }



export default function Avatar({ size, config }: AvatarProps) {
    let content: React.ReactNode;

    switch (config.type) {
        case 'image':
            content = <img
                className="image"
                src={config.url}
                alt="avatar"
            />;
            break;
        case 'initials':
            const initials = `${config.firstName[0]}${config.lastName[0]}`.toUpperCase();
            content = <div className="initials" data-size={size}>{initials}</div>;
            break;
        case 'icon':
            content = <div className="icon"><AvatarIcon /></div>;
            break;
    }

    return (
        <div className={'container'} data-size={size}>
            {content}
        </div>
    )
}