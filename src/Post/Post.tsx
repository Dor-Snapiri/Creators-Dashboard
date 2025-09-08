import './Post.scss'
import Avatar from '../Avatar/Avatar';
import ArrowIcon from '../assets/ArrowForwardIcon.svg?react';
import { useState } from 'react';

type CommentProps = {
    name: { firstName: string; lastName: string };
    content: string;
}

type PostProps = {
    url: string;
    comments: CommentProps[];
}

export default function Post({ url, comments }: PostProps) {
    const [isToggled, setIsToggled] = useState<boolean>(false);

    return (
        <div className="container">

            <div className="post">
                <img src={url} alt="post" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />

                <button className="commentToggle" onClick={() => setIsToggled(!isToggled)}>
                    <span className='postText'> {isToggled ? 'Hide' : 'View'} {comments.length} comments </span>
                    <ArrowIcon className={isToggled ? 'down' : 'forward'} />
                </button>
            </div>

            <div className="commentContainer">
                {isToggled && comments.map((comment, idx) => (
                    <div className="comment" key={idx}>
                        <Avatar
                            size="sm"
                            config={{
                                type: 'initials',
                                firstName: comment.name.firstName,
                                lastName: comment.name.lastName
                            }}
                        />
                        <span className="postText">{comment.content}</span>
                    </div>
                ))}

            </div>
        </div>
    )
}