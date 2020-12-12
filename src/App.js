// Main Dependencies
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Data
import { auth } from "./firebase/config";
import { DatabaseContext } from "./context/database";
import DialogContainer from "containers/DialogContainer";

// Util
import getCollectionOfUser from "./util/getCollectionOfUser";
import login from "./util/login";
import logout from "./util/logout";

// Styles
import "./App.css";
import GlobalStyle from "./globalStyles";
import theme from "./theme.js";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

// Routes
import { ROOMS, TASKS, ITEMS, TEST } from "./constants/routes";

// Components
import Toolbar from "./components/Toolbar";
import Button from "./components/Button";
import IconButton from "./components/IconButton";
import Guide from "./components/Guide";
import Checkbox from "./components/Checkbox";
import Modal from "./components/Modal";
import Table from "./components/Table";
import Notification from "./components/Notification";
import Room from "./components/Room";
import Task from "./components/Task";
import Input from "./components/Input";
import Typography from "@material-ui/core/Typography";
import SvgIcon from "@material-ui/core/SvgIcon";

// Layouts
import RoomSection from "layouts/RoomSection";
import ItemSection from "layouts/ItemSection";
import TaskSection from "layouts/TaskSection";

// Images
import ViewProfile from "./img/ViewProfile.svg";

// TO DO
// 1. Develop & Test User Flows
// 2. Implement onClickOutside handler for modals
// 3. Build and test remaining control components
// 4. Add placeholder text to date inputs
// 5. Add Icons to input boxes

function App() {
  // State
  const [rooms, setRooms] = useState([]);
  const [items, setItems] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [open, setOpen] = useState(false);
  const [modalHistory, setModalHistory] = useState(["email"]);
  const [currentModal, setCurrentModal] = useState("email");
  const [selection, setSelection] = useState({
    room: null,
    item: null,
    task: null,
  });
  const [loggedIn, setLoggedIn] = useState(false);

  // Modal Functions
  useEffect(() => {
    setCurrentModal(modalHistory[modalHistory.length - 1]);
  }, [modalHistory]);

  // Use this to go back in a modal sequence
  const goToPreviousModal = () => {
    setModalHistory((prevHistory) => prevHistory.slice(0, -1));
  };

  // Use this to go to the next modal in a sequence
  const goToNextModal = (modal) => {
    setModalHistory((prevHistory) => [...prevHistory, modal]);
  };

  // Use this to open a fresh modal outside of any modal sequence
  const openModal = (modal) => {
    setCurrentModal(modal);
    setOpen(true);
  };

  // Use this to close a modal and end a modal sequence
  const closeModal = () => {
    setOpen(false);
  };

  // Data Store
  const store = {
    // ModalHistory
    modalHistory: modalHistory,
    setModalHistory: setModalHistory,

    // CurrentModal
    currentModal: currentModal,
    setCurrentModal: setCurrentModal,

    // Traversing Modals
    goToNextModal: goToNextModal,
    goToPreviousModal: goToPreviousModal,

    // Open/close Modals
    setOpen: setOpen,
    openModal: openModal,
    closeModal: closeModal,

    // Selection
    selection: selection,
    setSelection: setSelection,
  };

  useEffect(() => {
    console.log(selection);
  }, [selection]);

  // Authentication
  auth.onAuthStateChanged((user) => {
    if (user) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  });

  // App
  return (
    <div className="App">
      <DatabaseContext.Provider value={store}>
        <GlobalStyle />
        <CssBaseline />
        <ThemeProvider theme={theme}>
          <Toolbar />

          <DialogContainer>
            {({ modals, notifications, guides }) => (
              <>
                <Modal {...modals[currentModal]} open={open} />
                <Notification {...notifications} open={false} />
                <Modal {...guides} open={false} />
              </>
            )}
          </DialogContainer>

          <Notification />
          <Guide />
          <Router>
            <Switch>
              <Route path={ROOMS}>
                <div>
                  <Link to={ITEMS}>
                    <Button>Items</Button>
                  </Link>
                  <br />
                  <br />
                  <Link to={TASKS}>
                    <Button>Tasks</Button>
                  </Link>
                </div>
                <RoomSection />
              </Route>
              <Route path={ITEMS}>
                <div>
                  <Link to={ROOMS}>
                    <Button>Rooms</Button>
                  </Link>
                  <br />
                  <br />
                  <Link to={TASKS}>
                    <Button>Tasks</Button>
                  </Link>
                </div>
                <ItemSection />
              </Route>
              <Route path={TASKS}>
                <div>
                  <Link to={ROOMS}>
                    <Button>Rooms</Button>
                  </Link>
                  <br />
                  <br />
                  <Link to={ITEMS}>
                    <Button>Items</Button>
                  </Link>
                </div>
                <TaskSection />
              </Route>
              <Route path={TEST}>
                <h2>Testing</h2>
              </Route>
            </Switch>
          </Router>
        </ThemeProvider>
      </DatabaseContext.Provider>
    </div>
  );
}

export default App;
