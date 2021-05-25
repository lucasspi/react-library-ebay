import React from "react";
import Module from "../index";
import { object } from "@storybook/addon-knobs";
import { defaultModule } from "./fixtures";
export default {
  component: Module,
  title: "Message",
};
export const _Default = () => {
  const mockData = object("object", defaultModule);
  return <Module data={mockData} />;
};
