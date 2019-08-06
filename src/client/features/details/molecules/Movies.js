import React, { useState } from 'react'
import styled from 'styled-components'
import { theme, Spacer, Text, Heading } from 'mtsbankui'
import { Waypoint } from 'react-waypoint'

import { Card } from './Card'
import { CardLoader } from './CardLoader'

const fakeArray = [...Array(12).keys()]

const Loaders = () =>
  fakeArray.map((_, i) => {
    return (
      <div key={i}>
        <CardLoader />
        <Spacer space={theme.spacings.m}></Spacer>
      </div>
    )
  })

export const Movies = ({ movies, more, loading, fetched = true, onEnter, stop }) => {
  const empty = movies.length === 0
  return fetched && !empty ? (
    <div>
      {movies.map(
        (
          {
            id,
            title,
            overview,
            vote_average,
            release_date,
            backdrop_path,
            poster_path,
            original_title
          },
          i
        ) => {
          return (
            <Card
              id={id}
              key={i}
              text={overview}
              title={title}
              button="Подробнее"
              rating={vote_average}
              date={release_date}
              img={backdrop_path}
              poster={poster_path}
              original_title={original_title}
            />
          )
        }
      )}
      {more.map(
        (
          {
            id,
            title,
            overview,
            vote_average,
            release_date,
            backdrop_path,
            poster_path,
            original_title
          },
          i
        ) => {
          return (
            <Card
              id={id}
              key={i}
              text={overview}
              title={title}
              button="Подробнее"
              rating={vote_average}
              date={release_date}
              img={backdrop_path}
              poster={poster_path}
              original_title={original_title}
            />
          )
        }
      )}
      {stop ? null : <Waypoint onEnter={onEnter}></Waypoint>}
    </div>
  ) : !fetched ? (
    <Loaders />
  ) : (
    <Heading h={4}>Ничего не найдено</Heading>
  )
}
