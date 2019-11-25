import React from "react"
import styled from "styled-components"

import Ferry from "./Ferry"
import Cloud from "./Cloud"
import FerryTerminal from "./FerryTerminal"

const Scene = styled.div`
  display: grid;
  grid-template-areas: "sky" "harbour";
  grid-auto-rows: 1fr;
  height: 100vh;
  width: 100vw;
  perspective: 500px;
`
const Sky = styled.div`
  grid-area: sky;
  background-image: linear-gradient(180deg, #fd714f 0%, #fe1e7b 100%);
`
const Harbour = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-area: harbour;
  background-image: linear-gradient(180deg, #3224ae 8%, #c56cd6 100%);
  perspective: 300px;
`

const Title = styled.h1`
  text-transform: uppercase;
  color: #8888;
  font-size: 15vw;
  transform: rotateX(45deg);
  transform-origin: top;
  text-align: center;
  mix-blend-mode: color-dodge;
  filter: blur(0.75vw);
  background-image: linear-gradient(#000f, #0000);

  & span {
    display: inline-block;
    transform: rotateZ(180deg);
    vertical-align: text-bottom;
  }
`

const Skyline = () => (
  <Scene>
    <Sky>
      <Cloud style={{ animationDelay: "-17s", fontSize: "0.8em" }} />
      <Cloud
        style={{ animationDelay: "-15s", fontSize: "0.5em", top: "10vh" }}
      />
      <Cloud style={{ animationDelay: "-10s" }} />
      <Cloud
        style={{ animationDelay: "-2s", fontSize: "0.75em", top: "15vh" }}
      />
      <Cloud style={{ animationDelay: "3s", opacity: 0 }} />

      <Cloud style={{ animationDelay: "-40s", fontSize: "0.8em" }} />
      <Cloud
        style={{ animationDelay: "-30s", fontSize: "0.5em", top: "10vh" }}
      />
      <Cloud style={{ animationDelay: "-35s" }} />
      <Cloud
        style={{ animationDelay: "-50s", fontSize: "0.75em", top: "15vh" }}
      />
    </Sky>
    <Harbour>
      <Title>
        H<span>v</span>lif<span>v</span>x
      </Title>
    </Harbour>
    <FerryTerminal />
    <Ferry />
  </Scene>
)
export default Skyline
