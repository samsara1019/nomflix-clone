import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Conatiner = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;
const Text = styled.span`
  color: ${props => props.color};
  font-weight: 600;
`;


const Message = ({ text, color }) => (
  <Conatiner>
    <Text color={color}>
      {text}
    </Text>
  </Conatiner>
);


Message.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
}
export default Message;