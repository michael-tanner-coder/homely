// Brief description (max 150 characters):
/*
 Presentational component for the data of a given room.
*/

// Main dependencies
import React from "react";
import PropTypes from "prop-types";

// Components
import Task from "components/Task";
import Checkbox from "components/Checkbox";
import TaskChecklist from "components/TaskChecklist";

// Styles
import RoomWrapper from "./styles/Room";
import IconButton from "components/IconButton";

// Icons
import Item from "img/Item.svg";
import Plus from "img/Plus.svg";
import Edit from "img/Edit.svg";
import Copy from "img/Copy.svg";

// TO DO
// 1. Test open/close of different modals with room options
// 2. Checkbox sizing
// 3. Get tasks to resize for mobile
// 4. Add responsive, relative typography

const Room = ({
  room,
  showItems,
  addTask,
  editRoom,
  copyRoom,
  ...restProps
}) => {
  return (
    <RoomWrapper {...restProps}>
      <div className="room-container">
        {/* Header */}
        <div className="room-header">
          <h3>{room.name}</h3>
          <IconButton text="Items" icon={Item} onClick={showItems} />
        </div>

        {/* Task Area */}
        <TaskChecklist tasks={room.tasks} />

        {/* Footer */}
        <div className="room-footer">
          <IconButton
            icon={Plus}
            text="Add Task"
            onClick={addTask}
          ></IconButton>
          <IconButton
            icon={Edit}
            text="Edit Room"
            onClick={editRoom}
          ></IconButton>
          <IconButton
            icon={Copy}
            text="Duplicate"
            onClick={copyRoom}
          ></IconButton>
        </div>
      </div>
    </RoomWrapper>
  );
};

Room.propTypes = {
  room: PropTypes.object.isRequired,
  showItems: PropTypes.func,
  addTask: PropTypes.func,
  editRoom: PropTypes.func,
  copyRoom: PropTypes.func,
};

Room.defaultProps = {
  showItems: () => {
    return true;
  },
  addTask: () => {
    return true;
  },
  editRoom: () => {
    return true;
  },
  copyRoom: () => {
    return true;
  },
};

export default Room;
