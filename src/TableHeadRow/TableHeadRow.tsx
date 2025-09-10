import './TableHeadRow.scss'
import { type RowProps } from "../Row/Row";

export default function TableHeadRow({ firstCell, secondCell, thirdCell, fourthCell }: RowProps) {
    return (
        <tr className="headRow">
            <th className="headCell">{firstCell}</th>
            <th className="headCell">{secondCell}</th>
            <th className="headCell">{thirdCell}</th>
            <th className="headCell">{fourthCell}</th>
        </tr>
    )
}