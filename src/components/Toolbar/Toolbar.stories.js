import React from "react";
import Toolbar from "./index";

export default {
  title: "Components/Toolbar",
  component: Toolbar,
  argTypes: {},
};

const Template = (args) => <Toolbar {...args}></Toolbar>;

export const Primary = Template.bind({});

Primary.args = {};
