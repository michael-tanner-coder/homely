import React from "react";
import MultiInput from "./index";

export default {
  title: "Components/MultiInput",
  component: MultiInput,
  argTypes: {},
};

const Template = (args) => (
  <MultiInput
    {...args}
    placeholder="placeholder"
    onUpdate={() => console.log("onUpdate")}
  ></MultiInput>
);

export const Primary = Template.bind({});

Primary.args = {};
