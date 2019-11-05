import React from "react"
import styled from "styled-components"

import Ferry from "./Ferry"
import Cloud from "./Cloud"

const Scene = styled.div`
  display: grid;
  grid-template-areas: "sky" "harbour";
  height: 100vh;
  width: 100vw;
  perspective: 500px;
`
const Sky = styled.div`
  grid-area: sky;
  background-image: linear-gradient(180deg, #fd714f 0%, #fe1e7b 100%);
`
const Harbour = styled.div`
  grid-area: harbour;
  background-image: linear-gradient(180deg, #3224ae 8%, #c56cd6 100%);
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
    <Harbour />
    <Ferry />
  </Scene>
)
export default Skyline
