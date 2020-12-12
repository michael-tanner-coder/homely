import React from "react";
import Task from "./index";
import SweepIcon from "img/EditCleaningTasks.svg";
import firebase from "firebase/app";

export default { title: "Components/Task", component: Task, argTypes: {} };

const Template = (args) => <Task {...args}></Task>;

export const Upcoming = Template.bind({});
Upcoming.args = {
  task: {
    item: "Floor",
    icon: {
      src: SweepIcon,
      alt: "Sweeping",
    },
    date: new firebase.firestore.Timestamp(10000000, 10000000),
  },
};

export const Today = Template.bind({});
Today.args = {
  task: {
    item: "Floor",
    icon: {
      src: SweepIcon,
      alt: "Sweeping",
    },
    date: new firebase.firestore.Timestamp(1580000000, 500000000),
  },
};

export const Overdue = Template.bind({});
Overdue.args = {
  task: {
    item: "Floor",
    icon: {
      src: SweepIcon,
      alt: "Sweeping",
    },
    date: new firebase.firestore.Timestamp(1000000, 1000000),
  },
};
