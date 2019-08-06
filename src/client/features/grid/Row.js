/* eslint-disable react-perf/jsx-no-new-object-as-prop */
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme } from 'mtsbankui'

import { gaps } from './Container'

export const GridContextRow = React.createContext()

const columnsSizes = { basic: 12, mob: 12 }

const createGapsStyles = gaps =>
  Object.keys(gaps).map(gapKey => {
    return `@media (min-width: ${theme.breakpoints[gapKey]}px) { margin: 0 -20px; }`
  })

const RowComponent = ({ children, className, fillHeight = false, columns = columnsSizes }) => {
  const gapStyles = createGapsStyles(gaps)
  return (
    <StyledRow gaps={gapStyles} className={className}>
      <GridContextRow.Provider value={{ columns, fillHeight }}>{children}</GridContextRow.Provider>
    </StyledRow>
  )
}

export const Row = props => {
  return <RowComponent {...props}>{props.children}</RowComponent>
}

const StyledRow = styled.div`
  position: relative;
  height: auto;
  zoom: 1;
  box-sizing: border-box;
  flex-wrap: wrap;
  display: flex;
  ${({ gaps }) => gaps};
`
