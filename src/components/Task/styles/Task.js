import styled from "styled-components/macro";
import { BaseDivider } from "framework";

export const TaskWrapper = styled.div`
  .task-container {
    /* Tyography */
    font-size: 14px;
    color: #f0eff4;

    p {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    /* Sizing/Spacing */
    width: 100%;
    padding: 0.25rem 0.4rem;

    /* Layout */
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    /* Misc */
    box-shadow: 20px 20px 60px rgba(204, 203, 207, 0.5);
    border-radius: 200px;
  }

  /* Background color variants */
  .today {
    background-color: #832161;
  }

  .upcoming {
    background-color: #3d2645;
  }

  .overdue {
    background-color: #da4167;
  }

  @media (max-width: 320px) {
    .date-divider,
    .task-date {
      display: none;
    }
  }
`;

export const TaskDivider = styled(BaseDivider)`
  background-color: #f0eff4;
  width: 0.02rem;
  margin-right: 5px;
  margin-left: 5px;
`;

export default TaskWrapper;
