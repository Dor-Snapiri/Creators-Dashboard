import './CreatorDetails.scss'
import Button from '../Button/Button';

export type CreatorDetailsProps = {
    firstName: string;
    lastName: string;
    age: number;
    city: string;
    state: string;
    email: string;
}

export default function CreatorDetails({ firstName, lastName, age, city, state, email }: CreatorDetailsProps) {

    return (
        <div className="detailsContainer">
            <div className="boldDetails">
                <div className="nameContainer">{firstName} {lastName}</div>
                <div className="ageLocationContainer">{age} | {city} {state}</div>
            </div>

            <div className="emailContainer">{email}</div>

            <Button composition="text" text="Details" />
        </div>
    );
}