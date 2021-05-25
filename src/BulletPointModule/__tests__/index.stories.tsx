import React from "react";
import Module from "../index";
import "../styles.less";
import { object } from "@storybook/addon-knobs";
import { defaultModule } from "./fixtures";
export default {
  component: Module,
  title: "BulletPoint",
};
export const _Default = () => {
  const mockData = object("object", defaultModule);
  return <Module data={mockData} />;
};
