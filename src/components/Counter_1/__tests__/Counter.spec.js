import React from "react";
import ReactDOM from "react-dom";
import { shallow } from 'enzyme';
import { Counter } from '../index'

describe("Counter", () => {

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Counter />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders with initial value of 0', () => {
    const wrapper = shallow(<Counter />);
  
    expect(wrapper.find('#value').render().text().trim()).toEqual("0");
  });

  it('increments value in +1 when clicking plus button', () => {
    const wrapper = shallow(<Counter />);
  
    wrapper.find('#button-plus').simulate('click')
    expect(wrapper.find('#value').render().text().trim()).toEqual("1");
  });

  it('decrements value in -1 when clicking minus button', () => {
    const wrapper = shallow(<Counter />);
  
    wrapper.find('#button-minus').simulate('click')
    expect(wrapper.find('#value').render().text().trim()).toEqual("-1");
  });

  it('value is 5 when clicking plus button 6 times and clicking minus button once', () => {
    const wrapper = shallow(<Counter />);
  
    const increment = () => wrapper.find('#button-plus').simulate('click');
  
    Array(6).fill(null).forEach(increment);
    wrapper.find('#button-minus').simulate('click')
  
    expect(wrapper.find('#value').render().text().trim()).toEqual("5");
  });

});