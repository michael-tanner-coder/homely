import React from "react";
import Chip from "./index";

export default { title: "Components/Chip", component: Chip, argTypes: {} };

const Template = (args) => <Chip {...args} label="Placeholder"></Chip>;

export const Primary = Template.bind({});

Primary.args = {};
