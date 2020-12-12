// Brief description (max 150 characters):
/*
  Abstract collection for any type of component. 
  Takes in a component and a data set. The data set is passed down to all components in the list.
*/

// Main dependencies
import React from "react";
import PropTypes from "prop-types";

const Collection = ({ Component, data }) => {
  return (
    <>
      {data &&
        data.map((item) => {
          return <Component {...item} />;
        })}
    </>
  );
};

Collection.propTypes = {
  data: PropTypes.array,
};

Collection.defaultProps = {
  data: [{ defaultData: "" }],
};

export default Collection;
