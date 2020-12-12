// Brief description (max 150 characters):
/*
 Presentational component for the data of a given task.
*/

// Main dependencies
import React from "react";
import PropTypes from "prop-types";

// Styles
import { TaskWrapper, TaskDivider } from "./styles/Task";

// Icons
import Sweeping from "img/EditCleaningTasks.svg"; //Remove this in production

// Util
const calcStatus = (due_date) => {
  var converted_date = due_date.toDate();
  var today = new Date();

  if (converted_date > today) {
    return "upcoming";
  } else if (converted_date === today) {
    return "today";
  } else if (converted_date < today) {
    return "overdue";
  } else {
    return "upcoming";
  }
};

const Task = ({ task, key, ...restProps }) => {
  const status = calcStatus(task.date);

  return (
    <TaskWrapper {...restProps} id={key}>
      <div className={"task-container " + status}>
        {/* Task */}
        <p>{task.item}</p>

        {/* Icon */}
        <TaskDivider orientation="vertical" flexItem />
        <img src={task.icon.src} alt={task.icon.alt} />

        {/* Date */}
        <TaskDivider className="date-divider" orientation="vertical" flexItem />
        <p className="task-date">{task.date.toDate().toString()}</p>
      </div>
    </TaskWrapper>
  );
};

Task.propTypes = {
  task: PropTypes.object.isRequired,
};

Task.defaultProps = {
  task: {
    item: "Floor",
    icon: {
      src: Sweeping, //Remove in production
      alt: "Sweeping",
    },
    date: "Tomorrow, 12PM",
  },
};

export default Task;
