import React from "react";
import { shallow } from "enzyme";
import CourseListRow from "./CourseListRow";

describe('CourseListRow component', () => {
    it('renders one cell when isHeader is true', () => {
        const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Courses" textSecondCell={null} />);
        expect(wrapper.find("tr").childAt(0).html()).toEqual('<th colSpan="2">Courses</th>');
    });

    it('renders one cell when isHeader is true', () => {
        const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="1st Course" textSecondCell={46} />);
        expect(wrapper.find("tr").children()).toHaveLength(2);
        expect(wrapper.find("tr").childAt(0).html()).toEqual('<td>1st Course</td>');
        expect(wrapper.find("tr").childAt(1).html()).toEqual('<td>46</td>');
    });
})