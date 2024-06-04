import React from "react";
import CourseListRow from "./CourseListRow";
import PropTypes from 'prop-types';
import CourseShape from "./CourseShape";
import { StyleSheet, css } from "aphrodite";


const styles = StyleSheet.create({
    table: {
        border: '1px solid #ddd',
        width: '100%',
        borderCollapse: 'collapse',
        textAlign: 'left',
    },
})

export default function CourseList({ listCourses }) {
    return (
        <table className={css(styles.table)}>
            <thead>
                <CourseListRow textFirstCell="Available courses" isHeader={true} textSecondCell={null} />
                <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
            </thead>
            <tbody>
               {listCourses.length === 0 ? (
                    <CourseListRow textFirstCell="No course available yet" />
               ) : (
                    listCourses.map(({ id, name, credit }) => <CourseListRow key={id} textFirstCell={name} textSecondCell={credit} />)
               )}
            </tbody>
        </table>
    )
}

CourseList.propTypes = {
    listCourses: PropTypes.arrayOf(CourseShape),
}

CourseList.defaultProps = {
    listCourses: [],
}