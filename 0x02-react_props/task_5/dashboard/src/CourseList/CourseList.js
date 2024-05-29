import React from "react";
import CourseListRow from "./CourseListRow";
import "./CourseList.css";
import PropTypes from 'prop-types';
import CourseShape from "./CourseShape";

export default function CourseList({ listCourses }) {
    return (
        <table>
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