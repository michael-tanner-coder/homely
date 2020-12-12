import React, { useState } from "react";
import Modal from "./index";
import Input from "components/Input";
import Button from "components/Button";
export default { title: "Components/Modal", component: Modal, argTypes: {} };

const Template = (args) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Modal {...args} open={open}></Modal>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
    </>
  );
};

export const WithConfirm = Template.bind({});
WithConfirm.args = {
  title: "Modal",
  controls: [
    <Input type="text" placeholder="Text"></Input>,
    <Input type="date" placeholder="Date"></Input>,
    <Input type="number" placeholder="Number"></Input>,
  ],
  open: false,
};

export const WithoutConfirm = Template.bind({});
WithoutConfirm.args = {
  title: "Modal",
  controls: [
    <Input type="text" placeholder="Text"></Input>,
    <Input type="date" placeholder="Date"></Input>,
    <Input type="number" placeholder="Number"></Input>,
    <Button color="danger">Delete Action</Button>,
  ],
  open: false,
  hasConfirm: false,
};
