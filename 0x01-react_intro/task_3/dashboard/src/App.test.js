import React from 'react';
import App from './App';
import { shallow } from 'enzyme';


describe('App component tests', ()=> {
    it('Renders App component without crashing', ()=> {
        const component = shallow(<App />);
        expect(component).toBeDefined();
    });

    it('Renders div with a class of App header', ()=> {
        const component = shallow(<App />);
        expect(component.find('.App-header')).toBeDefined();
    });

    it('Renders div with a class of App-body', ()=> {
        const component = shallow(<App />);
        expect(component.find('.App-body')).toBeDefined();
    })

    it('Renders div with a class of App-footer', ()=> {
        const component = shallow(<App />);
        expect(component.find('.App-footer')).toBeDefined();
    })
});
