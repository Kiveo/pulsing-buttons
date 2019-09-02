import React from "react";
import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(0.97);
  }
`;

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  letter-spacing: 0.1rem;
  &:hover {
    svg .outline {
      stroke: white;
      transform-origin: 50% 50%;
      animation: 1s ${pulse} infinite alternate;
    }
    svg .inside {
      fill: white;
    }
    svg .mini {
      stroke: blue;
      stroke-width: 5px;
    }
    svg .text {
      fill: blue;
    }
  }
`;

const HoverMe = () => {
  return (
    <div>
      <StyledButton>
        <svg width="250" viewBox="0 0 250 50">
          <rect
            class="inside"
            fill="blue"
            x="12.5"
            y="10"
            rx="5"
            width="90%"
            height="30"
          />
          <rect
            class="mini"
            fill="none"
            rx="2"
            x="20"
            y="20"
            width="10"
            height="10"
          />
          <text class="text" fill="white" x="15%" y="30.5" font-size="18">
            Button Sample
          </text>
          <rect
            class="outline"
            stroke="none"
            strokeWidth="3"
            x="2"
            y="1"
            width="246"
            height="47.5"
            rx="7"
            fill="none"
          />
        </svg>
      </StyledButton>

      {/* // TODO convert to separate components/sub-components */}
      <StyledButton>
        <svg width="250" viewBox="0 0 250 50">
          <rect
            class="inside"
            fill="blue"
            x="12.5"
            y="10"
            rx="5"
            width="90%"
            height="30"
          />
          <rect
            class="mini"
            fill="none"
            rx="2"
            x="20"
            y="20"
            width="10"
            height="10"
          />
          <text class="text" fill="white" x="15%" y="30.5" font-size="18">
            Button Sample 2
          </text>
          <rect
            class="outline"
            stroke="none"
            stroke-width="3"
            x="2"
            y="1"
            width="246"
            height="47.5"
            rx="7"
            fill="none"
          />
        </svg>
      </StyledButton>
    </div>
  );
};

export default HoverMe;
