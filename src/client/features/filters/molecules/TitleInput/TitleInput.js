import React, { useState } from 'react'
import { Input } from 'mtsbankui'
import { useSelector, useDispatch } from 'react-redux'

import { titleActions } from './reducer'

import {
  moviesActions,
  moviesActionsByTitle
} from 'client/features/details/organisms/Cards/reducer'

export const TitleInput = () => {
  const initialYear = useSelector(state => state.title)
  const dispatch = useDispatch()
  const [title, setTitle] = useState(initialYear)

  const changeTitle = value => {
    setTitle(value)
    dispatch(moviesActions.start())
    dispatch(titleActions.selected(value))
    dispatch(moviesActionsByTitle.start())
  }

  return (
    <Input info="Название фильма" onChange={e => changeTitle(e.target.value)} value={title || ''} />
  )
}
