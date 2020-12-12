import styled from "styled-components/macro";

const IconButtonWrapper = styled.div`
  color: #f0eff4;

  button {
    cursor: pointer;
    color: #f0eff4;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: none;
    border: none;

    p {
      margin-right: 0.4rem;
    }
  }

  button:focus {
    outline: none;
  }

  img {
    width: ${(props) => props.width};
  }
`;

export default IconButtonWrapper;
