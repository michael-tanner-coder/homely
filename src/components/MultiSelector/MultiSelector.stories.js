import React from "react";
import MultiSelector from "./index";

export default {
  title: "Components/MultiSelector",
  component: MultiSelector,
};

const rooms = [
  { title: "Bedroom" },
  { title: "Kitchen" },
  { title: "Living room" },
  { title: "Study" },
  { title: "Closet" },
  { title: "Bathroom" },
  { title: "Office" },
];

const Template = (args) => (
  <MultiSelector
    {...args}
    options={rooms}
    placeholder="Rooms"
    label="Test Autocomplete"
    id="test-autocomplete"
    defaultValue=""
  ></MultiSelector>
);

export const Primary = Template.bind({});

Primary.args = {};
