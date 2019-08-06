import React, { useEffect, useState } from 'react'
import {
  Button,
  theme,
  Spacer,
  Text,
  AutoComplete,
  Color,
  Select,
  Input,
  useDidMount
} from 'mtsbankui'
import { useSelector, useDispatch } from 'react-redux'

import { yearActions } from './reducer'

import {
  moviesActions,
  moviesActionsByTitle
} from 'client/features/details/organisms/Cards/reducer'

export const YearInput = () => {
  const initialYear = useSelector(state => state.year)
  const [year, setYear] = useState(initialYear)
  const dispatch = useDispatch()

  const changeYear = year => {
    setYear(year)
    dispatch(moviesActions.start())
    dispatch(moviesActionsByTitle.start())
    dispatch(yearActions.selected(year))
  }

  return (
    <Input
      info="Год выпуска фильма"
      onChange={e => changeYear(e.target.value)}
      value={year || ''}
    />
  )
}
