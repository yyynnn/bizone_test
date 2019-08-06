import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Button, theme, Spacer, Text, AutoComplete, Color, Select, useDidMount } from 'mtsbankui'
import StarRatings from 'react-star-ratings'
import { useSelector, useDispatch } from 'react-redux'

import { ratingActions } from './reducer'

import {
  moviesActions,
  moviesActionsByTitle
} from 'client/features/details/organisms/Cards/reducer'

export const RatingInput = () => {
  const intialRating = useSelector(state => state.rating)
  const [rating, setRating] = useState(intialRating)
  const dispatch = useDispatch()

  const changeRating = num => {
    setRating(num)
    dispatch(ratingActions.selected(num))
    dispatch(moviesActions.start())
    dispatch(moviesActionsByTitle.start())
  }

  return (
    <React.Fragment>
      <Text>
        <Color color={theme.colors.gray.secondary}>Рейтинг</Color>
        <Spacer space={theme.spacings.xs3} />
      </Text>
      <RatingWrapper>
        <StarRatings
          rating={+rating}
          starRatedColor={theme.colors.red.primary}
          changeRating={changeRating}
          numberOfStars={10}
          name="rating"
          starDimension={`${theme.spacings.xs}px`}
          starSpacing={`${theme.spacings.xs4}px`}
          starHoverColor={theme.colors.red.primary}
        />
      </RatingWrapper>
    </React.Fragment>
  )
}

const RatingWrapper = styled.div`
  .star-ratings {
    /* stylelint-disable */
    display: flex !important;
    height: 50px !important;
    align-items: center !important;
    /* stylelint-enable */
  }
`
