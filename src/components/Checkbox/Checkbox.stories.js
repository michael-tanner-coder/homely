import React from "react";
import Checkbox from "./index";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  argTypes: {},
};

const Template = (args) => <Checkbox {...args}></Checkbox>;

export const Checked = Template.bind({});

Checked.args = {
  check: true,
  label: "Checked checkbox",
  tabindex: 0,
};

export const Unchecked = Template.bind({});

Checked.args = {
  check: true,
  label: "Unchecked checkbox",
  tabindex: 0,
};
