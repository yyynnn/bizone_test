import React, { useContext } from 'react'
import styled from 'styled-components'
import { theme } from 'mtsbankui'

import { GridContextRow } from './Row'

export const Col = ({ children, className, hostRef, style, width, mob, sm, md, lg }) => {
  const { columns: gridSize, fillHeight } = useContext(GridContextRow)
  const sizeData = { none: gridSize.mob, mob, sm, md, lg }
  const columnWidth = sizeType => (sizeData[sizeType] / 12) * 100
  const mediaString = Object.keys(sizeData)
    .filter(sizeType => sizeData[sizeType] !== undefined)
    .map(sizeType => {
      return `
        @media (min-width: ${theme.breakpoints[sizeType]}px) { 
        width: ${columnWidth(sizeType)}%;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 ${columnWidth(sizeType)}%;
        flex: 0 0 ${columnWidth(sizeType)}%;
        max-width: ${columnWidth(sizeType)}%;
       }`
    })

  return (
    <StyledCol
      fillHeight={fillHeight}
      mediaString={mediaString}
      width={width}
      ref={hostRef}
      style={style}
      className={className}
    >
      {children}
    </StyledCol>
  )
}

const StyledCol = styled.div`
  ${({ mediaString }) => mediaString};
  display: block;
  flex: 0 0 auto;
  flex-basis: 0;
  padding: 0px 20px;
  position: relative;
  flex-shrink: 1;
`
