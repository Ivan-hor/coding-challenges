import React from "react";
import "./styles.css";

function InformationTable(props) {
    return (
        <table className="table">
            <thead>
            <tr>
                <th className="tableCell">First name</th>
                <th className="tableCell">Last name</th>
                <th className="tableCell">Phone</th>
            </tr>
            </thead>
            {props.list
                .sort(function (a, b) {
                    if (a.last.toLowerCase() > b.last.toLowerCase()) {
                        return 1;
                    }
                    if (a.last.toLowerCase() < b.last.toLowerCase()) {
                        return -1;
                    }
                    return 0;
                })
                .map((el) => (
                    <tr>
                        <td className="tableCell">{el.first}</td>
                        <td className="tableCell">{el.last}</td>
                        <td className="tableCell">{el.phone}</td>
                    </tr>
                ))}
        </table>
    );
}
export default InformationTable;
