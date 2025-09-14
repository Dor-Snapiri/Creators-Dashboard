import "./Row.scss";

export type CellData = string | React.ReactNode;

export type RowProps = {
    // ordered left to right
    firstCell: CellData;
    secondCell: CellData;
    thirdCell: CellData;
    fourthCell: CellData;
    onClick?: () => void;
}

export default function Row({ firstCell, secondCell, thirdCell, fourthCell, onClick = () => { } }: RowProps) {
    return (
        <tr className="row" onClick={onClick}>
            <td className="cell">{firstCell}</td>
            <td className="cell">{secondCell}</td>
            <td className="cell">{thirdCell}</td>
            <td className="cell">{fourthCell}</td>
        </tr>
    )
}