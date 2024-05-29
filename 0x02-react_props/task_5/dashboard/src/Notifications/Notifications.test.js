import React from "react";
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Test Notifications componenet', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        expect(wrapper).toBeDefined();
    });

    it('renders three notificationItem components', () => {
        const wrapper = shallow(<Notifications displayDrawer={true}/>);
        expect(wrapper.find('ul').children()).toHaveLength(3);
    });

    it('it renders the correct text', () => {
        const wrapper = shallow(<Notifications displayDrawer={true}/>);
        expect(wrapper.find('p').text()).toBe("Here is the list of notifications");
    });

    it('renders .menuItem when displayDrawer is false', () => {
        const wrapper = shallow(<Notifications displayDrawer={false} />);
        expect(wrapper.find('.menuItem').exists()).toBe(true);
    });

    it('div.Notification not displayed when displayDrawer is false', () => {
        const wrapper = shallow(<Notifications displayDrawer={false} />);
        expect(wrapper.find('.Notifications').exists()).toBe(false);
    });

    it('renders .menuItem when displayDrawer is true', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        expect(wrapper.find('.menuItem').exists()).toBe(true);
    });

    it('div.Notification is being displayed when displayDrawer is true', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        expect(wrapper.find('.Notifications').exists()).toBe(true);
    });

    it("renders correctly when empty array is passed", () => {
        const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);
            expect(wrapper.containsMatchingElement(<li data-notification-type="default">No new notification for now</li>));
      });

    it('renders "No new notifications for now" instead of "Here is the list of notifications" when listNotifications is empty', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);
            expect(wrapper.containsMatchingElement(<p>Here is the list of notifications</p>)).toBe(false);
            expect(wrapper.containsMatchingElement(<li data-notification-type="default">No new notification for now</li>));
    });
})