import React from "react";
import IconButton from "./index";
import ViewProfile from "img/ViewProfile.svg";

export default {
  title: "Components/IconButton",
  component: IconButton,
  argTypes: {},
};

const Template = (args) => (
  <IconButton icon={ViewProfile} {...args}></IconButton>
);

export const Primary = Template.bind({});

Primary.args = {
  alt: "Icon Button",
  text: "Text",
};
