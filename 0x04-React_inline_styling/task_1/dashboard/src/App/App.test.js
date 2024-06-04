import App from './App';
import { shallow } from 'enzyme';
import React from 'react';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import { StyleSheetTestUtils } from "aphrodite";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('Test App Entry Point', () => {
    it('renders App without crashing', () => {
        const wrapper = shallow(<App />);
        expect(wrapper).toBeDefined();
    });

    it('renders App with App-header div class', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('.AppHeader')).toBeDefined()
    });

    it('renders App with App-body div class', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('.AppBody')).toBeDefined()
    });

    it('renders App with App-footer div class', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('.AppFooter')).toBeDefined()
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


describe("When ctrl + h is pressed", () => {
    it("calls logOut function", () => {
      const mocked = jest.fn();
      const wrapper = mount(<App logOut={mocked} />);
      const event = new KeyboardEvent("keydown", { ctrlKey: true, key: "h" });
      document.dispatchEvent(event);
  
      expect(mocked).toHaveBeenCalledTimes(1);
      wrapper.unmount();
    });
  
    document.alert = jest.fn();
    it("checks that alert function is called", () => {
      const wrapper = mount(<App />);
      const spy = jest.spyOn(window, "alert");
      const event = new KeyboardEvent("keydown", { ctrlKey: true, key: "h" });
      document.dispatchEvent(event);
  
      expect(spy).toHaveBeenCalled();
      spy.mockRestore();
      wrapper.unmount();
    });
  
    it('checks that the alert is "Logging you out"', () => {
      const wrapper = mount(<App />);
      const spy = jest.spyOn(window, "alert");
      const event = new KeyboardEvent("keydown", { ctrlKey: true, key: "h" });
      document.dispatchEvent(event);
  
      expect(spy).toHaveBeenCalledWith("Logging you out");
      jest.restoreAllMocks();
      wrapper.unmount();
    });
    document.alert.mockClear();
});