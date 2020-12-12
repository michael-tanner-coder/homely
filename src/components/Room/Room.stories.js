import React from "react";
import Room from "./index";
import SweepIcon from "img/EditCleaningTasks.svg";

export default { title: "Components/Room", component: Room, argTypes: {} };

const Template = (args) => <Room {...args}></Room>;

export const Primary = Template.bind({});

const upcomingTask = {
  item: "Floor",
  icon: {
    src: SweepIcon,
    alt: "Sweeping",
  },
  date: "December 4th, 3PM",
};

const todayTask = {
  item: "Floor",
  icon: {
    src: SweepIcon,
    alt: "Sweeping",
  },
  date: "Today, 12PM",
};

const overDueTask = {
  item: "Floor",
  icon: {
    src: SweepIcon,
    alt: "Sweeping",
  },
  date: "Yesterday, 12PM",
};

Primary.args = {
  room: {
    name: "Living Room",
    tasks: [todayTask, upcomingTask, overDueTask],
  },
};
