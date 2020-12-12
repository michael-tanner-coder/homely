// Brief description (max 150 characters):
/*
 Toolbar for all the main options when a user is in the app: creating tasks, adding rooms, and editing the profile
*/

// Main dependencies
import React, { useContext } from "react";

// Components
import IconButton from "components/IconButton";

// Styles
import { Toolbar as StyledToolbar, Appbar } from "./styles/Toolbar";

// Images
import ViewProfile from "img/ViewProfile.svg";
import AddItem from "img/AddItem.svg";
import AddRoom from "img/AddRoom.svg";
import EditCleaningTasks from "img/EditCleaningTasks.svg";

// Data
import { DatabaseContext } from "context/database";

const Toolbar = ({ ...restProps }) => {
  const store = useContext(DatabaseContext);
  const { openModal } = store;

  return (
    <Appbar {...restProps}>
      <StyledToolbar aria-label="toolbar">
        <p className="brand">Homely</p>
        <IconButton
          text="Create Tasks"
          icon={EditCleaningTasks}
          onClick={() => {
            openModal("create_tasks");
          }}
        />
        <IconButton
          text="Create Rooms"
          icon={AddRoom}
          onClick={() => {
            openModal("create_rooms");
          }}
        />
        <IconButton
          text="Add Items"
          icon={AddItem}
          onClick={() => {
            openModal("add_items");
          }}
        />
        <IconButton
          text="View Profile"
          icon={ViewProfile}
          onClick={() => {
            openModal("profile");
          }}
        />
      </StyledToolbar>
    </Appbar>
  );
};

export default Toolbar;
