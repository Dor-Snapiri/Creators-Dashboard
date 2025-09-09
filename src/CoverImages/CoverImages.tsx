import Avatar, { type AavatarConfig } from '../Avatar/Avatar';
import './CoverImages.scss'

export default function CoverImages({ coverUrls, avatarConfig }: { coverUrls: string[], avatarConfig: AavatarConfig }) {
    return (

        // if urls array is not empty, display up to the first 3 images provided. otherwise display 3 empty frames.
        <div className="images">
            {coverUrls.length > 0
                ?  // At least 1 cover photo
                coverUrls.slice(0, 3).map((url, idx) => (
                    <div className="imageFrame" key={idx} style={{ backgroundImage: `url(${url})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                ))
                : // 0 cover photos
                <>
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
