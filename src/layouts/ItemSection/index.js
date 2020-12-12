// Brief description (max 150 characters):
/*

*/

// Main dependencies
import React from "react";
import PropTypes from "prop-types";

// Components
import ItemContainer from "containers/ItemContainer";
import Section from "layouts/Section";
import Table from "components/Table";
import { BaseTableRow as Row, BaseTableCell as Cell } from "framework";

// Styles
import ItemSectionWrapper from "./styles/ItemSection";

const ItemTable = ({ items }) => {
  console.log(items);
  return (
    <Table columns={["Item", "Status", "Quantity", "Room"]}>
      {items.length > 0 &&
        items.map((item) => (
          <Row key={item.id}>
            <Cell style={{ fontSize: "22px" }}>{item.name}</Cell>
            <Cell style={{ fontSize: "22px" }}>{item.status}</Cell>
            <Cell style={{ fontSize: "22px" }}>{item.quantity}</Cell>
            <Cell style={{ fontSize: "22px" }}>{item.room}</Cell>
          </Row>
        ))}
    </Table>
  );
};

const ItemSection = (props) => {
  return (
    <ItemSectionWrapper {...props}>
      <Section
        heading="Items"
        body={
          <ItemContainer>
            {(items) => <ItemTable items={items} />}
          </ItemContainer>
        }
      />
    </ItemSectionWrapper>
  );
};

ItemSection.propTypes = {};

ItemSection.defaultProps = {};

export default ItemSection;
