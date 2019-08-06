import React from 'react'
import styled from 'styled-components'
import { theme } from 'mtsbankui'

export const GridContextContainer = React.createContext()

export const gaps = { none: 16, mob: 16, sm: 36, md: 36, lg: 48 }

export const Container = ({ className, children, fluid = false, fluidmob = false }) => {
  return (
    <StyledContainer fluid={fluid ? fluid : null} fluidmob={fluidmob} className={className}>
      <GridContextContainer.Provider value={gaps}>{children}</GridContextContainer.Provider>
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  width: 100%;
  margin: auto;

  @media (min-width: ${theme.breakpoints.mob}px) {
    max-width: ${({ fluid, fluidmob }) => (fluid || fluidmob ? '100%' : '320px')};
    padding: ${({ fluid, fluidmob }) => !fluid && !fluidmob && '0 16px'};
    width: 100%;
  }
  @media (min-width: ${theme.breakpoints.sm}px) {
    max-width: ${({ fluid }) => (fluid ? '100%' : `${theme.breakpoints.sm}px`)};
    width: 100%;
  }
  @media (min-width: ${theme.breakpoints.md}px) {
    max-width: ${({ fluid }) => (fluid ? '100%' : `${theme.breakpoints.md}px`)};
    width: 100%;
  }
  @media (min-width: ${theme.breakpoints.lg}px) {
    max-width: ${({ fluid }) => (fluid ? '100%' : '1440px')};
    width: 100%;
  }
`
