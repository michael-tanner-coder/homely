// Brief description (max 150 characters):
/*
  Container for Checkbox/Task pairs, 
  takes in a list of task IDs and searches for them in the database
*/

// Main dependencies
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

// Components
import Task from "components/Task";
import Checkbox from "components/Checkbox";

// Data
import { projectFirestore } from "firebase/config.js";

// Styles
import TaskChecklistWrapper from "./styles/TaskChecklist";

const TaskChecklist = ({
  style: StyleWrapper = TaskChecklistWrapper,
  tasks,
  width,
  handleCheck,
  ...restProps
}) => {
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    console.log(taskList);
  }, [taskList]);

  useEffect(() => {
    tasks.map((task) => {
      projectFirestore
        .collection("tasks")
        .doc(task)
        .get()
        .then((doc) => {
          console.log(doc.data());
          setTaskList([...taskList, { ...doc.data(), id: doc.id }]);
        });
    });
  }, []);

  return (
    <StyleWrapper {...restProps}>
      <div className="scroll-area">
        {taskList &&
          taskList.map((task) => (
            <div className={"task-row " + width}>
              <Checkbox
                check={task.finished}
                onClick={() => {
                  console.log("Before click");
                  console.log(task.finished);

                  console.log("After click");
                  task.finished = !task.finished;
                  console.log(task.finished);
                  handleCheck(task);
                }}
              />
              <Task task={task} />
            </div>
          ))}
      </div>
    </StyleWrapper>
  );
};

TaskChecklist.propTypes = {
  tasks: PropTypes.array.isRequired,
  handleCheck: PropTypes.func,
};

TaskChecklist.defaultProps = {
  tasks: [],
  handleCheck: () => {
    return false;
  },
};

export default TaskChecklist;
