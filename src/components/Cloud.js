import styled from "styled-components"

const Cloud = styled.div`
  @keyframes wind {
    0% {
      transform: translateX(120vw);
    }
    100% {
      transform: translateX(-30vw);
    }
  }

  height: 3em;
  width: 5em;
  background-image: linear-gradient(270deg, #dcdfe5 0%, #b7bcc7 100%);
  position: absolute;
  top: 15vh;
  left: 5vw;
  border-radius: 50%;
  filter: blur(0.5em);
  font-size: 2em;
  opacity: 0.8;
  animation: wind 60s ease-in-out infinite;

  &::before {
    content: "";
    height: 2em;
    width: 4em;
    background-image: linear-gradient(270deg, #dcdfe5 0%, #b7bcc7 100%);
    position: absolute;

    border-radius: 50%;
    right: -2.5em;
    bottom: 0;
  }

  &::after {
    content: "";
    height: 2em;
    width: 3em;
    background-image: linear-gradient(270deg, #dcdfe5 0%, #b7bcc7 100%);
    position: absolute;

    border-radius: 50%;
    left: -1.5em;
    bottom: 0;
  }
`

export default Cloud
