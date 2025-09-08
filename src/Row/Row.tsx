import Avatar from "../Avatar/Avatar";
import "./Row.scss";

type RowProps = {
    name: { firstName: string; lastName: string };
    age: number;
    email: string;
    city: string;
    state: string;
}

export default function Row({ name, age, email, city, state }: RowProps) {
    return (
        <tr className="row">
            <td className="cell">
                <Avatar config={{ type: 'icon' }} size='sm' />
                {name.firstName} {name.lastName}
            </td>
            <td className="cell">{email}</td>
            <td className="cell">{age}</td>
            <td className="cell">{city}, {state}</td>
        </tr>
    )
}