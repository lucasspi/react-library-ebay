import React from "react";
import { cleanup, render } from "@testing-library/react";
import Module from "../index";
import { defaultModule } from "./fixtures";

const component = (data = defaultModule) => render(<Module data={data} />);
let data = defaultModule;

describe(`<Module {...defaultProps} />`, () => {
  afterEach(cleanup);

  it("should render steps with default icons given a model without Experience Icon", () => {
    const { asFragment } = render(<Module data={defaultModule} />);
    expect(asFragment()).toMatchSnapshot();
  });

  describe(`Should not be render`, () => {
    it("should return empty HTML Element if step is undefined", () => {
      data.steps = undefined;
      expect(component(data).container).toBeEmptyDOMElement();
    });

    it("should not render steps if steps is empty", () => {
      data.steps = [];
      expect(component(data).container).not.toHaveClass(".step");
    });
  });
});
