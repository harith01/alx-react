import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from 'aphrodite';

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {


  return (
    <tr className={isHeader ? css(styles.headerStyle) : css(styles.rowStyle)}>
      {isHeader ? (
        textSecondCell === null ? (
          <th colSpan={2}>{textFirstCell}</th>
        ) : (
          <>
            <th>{textFirstCell}</th>
            <th>{textSecondCell}</th>
          </>
        )
      ) : (
        <>
          <td>{textFirstCell}</td>
          <td>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
}

const styles = StyleSheet.create({
  rowStyle: {
    backgroundColor: '#f5f5f5ab',
  },

  headerStyle: {
    backgroundColor: '#deb5b545',
  }
})

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

export default CourseListRow;
