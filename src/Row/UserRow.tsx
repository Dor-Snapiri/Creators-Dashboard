import Row from "./Row";
import { type CreatorDetailsProps } from "../CreatorDetails/CreatorDetails";
import Avatar from "../Avatar/Avatar";

type UserRowProps = (
    & Omit<CreatorDetailsProps, 'detailButtonOnClick'>
    & { onClick?: () => void }
);

export default function UserRow(props: UserRowProps) {
    return (
        <Row
            firstCell={
                <>
                    <Avatar size='sm' config={{ type: 'initials', firstName: props.firstName, lastName: props.lastName }} />
                    {`${props.firstName} ${props.lastName}`}
                </>
            }
            secondCell={props.email}
            thirdCell={props.age}
            fourthCell={`${props.city}, ${props.state}`}
            onClick={props.onClick}
        />
    )
}