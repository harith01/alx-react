import React from 'react';
import CourseList from "./CourseList";
import { shallow } from 'enzyme';

describe('Testing CourseList Component', () => {
    it('Renders the component without crashing', () => {
        const wrapper = shallow(<CourseList />);
        expect(wrapper.exists()).toBe(true);
    });

    it('Renders 5 different rows', () => {
        const wrapper = shallow(<CourseList />);
        expect(wrapper.find('thead').children()).toHaveLength(2);
        expect(wrapper.find('tbody').children()).toHaveLength(3);
    })
});