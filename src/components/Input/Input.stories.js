import React from "react";
import Input from "./index";

export default { title: "Components/Input", component: Input, argTypes: {} };

const Template = (args) => <Input {...args}></Input>;

export const Text = Template.bind({});
Text.args = {
  placeholder: "Placeholder",
  label: "Aria label",
  type: "text",
};

export const Date = Template.bind({});
Date.args = {
  placeholder: "Placeholder",
  label: "Aria label",
  type: "date",
};

export const Number = Template.bind({});
Number.args = {
  placeholder: "Placeholder",
  label: "Aria label",
  type: "number",
};

export const Password = Template.bind({});
Password.args = {
  placeholder: "Placeholder",
  label: "Aria label",
  type: "password",
};

export const Email = Template.bind({});
Email.args = {
  placeholder: "youremail@domain.com",
  label: "Aria label",
  type: "email",
};
