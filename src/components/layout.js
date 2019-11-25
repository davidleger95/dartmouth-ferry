/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"

import "./layout.css"

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: space-between;

  background: #0b132c;
  color: #fffa;
  box-shadow: 0 0 0.75rem 0 #0008;
  padding: 1rem 1rem 0.75rem 1rem;
  font-family: Monaco, Courier, monospace;
  font-style: italic;

  p {
    margin: 0;
  }
`

const Link = styled.a`
  display: inline-grid;
  grid-auto-flow: column;
  align-items: center;
  grid-gap: 0.5rem;
  transition: color 100ms ease-in-out;
  text-decoration: none;
  font-size: 0.8em;
  color: inherit;

  &:hover {
    color: #fff;

    & .gatsby-image-wrapper {
      transform: scale(1.1);
    }
  }
`
const Logo = styled(Image)`
  display: block;
  transition: transform 100ms ease-in-out;
  overflow: visible;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query LOGO {
      logo: file(absolutePath: { regex: "/davejs-logo-white.png/" }) {
        childImageSharp {
          fixed(height: 30) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `)

  return (
    <>
      <div>
        <main>{children}</main>
        <Footer>
          <Link
            href="https://davejs.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Logo {...data.logo.childImageSharp} title="dave.js" />
            Web Developer & Designer
          </Link>

          <Link
            href="https://davejs.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            davejs.dev
          </Link>
        </Footer>
      </div>
    </>
  )
}

export default Layout
