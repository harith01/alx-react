import React from "react";
import CourseList from "./CourseList";
import CourseListRow from "./CourseListRow";
import { shallow } from "enzyme";


describe('CourseList Component', () => {
    it('renders CourseList without crashing', () => {
        const wrapper = shallow(<CourseList />);
        expect(wrapper.exists()).toBeDefined()
    })

    it('renders the five different rows', () => {
        const wrapper = shallow(<CourseList />);
        expect(wrapper.find('thead').children()).toHaveLength(2);
        wrapper.find("thead").forEach((node) => {
            expect(node.equals(<CourseListRow />));
        });
        expect(wrapper.find('tbody').children()).toHaveLength(3);
        wrapper.find("tbody").forEach((node) => {
            expect(node.equals(<CourseListRow />));
        });
    })
})