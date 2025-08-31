import './LTButton.scss'

// TODO go over and polish this one + add css

export default function LTButton(props:
    {
        appearance?: 'brand' | 'neutral' | 'overlay' | 'danger';
        mode?: 'filled' | 'tinted' | 'plain' | 'elevated';
        size?: 'small' | 'medium' | 'large';
        text?: string;
        icon?: React.ReactElement<SVGSVGElement>;
        composition: 'text' | 'icon' | 'iconFirst' | 'textFirst';
        onClickCallback?: () => void
    }
) {
    // Generate dynamic CSS classes based on props
    function generateButtonClasses() {
        const baseClass = 'ltButton';
        const appearanceClass = props.appearance ? `ltButton--${props.appearance}` : '';
        const modeClass = props.mode ? `ltButton--${props.mode}` : '';
        const sizeClass = props.size ? `ltButton--${props.size}` : '';
        const compositionClass = props.composition ? `ltButton--${props.composition}` : '';

        return [baseClass, appearanceClass, modeClass, sizeClass, compositionClass]
            .filter(Boolean) // filter out any falsy values
            .join(' ');
    }

    // Handle icon and text rendering based on composition
    function renderContent() {
        const defaultIcon = (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                <path d="M1.71423 5.14293C1.71423 3.24938 3.24926 1.71436 5.14281 1.71436H18.8571C20.7506 1.71436 22.2857 3.24938 22.2857 5.14293V18.8572C22.2857 20.7508 20.7506 22.2858 18.8571 22.2858H5.14281C3.24926 22.2858 1.71423 20.7508 1.71423 18.8572V5.14293Z" fill="#161719" />
            </svg>
        );

        if (props.composition === 'icon') {
            return props.icon ? props.icon : defaultIcon;
        }
        if (props.composition === 'text') {
            return props.text ? props.text : "";
        }
        if (props.composition === 'iconFirst') {
            return (
                <>
                    {props.icon ? props.icon : defaultIcon}
                    <span>{props.text ? props.text : ""}</span>
                </>
            );
        }
        if (props.composition === 'textFirst' && props.text && props.icon) {
            return (
                <>
                    <span>{props.text ? props.text : ""}</span>
                    {props.icon ? props.icon : defaultIcon}
                </>
            );
        }
        return props.text || props.icon;
    };

    return (
        <button className={generateButtonClasses()} onClick={props.onClickCallback}>
            {renderContent()}
        </button>
    );
}