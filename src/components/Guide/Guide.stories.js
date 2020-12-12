import React from "react";
import Guide from "./index";

export default { title: "Components/Guide", component: Guide, argTypes: {} };

const Template = (args) => <Guide {...args}></Guide>;

export const Primary = Template.bind({});

Primary.args = {
  open: true,
  title: "Guide Heading",
  confirmText: "Got it!",
};
