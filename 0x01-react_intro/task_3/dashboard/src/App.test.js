import App from './App';
import { shallow } from 'enzyme';
import React from 'react';

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
});
