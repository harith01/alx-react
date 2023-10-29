import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('Testing Notificationitem', () => {
    it('renders NotificationItem without crashing', () => {
        const wrapper = shallow(<NotificationItem />);
        expect(wrapper.exists()).toEqual(true);
    });

    it('renders correct htm for type="default" and value="test"', () => {
        const wrapper = shallow(<NotificationItem />);
        wrapper.setProps({ type: 'default', value: 'test'});
        expect(wrapper.html()).toEqual('<li data-notification-type="default">test</li>');
    });

    // it('renders correct html for html=<u>test</u>', () => {
    //     const wrapper = shallow(<NotificationItem />);
    //     wrapper.setProps({ html: '<u>test</u>'});
    //     expect(wrapper.html()).toEqual('<li data-notification-type="urgent"><u>test</u></li>')
    // });
})