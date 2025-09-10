import "./Row.scss";

export type CellData = string | React.ReactNode;

export type RowProps = {
    // ordered left to right
    firstCell: CellData;
    secondCell: CellData;
    thirdCell: CellData;
    fourthCell: CellData;
}

export default function Row({ firstCell, secondCell, thirdCell, fourthCell }: RowProps) {
    return (
        <tr className="row">
            <td className="cell">{firstCell}</td>
            <td className="cell">{secondCell}</td>
            <td className="cell">{thirdCell}</td>
            <td className="cell">{fourthCell}</td>
        </tr>
    )
}