import React from 'react';
import Notifications from './Notifications';
import { shallow } from 'enzyme';


describe('Notifications component tests', ()=> {
    it('Renders Notification component without crashing', ()=> {
        const component = shallow(<Notifications />);
        expect(component).toBeDefined();
    });

    it('Renders three list items', ()=> {
        const component = shallow(<Notifications />);
        expect(component.find('li')).toHaveLength(3);
    });

    it('Renders correct text', ()=> {
        const component = shallow(<Notifications />);
        expect(component.find('p').prop('children')).toBe(
			'Here is the list of notifications'
		);
    })

});
