import LHAvatar from "./LHAvatar/LHAvatar"
import LTButton from "./LTButton/LTButton";
import './CreatorCard.css'

function Images() {
    return (
        <div className="images">
            <div className="imageFrame"></div>
            <div className="imageFrame"></div>
            <div className="imageFrame"></div>

            <LHAvatar size="xxl" type="icon" />
        </div>
    );
}

function Details({ name, age, city, state, email }: { name: { firstName: string, lastName: string }, age: number, city: string, state: string, email: string }) {
    return (
        <div className="detailsContainer">
            <div className="boldDetails">
                <div className="nameContainer">{name.firstName} {name.lastName}</div>
                <div className="ageLocationContainer">{age} | {city} {state}</div>
            </div>

            <div className="emailContainer">{email}</div>

            <LTButton composition="text" text="Details" onClickCallback={() => { }} />
        </div>
    );
}

export default function CreatorCard() {
    return (
        <div className="creatorCardContainer">
            <Images />
            <Details
                name={{ firstName: "Emily", lastName: "Johnson" }}
                age={34}
                city="Chicago"
                state="IL"
                email="email@x.dummyjson.com"
            />
        </div>
    );
}