// Brief description (max 150 characters):
/*
 Container for all rooms belonging to the currently authenticated user. 
 Provides data and functions to Room components.
*/

// Main dependencies
import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";

// Components
import Room from "components/Room";

// Data
import { auth, projectFirestore } from "firebase/config";
import { DatabaseContext } from "context/database";

// Util
import getCollectionOfUser from "util/getCollectionOfUser";

const RoomContainer = (props) => {
  const [rooms, setRooms] = useState([]);
  const store = useContext(DatabaseContext);

  useEffect(() => {
    if (auth.currentUser) {
      getCollectionOfUser("rooms", auth.currentUser.uid, setRooms);
    }
  }, []);

  return (
    <div {...props}>
      {rooms.map((room) => (
        <Room
          room={room}
          editRoom={() => {
            store.setSelection({ ...store.selection, room: room });
            store.openModal("edit_room");
          }}
          copyRoom={() => {
            store.setSelection({ ...store.selection, room: room });
            store.openModal("copy_room");
          }}
        />
      ))}
    </div>
  );
};

RoomContainer.propTypes = {};

RoomContainer.defaultProps = {};

export default RoomContainer;
