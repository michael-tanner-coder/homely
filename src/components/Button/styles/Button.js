import styled from "styled-components/macro";
import { BaseButton } from "framework";

const ButtonWrapper = styled(BaseButton)`
  color: #fff;
  font-weight: 500;
  ${(props) => props.color === "danger" && `background-color: #da4167`};
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  border-radius: 16px;
  padding: 0.4rem 1.3rem;
  text-transform: capitalize;
  line-height: 29px;
  font-size: 24px;
  width: 100%;
  max-width: 250px;
  overflow-wrap: break-word;
  box-shadow: 20px 20px 60px rgba(204, 203, 207, 0.62);
`;

export default ButtonWrapper;
