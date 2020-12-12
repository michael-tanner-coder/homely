import styled from "styled-components/macro";

const TaskChecklistWrapper = styled.div`
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

  .small {
    .task-date,
    .date-divider {
      display: none;
    }
  }

  .scroll-area {
    overflow-x: hidden;
  }
`;

export default TaskChecklistWrapper;
