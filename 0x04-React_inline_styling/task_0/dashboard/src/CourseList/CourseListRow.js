import React from 'react';
import PropTypes from "prop-types";

const rowStyle = {
    backgroundColor: '#f5f5f5ab'
}

const headerRowStyle = {
    backgroundColor: '#deb5b545'
}

export default function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
    return (
        <tr style={rowStyle}>
            {isHeader ? (
                textSecondCell === null ? (
                    <th style={headerRowStyle} colSpan={2}>{textFirstCell}</th>
                ): (
                    <>
                    <th>{textFirstCell}</th>
                    <th>{textSecondCell}</th>
                    </>
                )
            ): (
                <>
                <td>{textFirstCell}</td>
                <td>{textSecondCell}</td>
                </>
            )
            }
        </tr>
    )
}

CourseListRow.propTypes = {
    textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    textFirstCell: PropTypes.string.isRequired,
    isHeader: PropTypes.bool,
}

CourseListRow.defaultProps = {
    isHeader: false,
    textSecondCell: null,
}
