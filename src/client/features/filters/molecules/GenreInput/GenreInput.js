/* eslint-disable react-perf/jsx-no-new-object-as-prop */
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useDidMount } from 'mtsbankui'
import { useSelector, useDispatch } from 'react-redux'

import { Select } from '../Select/Select'

import { genresActions } from './reducer'

import {
  moviesActions,
  moviesActionsByTitle
} from 'client/features/details/organisms/Cards/reducer'

export const GenreInput = () => {
  const initialGenreId = useSelector(state => state.genres.id)
  const needToFetch = useSelector(state => state.genres.needToFetch)
  const [genre, setGenre] = useState('')
  const [genreId, setGenreId] = useState(initialGenreId)
  const dispatch = useDispatch()
  const genres = useSelector(state =>
    state.genres.data
      .map(({ name, id }) => {
        return { label: name, value: id }
      })
      .concat([{ value: 0, label: 'любой' }])
  )

  useDidMount(() => {
    needToFetch && dispatch(genresActions.start())
  })

  const changeGenre = ({ label, value }) => {
    setGenre(label)
    setGenreId(value)
    dispatch(genresActions.selected(value))
    dispatch(moviesActions.start())
    dispatch(moviesActionsByTitle.start())
  }

  let selectedObj = genres.find(o => o.value === genreId)

  return (
    <Select
      info="Жанр"
      items={genres}
      selected={{ value: genre, label: genre || (selectedObj ? selectedObj.label : '') }}
      onChange={changeGenre}
    />
  )
}
