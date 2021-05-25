import React from "react";
import { render } from "@testing-library/react";
import Module from "../index";
import { defaultModule } from "./fixtures";

describe(`<Module {...defaultProps} />`, () => {
  const defaultProps = {};
  it(`should render the texts`, () => {
    const { getByText } = render(
      <Module {...defaultProps} data={defaultModule} />
    );
    expect(getByText(`Don't show me again`)).toBeInTheDocument();
  });
});
