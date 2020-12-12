import React from "react";
import Select from "./index";

export default { title: "Components/Select", component: Select, argTypes: {} };

const data = ["Living Room", "Kitchen", "Bedroom"];

const Template = (args) => (
  <Select {...args} options={data} label="Rooms"></Select>
);

export const Primary = Template.bind({});

Primary.args = {};
