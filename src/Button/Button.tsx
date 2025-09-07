import './Button.scss'


type ButtonProps = {
    mode?: 'filled' | 'tinted' | 'plain' | 'elevated';
    size?: 'small' | 'medium' | 'large';
    onClick?: () => void
} & (
        | {
            composition: 'text';
            text: string;

        }
        | {
            composition: 'icon';
            icon: React.ReactElement<SVGSVGElement>;
        }
        | {
            composition: 'iconFirst' | 'textFirst';
            text: string;
            icon: React.ReactElement<SVGSVGElement>;
        }
    )

export default function Button(props: ButtonProps) {
    const { mode = 'tinted', size = 'medium', onClick, composition } = props;

    function renderContent() {
        switch (composition) {
            case 'icon':
                return props.icon;
            case 'text':
                return props.text;
            case 'iconFirst':
                return <>{props.icon}<span>{props.text}</span></>;
            case 'textFirst':
                return <><span>{props.text}</span>{props.icon}</>;
        }
    };

    return (
        <button className='ltButton' onClick={onClick} data-mode={mode} data-size={size} data-composition={composition}>
            {renderContent()}
        </button>
    );
