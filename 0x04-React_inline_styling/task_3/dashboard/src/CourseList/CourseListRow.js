import React from 'react';
import PropTypes from "prop-types";
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    rowStyle: {
        backgroundColor: '#f5f5f5ab',
    },

    headerRowStyle: {
        backgroundColor: '#deb5b545',
        borderBottom: '1px solid grey'
    }
})



export default function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
    return (
        <tr className={isHeader ? css(styles.headerRowStyle) : css(styles.rowStyle)}>
            {isHeader ? (
                textSecondCell === null ? (
                    <th style={{ textAlign: 'center' }} colSpan={2}>{textFirstCell}</th>
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
