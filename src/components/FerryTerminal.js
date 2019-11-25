import React from "react"
import styled from "styled-components"

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

const Container = styled.div`
  grid-row: 1 / -1;
  grid-column: 1 / -1;
  align-self: center;
  justify-self: end;
  transform: translateY(30%);
  filter: drop-shadow(0px 10px 10px #0008);
`

const Terminal = styled.div`
  perspective: 500px;
  perspective-origin: 15% 30%;
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  grid-template-rows: 1fr 1fr 2em 3em;
`
const WallSegment = styled.div`
  background-image: linear-gradient(-45deg, #130876 0%, #660bbb 100%);
  height: 3em;
  width: 2em;
  border: 1px solid white;
`

const UpperWall = styled.div`
  display: flex;
  transform: rotateX(45deg);
  transform-origin: bottom;

  ${WallSegment} {
    background-image: linear-gradient(-45deg, #180997 0%, #700bcf 100%);
  }
`

const SideWall = styled.div`
  display: flex;
  box-shadow: 0 1em 1em 0 #0003;
  z-index: 100;
`

const LoadingDock = styled.div`
  grid-column: 1 / -1;
  grid-row: 2 / -1;
  transform: rotateZ(-3deg);
  transform-style: preserve-3d;
  margin-right: -3em;
  font-size: 0.5em;
`

const Floor = styled.div`
  height: 1.5em;
  background: grey;
  z-index: -1;
`

const BoardWalk = styled.div`
  grid-row: span 1 / -1;
  grid-column: span 1 / -1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  z-index: 999;
  font-size: 0.5em;
`
const Deck = styled.div`
  height: 1.5em;
  background: burlywood;
  grid-column: 1 / -1;
  align-self: end;
  box-shadow: 0 0.25em 0.5em 0 #0008;
  z-index: 10;
`

const Post = styled.div`
  justify-self: center;
  grid-row: 2;
  width: 1em;
  background: burlywood;
`

const Doors = styled.div`
  background: gray;
  height: 20px;
  width: 80px;
  position: absolute;
  left: -75px;
  bottom: 10px;

  transform: translateZ(90px) rotateX(-2deg);
  transform-style: preserve-3d;

  &::before {
    content: "";
    display: block;
    background: darkgray;
    height: 100px;
    width: 100%;
    transform-origin: top;
    transform: rotateX(-90deg);
  }

  &::after {
    content: "";
    display: block;
    background: darkslategray;
    height: 100%;
    width: 100px;
    transform-origin: right;
    position: absolute;
    top: 0;
    right: 0;
    transform: rotateY(-90deg);
  }
`

const FerryTerminal = () => (
  <Container>
    <Reflection>
      <Terminal>
        <Doors />
        <LoadingDock>
          <UpperWall>
            <WallSegment />
            <WallSegment />
            <WallSegment />
            <WallSegment />
            <WallSegment />
            <WallSegment />
            <WallSegment />
            <WallSegment />
            <WallSegment />
            <WallSegment />
            <WallSegment />
            <WallSegment />
            <WallSegment />
          </UpperWall>
          <SideWall>
            <WallSegment />
            <WallSegment />
            <WallSegment />
            <WallSegment />
            <WallSegment />
            <WallSegment />
            <WallSegment />
            <WallSegment />
            <WallSegment />
            <WallSegment />
            <WallSegment />
            <WallSegment />
            <WallSegment />
          </SideWall>
          <Floor />
        </LoadingDock>
        <BoardWalk>
          <Deck />
          <Post />
          <Post />
        </BoardWalk>
      </Terminal>
    </Reflection>
  </Container>
)

export default FerryTerminal
