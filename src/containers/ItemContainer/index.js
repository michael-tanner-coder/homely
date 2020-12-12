// Brief description (max 150 characters):
/*
    Container for tabular item data
*/

// Main dependencies
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

// Data
import { auth } from "firebase/config";

// Util
import getCollectionOfUser from "util/getCollectionOfUser";

const ItemContainer = (props) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (auth.currentUser) {
      getCollectionOfUser("items", auth.currentUser.uid, setItems);
    }
  }, []);

  return props.children(items);
};

ItemContainer.propTypes = {};

ItemContainer.defaultProps = {};

export default ItemContainer;
