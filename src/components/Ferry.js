import React from "react"

import styled from "styled-components"
import cabinBackground from "../images/ferry-body.png"

const Container = styled.div`
  @keyframes set-sail {
    0% {
      transform: translateX(-40vw);
    }
    100% {
      transform: translateX(40vw);
    }
  }

  grid-row: 1 / -1;
  grid-column: 1 / -1;
  align-self: center;
  justify-self: center;
  color: white;
  perspective: 30em;
  font-size: 0.75rem;
  animation: set-sail 15s ease-in-out infinite alternate;
  padding-top: 5em;

  display: grid;
  justify-items: center;
`

const Boat = styled.div`
  @keyframes waves {
    0% {
      transform: rotateZ(0);
    }

    25% {
      transform: rotateZ(3deg);
    }

    50% {
      transform: rotateZ(-3deg);
    }

    75% {
      transform: rotateZ(3deg);
    }
    100% {
      transform: rotateZ(0);
    }
  }
  animation: waves 10s ease-in-out infinite;
  transform-style: preserve-3d;
`
const Cabin = styled.div`
  width: 25em;
  height: 6em;
  background: #b7bcc7;
  transform: rotateX(40deg);
  transform-origin: bottom;
  background-image: url(${cabinBackground});
  background-size: 100% 100%;
`

const UpperHaul = styled.div`
  width: 25em;
  height: 2em;
  background: #14028c;
  border-bottom: 4px solid #3f5486;
`

const Haul = styled.div`
  width: 25em;
  height: 3em;
  background: #14028c;
  transform-origin: top;
  transform: rotateX(-30deg);
  box-shadow: -0.5em 1em 1em 0.5em #0002;
`
const Reflected = styled.div`
  transform: rotateX(180deg) scaleY(1) translateY(-100%);
  transform-origin: top;
  perspective: 500px;

  & > * {
    opacity: 0.5;
    filter: blur(15px) saturate(0.5);
    transform-style: preserve-3d;
  }
`
const Reflection = ({ children }) => (
  <>
    <div>{children}</div>
    <Reflected>{children}</Reflected>
  </>
)

const Base = styled.div`
  height: 5em;
  width: 10em;
  background-image: linear-gradient(270deg, #dcdfe5 0%, #b7bcc7 100%);
  /* transform-style: preserve-3d; */
`

const Pipe = styled.div`
  position: absolute;
  background-image: linear-gradient(270deg, #dcdfe5 0%, #b7bcc7 100%);
  width: 1em;
  height: 12em;
  border-radius: 1em 1em 0 0;
  bottom: 0;
  box-shadow: 0 0.25em 0.5em #0005;

  &::before {
    content: "";
    display: block;
    background-color: darkslateblue;
    height: 1em;
    width: 1em;
    border-radius: 50%;
    border: 2px solid lightgrey;
    box-shadow: 0 0.25em 0.15em #0004;
  }

  &:nth-child(3) {
    margin-right: -1.5em;
  }
  &:nth-child(4) {
    margin-right: 1.5em;
  }
`

const Smoke = styled.div`
  @keyframes puff {
    0% {
      opacity: 0.25;
      transform: scale(0.5);
    }

    10% {
      transform: scale(1.2) translateX(0) translateY(0);
      opacity: 0.5;
    }

    30% {
      transform: scale(1) translateX(-1em) translateY(-4em);
    }

    60% {
      transform: scale(0.75) translateX(1em) translateY(-8em);
    }

    100% {
      opacity: 0;
      transform: scale(0.5) translateX(-1em) translateY(-16em);
    }
  }

  height: 2.5em;
  width: 1.5em;
  background-image: linear-gradient(270deg, #dcdfe5 0%, #b7bcc7 100%);
  position: absolute;
  top: -0.75em;
  opacity: 0;
  border-radius: 50%;
  filter: blur(0.35em);
  animation: puff 5s linear infinite;
`

const EngineBox = styled.div`
  position: absolute;
  background-image: linear-gradient(270deg, #dcdfe5 0%, #b7bcc7 100%);
  box-shadow: 0 0 0.75em #0004;
  width: 5em;
  height: 3em;
  bottom: 0;
`

const Wheelhouse = styled.div`
  height: 4.5em;
  width: 10em;
  border: 0.5em solid lightgray;
  border-bottom-width: 1.5em;
  background-image: linear-gradient(180deg, #3224ae55 8%, #c56cd655 100%);
  box-sizing: border-box;
  transform: rotateX(-40deg);
  transform-origin: bottom;
  transform-style: preserve-3d;
  position: relative;
  box-shadow: 0 0.5em 0.5em #0004;

  &::before {
    box-sizing: border-box;
    content: "";
    display: block;
    background-color: lightslategray;
    height: 0.5em;
    margin-top: -1em;
    width: calc(100% + 3em);
    margin-left: -1.5em;
  }

  &::after {
    box-sizing: border-box;
    content: "";
    display: block;
    background-color: lightslategray;
    height: 2em;
    width: calc(100% + 3em);
    margin-left: -1.5em;
    bottom: -2.5em;
    position: absolute;
  }
`

const HelmContainer = styled.div`
  display: grid;
  position: relative;
  justify-items: center;
  transform: translateZ(-12em);
  perspective: 500px;
  /* transform-style: preserve-3d; */
`

const Helm = () => (
  <HelmContainer>
    <Wheelhouse />
    <Base />
    <Pipe>
      <Smoke />
      <Smoke style={{ animationDelay: "0.5s" }} />
      <Smoke style={{ animationDelay: "1s" }} />
      <Smoke style={{ animationDelay: "2s" }} />
    </Pipe>
    <Pipe>
      <Smoke style={{ animationDelay: "2s" }} />
      <Smoke style={{ animationDelay: "2.5s" }} />
      <Smoke style={{ animationDelay: "3.5s" }} />
    </Pipe>
    <EngineBox />
  </HelmContainer>
)

const Ferry = () => (
  <Container>
    <Boat>
      <Reflection>
        <>
          <Helm />
          <Cabin />
          <UpperHaul />
          <Haul />
        </>
      </Reflection>
    </Boat>
  </Container>
)

export default Ferry
