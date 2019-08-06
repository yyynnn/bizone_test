import React from 'react'
import { Spacer, theme } from 'mtsbankui'
import styled from 'styled-components'

import { FilterHeader } from '../organisms/FilterHeader'
import { Cards } from '../organisms/Cards/Cards'

import { SidePanel } from 'client/features/sidePanel/organisms/SidePanel/SidePanel'

export const DetailPage = () => {
  return (
    <div data-testid="details_page">
      <FilterHeader />
      <StyledSpacer space={200} spacemob={78} />
      <Cards />
      <SidePanel />
    </div>
  )
}

const StyledSpacer = styled(Spacer)`
  @media (max-width: ${theme.breakpoints.md}px) {
    height: 110px;
    min-width: 110;
  }
`
