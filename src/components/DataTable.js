import "./Table.css";

const DataTable = ({ data, column }) => {
    return (
        <div className="table-wrapper">
            <table>
                <thead>
                    <tr>
                        {column.map((item) => (
                            <TableHeadItem item={item} />
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <TableRow item={item} column={column} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

const TableHeadItem = ({ item }) => <th>{item.heading}</th>;
const TableRow = ({ item, column }) => (
    <tr>
        {column.map((columnItem, index) => {
            return (
                <td key={index}>
                    {columnItem.value !== undefined && item[`${columnItem.value}`]}{" "}
                    {columnItem.btn !== undefined && (
                        <button className="btn btn_enquiry">{columnItem.btn}</button>
                    )}{" "}
                    {columnItem.btn1 !== undefined && columnItem.btn1}{" "}
                    {columnItem.btn2 !== undefined && columnItem.btn2}{" "}
                    {columnItem.btn3 !== undefined && columnItem.btn3}{" "}
                    {columnItem.btn4 !== undefined && columnItem.btn4}{" "}
                    {columnItem.label !== undefined && (
                        <label className="label">{item[`${columnItem.label}`]}</label>
                    )}
                </td>
            );
        })}
    </tr>
);

export default DataTable;
