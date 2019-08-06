import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Flex, theme, Spacer, Text, Color } from 'mtsbankui'

import { Col, Row, Container } from 'client/features/grid'
import { Filter } from 'client/features/filters/organisms/Filter'
import { Logo } from 'client/features/logo/Logo'

export const Home = () => {
  return (
    <Wrapper justify="center" data-testid="home_page">
      <Container>
        <Row>
          <Col md="12">
            <Logo />
            <Spacer space={theme.spacings.s} />
          </Col>
          <Col>
            <Filter></Filter>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  transform: perspective(1px) translateY(-50%);
`
