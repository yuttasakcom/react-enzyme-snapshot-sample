import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./App";

configure({ adapter: new Adapter() });

describe("test counter app", () => {
  const setup = (props = {}, state = null) => {
    const wrapper = shallow(<App {...props} />);
    if (state) {
      wrapper.setState(state);
    }
    return wrapper;
  };

  test("expect to render App component", () => {
    const wrapper = setup();
    expect(wrapper.length).toBe(1);
  });

  test("snapshot app title", () => {
    const wrapper = setup();
    const appTitle = wrapper.find('[data-test="app-title"]');
    expect(appTitle.length).toBe(1);
    expect(appTitle.text()).toMatchSnapshot();
  });

  test("renders display counter", () => {
    const wrapper = setup();
    const button = wrapper.find('[data-test="display-counter"]');
    expect(button.length).toBe(1);
  });

  test("renders increment button", () => {
    const wrapper = setup();
    const button = wrapper.find('[data-test="btn-increment"]');
    expect(button.length).toBe(1);
  });

  test("renders decrement button", () => {
    const wrapper = setup();
    const button = wrapper.find('[data-test="btn-decrement"]');
    expect(button.length).toBe(1);
  });

  test("counter start at 0", () => {
    const wrapper = setup();
    expect(wrapper.state("count")).toBe(0);
  });

  test("clicking button increments counter", () => {
    const count = Math.floor(Math.random() * 10 + 1);
    const wrapper = setup(null, { count });

    // find button and click
    const button = wrapper.find('[data-test="btn-increment"]');
    button.simulate("click");
    wrapper.update();

    // find display and test value
    const counterDisplay = wrapper.find('[data-test="display-counter"]');
    expect(counterDisplay.text()).toEqual(String(count + 1));
  });

  test("clicking button decrements counter", () => {
    const count = Math.floor(Math.random() * 10 + 1);
    const wrapper = setup(null, { count });

    // find button and click
    const button = wrapper.find('[data-test="btn-decrement"]');
    button.simulate("click");
    wrapper.update();

    // find display and test value
    const counterDisplay = wrapper.find('[data-test="display-counter"]');
    expect(counterDisplay.text()).toEqual(String(count - 1));
  });

  test("clicking button decrements = 0", () => {
    const count = 0;
    const wrapper = setup(null, { count });

    // find button and click
    const button = wrapper.find('[data-test="btn-decrement"]');
    button.simulate("click");
    wrapper.update();

    // find display and test value
    const counterDisplay = wrapper.find('[data-test="display-counter"]');
    expect(counterDisplay.text()).toEqual("0");
  });
});
