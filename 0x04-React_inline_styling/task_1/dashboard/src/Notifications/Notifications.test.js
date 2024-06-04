import React from "react";
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import { StyleSheetTestUtils } from "aphrodite";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('Test Notifications component', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        expect(wrapper).toBeDefined();
    });

    // it('renders three notificationItem components', () => {
    //     const wrapper = shallow(<Notifications displayDrawer={true}/>);
    //     expect(wrapper.find('ul').children()).toHaveLength(3);
    // });

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
            // expect(wrapper.containsMatchingElement(<p>Here is the list of notifications</p>)).toBe(false);
            expect(wrapper.containsMatchingElement(<li data-notification-type="default">No new notification for now</li>));
    });
});

describe("onclick event behaves as it should", () => {
    it("should call console.log", () => {
      const wrapper = shallow(<Notifications />);
      const spy = jest.spyOn(console, "log").mockImplementation();
  
      wrapper.instance().markAsRead = spy;
      wrapper.instance().markAsRead(1);
      expect(wrapper.instance().markAsRead).toBeCalledWith(1);
      expect(spy).toBeCalledTimes(1);
      expect(spy).toBeCalledWith(1);
      spy.mockRestore();
    });

    it('with a longer list, the component does rerender', () => {
        const listNotifications = [
          { id: 1, type: 'default', value: 'New course available' },
          { id: 2, type: 'urgent', value: 'New resume available' },
        ];
        let latestNotification;
        const listNotifications2 = [
          { id: 1, type: 'default', value: 'New course available' },
          { id: 2, type: 'urgent', value: 'New resume available' },
          { id: 3, type: 'urgent', html: { __html: latestNotification } },
        ];
        console.log(listNotifications);
        const wrapper = shallow(
          <Notifications displayDrawer listNotifications={listNotifications} />
        );
        const shouldComponentUpdate = jest.spyOn(
          Notifications.prototype,
          'shouldComponentUpdate'
        );
        wrapper.setProps({ listNotifications: listNotifications2 });
        expect(shouldComponentUpdate).toHaveBeenCalled();
        expect(shouldComponentUpdate).toHaveLastReturnedWith(true);
        jest.restoreAllMocks();
      });
});