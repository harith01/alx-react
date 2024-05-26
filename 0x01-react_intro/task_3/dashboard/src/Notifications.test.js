import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Test Notifications componenet', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper).toBeDefined();
    });

    it('renders three list items', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find('li')).toHaveLength(3);
    });

    it('it renders the correct text', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find('p').text()).toBe("Here is the list of notifications");
    });
})