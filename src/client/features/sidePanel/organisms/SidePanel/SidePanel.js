import React from 'react'
import styled from 'styled-components'
import { Icon, Text, theme, Divider, Spacer } from 'mtsbankui'
import { useSelector, useDispatch } from 'react-redux'
import { clearAllBodyScrollLocks } from 'body-scroll-lock'

import { MovieInfo } from '../MovieInfo'
import { Credits } from '../Credits'

import { sidePanelActions } from './reducer'

export const SidePanel = () => {
  const dispatch = useDispatch()
  const { open } = useSelector(({ sidePanel }) => sidePanel)

  const handleClose = () => {
    dispatch(sidePanelActions.close())
    clearAllBodyScrollLocks()
  }

  return (
    <OuterWrapper on={open}>
      <Wrapper>
        {open && (
          <ToggleButton onClick={handleClose}>
            <Icon type="close" fill={theme.colors.gray.secondary} />
          </ToggleButton>
        )}
        {open && <MovieInfo />}
        <Spacer space={theme.spacings.s} />
        <Divider />
        <Spacer space={theme.spacings.s} />
        <Credits></Credits>
      </Wrapper>
    </OuterWrapper>
  )
}

const OuterWrapper = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  height: 100%;
  z-index: ${theme.z_indexes.high};
  margin: 0;
  overflow-y: auto;
  display: flex;
  transition: ease-in-out 200ms all;
  transform: translateX(${({ on }) => (on ? '0px' : '700px')});
  box-shadow: ${({ on }) => on && theme.shadows.top};
`

const ToggleButton = styled.div`
  position: fixed;
  right: 40px;
  top: 20px;
  z-index: ${theme.z_indexes.med};
  cursor: pointer;
`

const Wrapper = styled.aside`
  left: 0;
  top: 0;
  background-color: ${theme.colors.white};
  height: 100%;
  padding: 32px;
  z-index: ${theme.z_indexes.high};
  margin: 0;
  width: 700px;
  overflow-y: auto;
  transition: ease-in-out 200ms all;
  position: relative;

  @media (max-width: ${theme.breakpoints.md}px) {
    width: 100%;
  }
`
