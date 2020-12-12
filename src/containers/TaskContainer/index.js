// Brief description (max 150 characters):
/*
    Container for tabular task data
*/

// Main dependencies
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

// Components
import Task from "components/Task";

// Data
import { auth } from "firebase/config";

// Util
import getCollectionOfUser from "util/getCollectionOfUser";

const TaskContainer = (props) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (auth.currentUser) {
      getCollectionOfUser("tasks", auth.currentUser.uid, setTasks);
    }
  }, []);

  return <div {...props}>{tasks && tasks.map((task) => <Task />)}</div>;
};

TaskContainer.propTypes = {};

TaskContainer.defaultProps = {};

export default TaskContainer;
