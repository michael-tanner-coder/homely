import React, { useContext, useState, useEffect } from "react";
import Input from "components/Input";
import Select from "components/Select";
import Button from "components/Button";
import IconButton from "components/IconButton";
import MultiInput from "components/MultiInput";
import { DatabaseContext } from "context/database";
import { projectFirestore, auth } from "firebase/config";
import Room from "models/Room";
import TaskChecklist from "components/TaskChecklist";
import SweepIcon from "img/EditCleaningTasks.svg";
import AddButton from "img/AddButton.svg";
import convertDateToTimestamp from "util/convertDateToTimestamp";
import parseDate from "util/parseDate";

const DialogContainer = (props) => {
  const store = useContext(DatabaseContext);
  const [state, setState] = useState({});
  const [error, setError] = useState("");
  const rooms = [
    { title: "Bedroom" },
    { title: "Kitchen" },
    { title: "Living room" },
    { title: "Study" },
    { title: "Closet" },
    { title: "Bathroom" },
    { title: "Office" },
  ];

  const goToNextModal = (modal) => {
    store.goToNextModal(modal);
    setState({});
  };

  const goToPreviousModal = (modal) => {
    store.goToPreviousModal(modal);
    setState({});
  };

  const closeModal = () => {
    store.closeModal();
    setState({});
    setError("");
  };

  const updateState = (state_object) => {
    setState({ ...state, ...state_object });
  };

  const sendToDB = (collection, document) => {
    projectFirestore.collection(collection).add({
      ...document,
      uid: auth.currentUser.uid,
    });
    store.closeModal();
  };

  const upcomingTask = {
    item: "Floor",
    icon: {
      src: SweepIcon,
      alt: "Sweeping",
    },
    finished: false,
    date: "December 4th, 3PM",
  };

  const todayTask = {
    item: "Floor",
    icon: {
      src: SweepIcon,
      alt: "Sweeping",
    },
    finished: true,
    date: "Today, 12PM",
  };

  const overDueTask = {
    item: "Floor",
    icon: {
      src: SweepIcon,
      alt: "Sweeping",
    },
    finished: false,
    date: "Yesterday, 12PM",
  };

  useEffect(() => {
    console.log(state);
  }, [state]);

  const modals = {
    // Test Modals
    first: {
      title: "First",
      description: "First modal",
      hasConfirm: false,
      controls: [<Button onClick={() => goToNextModal("second")}>Next</Button>],
    },
    second: {
      title: "Second",
      description: "Second modal",
      hasConfirm: false,
      controls: [
        <Button onClick={() => goToNextModal("third")}>Next</Button>,
        <Button onClick={() => goToPreviousModal()}>Previous</Button>,
      ],
    },
    third: {
      title: "Third",
      description: "Second modal",
      hasConfirm: false,
      controls: [<Button onClick={() => goToPreviousModal()}>Previous</Button>],
    },
    // Profile Modals
    profile: {
      title: "Profile",
      description: "View and edit profile information",
      hasConfirm: false,
      handleConfirm: () => {
        console.log("modal");
      },
      controls: [
        <Input placeholder="DisplayName" />,
        <Button
          onClick={() => {
            goToNextModal("password");
          }}
        >
          Change Password
        </Button>,
        <Button onClick={() => goToNextModal("email")}>Change Email</Button>,
        <Button color="danger" onClick={() => goToNextModal("delete_account")}>
          Delete Account
        </Button>,
      ],
    },
    password: {
      title: "Password",
      description: "Change your password",
      hasConfirm: true,
      handleConfirm: () => {
        if (state.password.length >= 6) {
          auth.currentUser.updatePassword(state.password).then(
            () => {
              console.log("Password updated");
              goToNextModal("password_changed");
            },
            (error) => {
              console.log(error);
            }
          );
        } else {
          console.log("Password must be 6 or more characters long");
        }
      },
      controls: [
        <Input
          type="password"
          placeholder="New Password"
          onChange={({ target }) => updateState({ password: target.value })}
        ></Input>,
      ],
    },
    password_changed: {
      title: "Password Changed!",
      description: "Change your password",
      hasConfirm: false,
      handleConfirm: () => {
        console.log("");
      },
      controls: [<Button onClick={() => closeModal()}>Awesome!</Button>],
    },
    email: {
      title: "Email",
      description: "Change your email",
      hasConfirm: true,
      handleConfirm: () => {
        auth.currentUser.updateEmail(state.email).then(
          () => {
            console.log("Email changed");
            goToNextModal("email_changed");
          },
          (error) => {
            console.log(error);
            setError(error);
          }
        );
      },
      controls: [
        <Input
          type="email"
          placeholder="New Email"
          onChange={(e) => updateState({ email: e.target.value })}
        ></Input>,
        <p>{error.message}</p>,
      ],
    },
    email_changed: {
      title: "Email Changed!",
      description: "Your email has been changed",
      hasConfirm: false,
      controls: [
        <p>Almost there!</p>,
        <p>
          Just check your email and click the validation link to confirm that
          we’re connected to the right address.
        </p>,
        <Button onClick={() => closeModal()}>Thanks!</Button>,
      ],
    },
    delete_account: {
      title: "Are you sure?",
      description: "Delete your account data",
      controls: [
        <p>Deleting this data is permanent</p>,
        <p>
          If you wish to go through with this action, type in your password
          below and press Delete
        </p>,
        <Input
          placeholder="Password"
          type="password"
          onChange={({ target }) => updateState({ password: target.value })}
        />,
        <Input
          placeholder="Confirm Password"
          type="password"
          onChange={({ target }) =>
            updateState({ confirm_password: target.value })
          }
        />,
        <Button
          color="danger"
          onClick={() => {
            // Delete account
            if (state.confirm_password === state.password) {
              // auth.currentUser.delete();
            }
            // Notify user
            // Log out user
            // Send user to account creation page
            console.log("Deleted");
            closeModal();
          }}
        >
          Delete
        </Button>,
      ],
    },
    // Task Modals
    create_tasks: {
      title: "Create Tasks",
      handleConfirm: () => {
        closeModal();
      },
      controls: [
        <Select
          placeholder="Task type"
          label="Task Type"
          options={["Sweeping", "Sanitizing", "Vacuuming", "Scrubbing"]}
        />,
        <Input
          type="date"
          placeholder="Time/Day"
          onChange={({ target }) => {
            updateState({
              date: convertDateToTimestamp(parseDate(target.value)),
            });
          }}
        />,
        <Input
          type="date"
          placeholder="Reminder"
          onChange={({ target }) => {
            updateState({
              date: convertDateToTimestamp(parseDate(target.value)),
            });
          }}
        />,
        <Select
          placeholder="Item/Surface"
          label="Item/Surface"
          options={["Vase", "TV", "Floor", "Counter"]}
        />,
        <Select
          placeholder="Room"
          label="Room"
          options={["Kitchen", "Living Room", "Bathroom"]}
        />,
      ],
    },
    // Room Modals
    create_rooms: {
      title: "Create Rooms",
      handleConfirm: () => {
        if (state.items.length > 0) {
          state.items.map((room) => {
            var room_obj = new Room(room, [], auth.currentUser.uid);
            console.log(room_obj);
            sendToDB("rooms", room_obj);
            return room_obj;
          });
          closeModal();
        } else {
          setError("Please type in a room name and press enter");
        }
      },
      controls: [
        <MultiInput
          placeholder="Enter a room name..."
          onUpdate={(items) => updateState({ items: items })}
        />,
        <p>{error}</p>,
      ],
    },
    edit_room: {
      title: "Edit Room",
      hasConfirm: false,
      controls: [
        <Input type="text" placeholder="Edit room name" />,
        <h3>Tasks</h3>,
        <TaskChecklist
          width="small"
          tasks={store.selection.room && store.selection.room.tasks}
          handleCheck={(task) => {
            console.log(task);
            // projectFirestore
            //   .collection("tasks")
            //   .doc(task.id)
            //   .update(task)
            //   .then(() => {
            //     console.log("Updated task");
            //   });
          }}
        />,
        <IconButton icon={AddButton} alt="Add a Task" />,
        <Button
          color="secondary"
          onClick={() => {
            if (store.selection.room) {
              // Get alll tasks from selected rooms
              var tasks = store.selection.room.tasks;

              // Update all tasks as finished
              tasks.map((task) => {
                projectFirestore
                  .collection("tasks")
                  .doc(task.id)
                  .update({ finished: true });
                return task;
              });
            }
          }}
        >
          Complete All Tasks
        </Button>,
        <h3>Data</h3>,
        <Button color="danger" onClick={() => goToNextModal("delete_room")}>
          Delete Room
        </Button>,
      ],
    },
    delete_room: {
      title: "Are you sure?",
      hasConfirm: false,
      controls: [
        <p>Warning: Deleting this room is permanent.</p>,
        <p>
          If you wish to go through with this action, type in the name of the
          room below and press{" "}
          <span style={{ fontWeight: "bold" }}>Delete</span>
        </p>,
        <p>{store.selection.room && store.selection.room.name}</p>,
        <Input
          type="text"
          placeholder="Enter room name"
          onChange={({ target }) => updateState({ room_name: target.value })}
        />,
        <Button
          color="danger"
          onClick={() => {
            if (
              store.selection.room &&
              store.selection.room.name === state.room_name
            ) {
              projectFirestore
                .collection("rooms")
                .doc(store.selection.room.id)
                .delete()
                .then(() => {
                  console.log("room deleted");
                })
                .catch(function (err) {
                  console.error("Error: ", err);
                });
              goToNextModal("delete_room_confirmation");
            }
          }}
        >
          Delete Room
        </Button>,
        <Button onClick={() => goToPreviousModal()}>Go back</Button>,
      ],
    },
    delete_room_confirmation: {
      title: "Room deleted",
      handleConfirm: () => {
        closeModal();
      },
    },
    copy_room: {
      title: "Copy Room",
      handleConfirm: () => {
        var copied_room = {
          ...store.selection.room,
          name: state.new_room,
        };
        delete copied_room.id;
        console.log("Copied room", copied_room);
        sendToDB("rooms", copied_room);
        closeModal();
      },
      controls: [
        <Input
          type="text"
          placeholder="Enter new room name"
          onChange={({ target }) => updateState({ new_room: target.value })}
        />,
      ],
    },
    // Item Modals
    add_items: {
      title: "Add Items",
      handleConfirm: () => {
        // Validate form

        // Send to database
        sendToDB("items", state);

        // Close modal, finish action
        closeModal();
      },
      controls: [
        <Input
          type="text"
          id="item-name"
          placeholder="Item name"
          onChange={({ target }) => updateState({ name: target.value })}
        />,
        <Input
          type="number"
          id="item-quantity"
          placeholder="Quantity"
          onChange={({ target }) => updateState({ quantity: target.value })}
        />,
        <Select
          id="item-status"
          label="Status"
          placeholder="Status"
          options={["Dusty", "Broken", "Dirty"]}
          onChange={({ target }) => updateState({ status: target.value })}
        />,
        <Select
          id="item-room"
          label="Rooms"
          placeholder="Rooms"
          options={["Living Room", "Kitchen", "Bedroom"]}
          onChange={({ target }) => updateState({ room: target.value })}
        />,
      ],
    },
  };

  const guides = {};

  const notifications = {};

  return props.children({ modals, guides, notifications });
};

export default DialogContainer;
