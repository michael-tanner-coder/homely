// Brief description (max 150 characters):
/*
  Section for displaying all tasks for a given user
*/

// Main dependencies
import React from "react";
import PropTypes from "prop-types";

// Components
import TaskContainer from "containers/TaskContainer";
import Section from "layouts/Section";

// Styles
import TaskSectionWrapper from "./styles/TaskSection";

const TaskTable = () => {
  return (
    <>
      <TaskContainer className="task-table" />
    </>
  );
};

const TaskSection = (props) => {
  return (
    <TaskSectionWrapper {...props}>
      <Section heading="Tasks" body={<TaskTable />} />
    </TaskSectionWrapper>
  );
};

TaskSection.propTypes = {};

TaskSection.defaultProps = {};

export default TaskSection;
