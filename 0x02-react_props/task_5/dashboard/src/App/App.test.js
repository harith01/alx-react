import App from './App';
import { shallow } from 'enzyme';
import React from 'react';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';

describe('Test App Entry Point', () => {
    it('renders App without crashing', () => {
        const wrapper = shallow(<App />);
        expect(wrapper).toBeDefined();
    });

    it('renders App with App-header div class', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('.App-header')).toBeDefined()
    });

    it('renders App with App-body div class', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('.App-body')).toBeDefined()
    });

    it('renders App with App-footer div class', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('.App-footer')).toBeDefined()
    });

    it('contain Notifications component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.containsMatchingElement(<Notifications />)).toBe(true);
    });

    it('contains Header component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.containsMatchingElement(<Header />)).toBe(true);
    });

    
    it('contains Fotter component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.containsMatchingElement(<Footer />))
    });

    it('does not display CourseList', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.containsMatchingElement(<CourseList />)).toBe(false);
    })

    it('displays CourseList but does not display Login', () => {
        const wrapper = shallow(<App isLoggedIn={true} />);
        expect(wrapper.containsMatchingElement(<Login />)).toBe(false);
        expect(wrapper.containsMatchingElement(<CourseList />)).toBe(true);
    })
});