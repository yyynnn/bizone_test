import React from 'react'
import styled from 'styled-components'
import { Icon, Text, theme, useDidMount, Spacer, Color, Button, Flex, Heading } from 'mtsbankui'
import { useSelector, useDispatch } from 'react-redux'
import StarRatings from 'react-star-ratings'

import { sidePanelActions } from './SidePanel/reducer'

export const MovieInfo = () => {
  const dispatch = useDispatch()
  const { movieId, data, loading } = useSelector(({ sidePanel }) => sidePanel)

  useDidMount(() => {
    dispatch(sidePanelActions.start(movieId))
  })

  if (Object.keys(data).length === 0 || loading) {
    return <Icon type="loader"></Icon>
  }

  const {
    title,
    original_title,
    vote_average,
    release_date,
    backdrop_path,
    poster_path,
    genres,
    overview,
    tagline,
    runtime
  } = data

  return (
    <Wrapper>
      {(backdrop_path || poster_path) && (
        <div>
          <Poster img={`https://image.tmdb.org/t/p/original${poster_path || backdrop_path}`} />
        </div>
      )}

      <InnerWrapper>
        <Heading h={4}>{title}</Heading>
        <Spacer space={theme.spacings.xs3} />
        <Color color={theme.colors.gray.g300}>
          <Text>
            {original_title} ({release_date && release_date.slice(0, 4)})
          </Text>
        </Color>
        <Spacer space={theme.spacings.xs2} />

        {genres.length > 0 && (
          <Text>
            Жанры:{' '}
            {genres.map(({ name }, i) => {
              const last = i === genres.length - 1
              return (
                <span key={i}>
                  {name}
                  {!last && ', '}
                </span>
              )
            })}
            <Spacer space={theme.spacings.xs2} />
          </Text>
        )}

        {runtime && <Text>Время: {runtime} мин.</Text>}
        <Spacer space={theme.spacings.xs2} />
        <StarRatings
          rating={vote_average}
          starRatedColor={theme.colors.red.primary}
          numberOfStars={10}
          starDimension={`${theme.spacings.xs2}px`}
          starSpacing={`${theme.spacings.xs4}px`}
          starHoverColor={theme.colors.red.primary}
        />
        <Spacer space={theme.spacings.xs2} />
        {tagline && (
          <Text>
            <Color color={theme.colors.gray.g300}>
              <i>"{tagline}"</i>
              <Spacer space={theme.spacings.xs2} />
            </Color>
          </Text>
        )}
        <Text>{overview}</Text>
      </InnerWrapper>
    </Wrapper>
  )
}

const Wrapper = styled(Flex)`
  @media (max-width: ${theme.breakpoints.sm}px) {
    flex-wrap: wrap;
  }
`

const InnerWrapper = styled.div`
  width: 66%;

  @media (max-width: ${theme.breakpoints.sm}px) {
    width: 100%;
  }
`

const Poster = styled.div`
  background-image: url(${({ img }) => img});
  height: 210px;
  width: 140px;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: ${theme.radiuses.basic}px;
  background-position: center;
  margin-right: 30px;
  margin-bottom: 30px;
`
