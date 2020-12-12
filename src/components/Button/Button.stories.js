import React from "react";
import Button from "./index";

export default { title: "Components/Button", component: Button, argTypes: {} };

const Template = (args) => <Button {...args}>{args.text}</Button>;

export const Primary = Template.bind({});
Primary.args = {
  text: "Button",
  color: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  text: "Secondary",
  color: "secondary",
};

export const Danger = Template.bind({});
Danger.args = {
  text: "Danger",
  color: "danger",
};
