import React from "react";
import Table from "./index";
import { BaseTableRow as Row } from "framework";
import { BaseTableCell as Cell } from "framework";

export default { title: "Components/Table", component: Table, argTypes: {} };

const Template = (args) => (
  <Table {...args}>
    <Row>
      <Cell>1</Cell>
      <Cell>1</Cell>
      <Cell>1</Cell>
    </Row>
    <Row>
      <Cell>2</Cell>
      <Cell>2</Cell>
      <Cell>2</Cell>
    </Row>
    <Row>
      <Cell>3</Cell>
      <Cell>3</Cell>
      <Cell>3</Cell>
    </Row>
    <Row>
      <Cell>3</Cell>
      <Cell>3</Cell>
      <Cell>3</Cell>
    </Row>
    <Row>
      <Cell>3</Cell>
      <Cell>3</Cell>
      <Cell>3</Cell>
    </Row>
  </Table>
);

export const WithHead = Template.bind({});
WithHead.args = {
  columns: ["Col 1", "Col 2", "Col 3"],
  hasHead: true,
  caption: "Caption: Example table with a heading row",
};

export const Headless = Template.bind({});
Headless.args = {
  caption: "Caption: Example table without a heading row",
  hasHead: false,
};
