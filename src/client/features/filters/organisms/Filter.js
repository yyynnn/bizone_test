/* eslint-disable react-perf/jsx-no-new-object-as-prop */
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Button, theme, Spacer, useDidMount } from 'mtsbankui'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { GenreInput } from '../molecules/GenreInput/GenreInput'
import { RatingInput } from '../molecules/RatingInput/RatingInput'
import { TitleInput } from '../molecules/TitleInput/TitleInput'
import { YearInput } from '../molecules/YearInput/YearInput'

import { Col, Row } from 'client/features/grid'
import { DETAILS } from 'client/routes/names'
import { history } from 'client/store'
import {
  moviesActions,
  moviesActionsByTitle
} from 'client/features/details/organisms/Cards/reducer'

export const Filter = ({ detail, mobileToggle }) => {
  const linkParams = {
    pathname: DETAILS,
    search: history.location.search
  }

  return (
    <Wrapper collapsed={mobileToggle}>
      <Col md={detail ? '3' : '6'}>
        <TitleInput />
        <Spacer space={theme.spacings.xs} />
      </Col>
      <Col md={detail ? '3' : '2'}>
        <YearInput></YearInput>
        <Spacer space={theme.spacings.xs} />
      </Col>
      <Col md={detail ? '3' : '4'}>
        <GenreInput />
        <Spacer space={theme.spacings.xs} />
      </Col>
      <Col md={detail ? '3' : '12'}>
        <RatingInput />
        <Spacer space={theme.spacings.m} />
      </Col>
      {!detail && (
        <Col md="3">
          <Link to={linkParams}>
            <Button>Найти</Button>
          </Link>
        </Col>
      )}
    </Wrapper>
  )
}

const Wrapper = styled(Row)`
  transition: all ease-in-out 200ms;

  @media (max-width: ${theme.breakpoints.md}px) {
    display: ${({ collapsed }) => (collapsed ? 'none' : 'flex')};
    flex-wrap: wrap;
  }
`
