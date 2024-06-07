import { shallow } from "enzyme";
import React from "react";
import Login from "./Login";
import { StyleSheetTestUtils } from "aphrodite";

describe("<Login />", () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it("Login renders without crashing", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.exists()).toEqual(true);
  });
  it("Verify that the components render 2 input", () => {
    const wrapper = shallow(<Login />);
    wrapper.update();
    expect(wrapper.find("div input")).toHaveLength(2);
  });
  it("Verify that the components render 2 label", () => {
    const wrapper = shallow(<Login />);
    wrapper.update();
    expect(wrapper.find("div label")).toHaveLength(2);
  });

  it("verify that the submit button is disabled by default", () => {
    expect(wrapper.find("input[type='submit']").props().disabled).toEqual(true);
  });

  it("verify that after changing the value of the two inputs, the button is enabled", () => {
    wrapper.find("#email").simulate('change', {target: {value: 't'}});
    wrapper.find("#password").simulate('change', {target: {value: 't'}});
    expect(wrapper.find("input[type='submit']").props().disabled).toEqual(false);
  });
});
