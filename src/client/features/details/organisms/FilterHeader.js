import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Button, theme, Spacer, Flex, Icon, Color, Select, useToggle } from 'mtsbankui'

import { Container, Row, Col } from 'client/features/grid'
import { Filter } from 'client/features/filters'
import { Logo } from 'client/features/logo/Logo'

export const FilterHeader = () => {
  const [on, toggle] = useToggle(true)

  const handler = () => {
    toggle(!on)
  }

  return (
    <Wrapper>
      <Container>
        <Row>
          <Col md="12">
            <Spacer space={theme.spacings.s} />
            <Flex justify="space-between" alignItems="center">
              <Logo />
              <MenuButton onClick={handler}>
                <Icon type={on ? 'menu' : 'close'} fill="#2c3e50"></Icon>
              </MenuButton>
            </Flex>
            <Spacer space={theme.spacings.s} />
          </Col>
          <Col>
            <Filter detail mobileToggle={on}></Filter>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: ${theme.colors.gray.g700};
  position: fixed;
  width: 100%;
  z-index: 99;
`

const MenuButton = styled.div`
  cursor: pointer;
  display: none;

  @media (max-width: ${theme.breakpoints.md}px) {
    display: block;
  }
`
