import React, { useState } from "react";
import Notification from "./index";
import Button from "components/Button";

export default {
  title: "Components/Notification",
  component: Notification,
  argTypes: {},
};

const Template = (args) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Show notification</Button>
      <Notification
        {...args}
        open={open}
        handleClose={() => setOpen(false)}
      ></Notification>
    </>
  );
};

export const Primary = Template.bind({});

Primary.args = {
  open: true,
  title: "Notification",
  body: "This is a generic notification",
};
