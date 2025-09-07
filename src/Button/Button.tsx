import './Button.scss'
import type { ReactNode } from 'react'
import PlaceholderIcon from '../assets/Placeholder.svg?react'

type ButtonProps = {
    mode?: 'filled' | 'tinted' | 'plain' | 'elevated';
    size?: 'small' | 'medium' | 'large';
    icon?: React.ReactElement<SVGSVGElement>;
    composition: 'text' | 'icon' | 'iconFirst' | 'textFirst';
    children?: ReactNode;
    onClick?: () => void
}

export default function Button({ mode = 'tinted', size = 'medium', icon = <PlaceholderIcon />, composition = 'text', children, onClick }: ButtonProps) {

    // Handle icon and text rendering based on composition
    function renderContent() {
        switch (composition) {
            case 'icon':
                return icon;
            case 'text':
                return children;
            case 'iconFirst':
                return <>{icon}<span>{children}</span></>;
            case 'textFirst':
                return <><span>{children}</span>{icon}</>;
        }
    };

    return (
        <button className='ltButton' onClick={onClick} data-mode={mode} data-size={size} data-composition={composition}>
            {renderContent()}
        </button>
    );
}