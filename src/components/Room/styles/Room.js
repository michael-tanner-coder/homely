import styled from "styled-components/macro";
import Paper from "util/paper";
import Scrollbar from "util/scrollbar";

const RoomWrapper = styled.div`
  ${Paper};
  width: 100%;
  max-width: 380px;
  box-shadow: 20px 20px 60px rgba(204, 203, 207, 0.62);

  .room-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    p {
      color: black;
      font-size: 18px;
      font-weight: bold;
    }
    h3 {
      font-size: 30px;
      margin: 0;
    }
  }

  .scroll-area {
    width: 100%;
    max-width: 320px;
    ${Scrollbar};
    overflow-y: scroll;
    height: 200px;
    margin: 0 auto;
  }

  .task-row {
    display: flex;
    flex-direction: row;
    margin-bottom: 1rem;
    justify-content: flex-start;
    align-items: center;
    width: 100%;

    > :first-child {
      margin-right: 1rem;
    }

    > :last-child {
      flex-grow: 1;
    }
  }

  .room-footer {
    margin-top: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

    p {
      color: #3d2645;
      text-decoration: underline;
      font-size: 13px;
      font-weight: bold;
    }
  }
`;

export default RoomWrapper;
