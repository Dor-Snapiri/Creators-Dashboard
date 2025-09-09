import './Post.scss'
import ArrowIcon from '../assets/ArrowForwardIcon.svg?react';
import { useState } from 'react';

type CommentProps = {
    leftIcon: React.ReactNode;
    content: string;
}

type PostProps = {
    coverPhotoUrl: string;
    comments: CommentProps[];
}

export default function Post({ coverPhotoUrl, comments }: PostProps) {
    const [isToggled, setIsToggled] = useState<boolean>(false);

    return (
        <div className="container">

            <div className="post">
                <img src={coverPhotoUrl} alt="post photo" />

                <button className="commentToggle" onClick={() => setIsToggled(!isToggled)}>
                    <span className='postText'> {isToggled ? 'Hide' : 'View'} {comments.length} comments </span>
                    <ArrowIcon className={isToggled ? 'down' : 'forward'} />
                </button>
            </div>

            <div className="commentContainer">
                {isToggled && comments.map((comment, idx) => (
                    <div className="comment" key={idx}>
                        <div className="leftIconContainer">{comment.leftIcon}</div>
                        <span className="postText">{comment.content}</span>
                    </div>
                ))}

            </div>
        </div>
    )
}