import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./App";

configure({ adapter: new Adapter() });

test("expect to render App component", () => {
  // expect(shallow(<App />)).toMatchSnapshot();
  const wrapper = shallow(<App />);
  const appTitle = wrapper.find('[data-test="app-title"]');
  expect(appTitle.length).toBe(1);
  expect(appTitle.text()).toMatchSnapshot();
});
