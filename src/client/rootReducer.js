import { combineReducers } from 'redux'

import { genres } from './features/filters/molecules/GenreInput/reducer'
import { rating } from './features/filters/molecules/RatingInput/reducer'
import { year } from './features/filters/molecules/YearInput/reducer'
import { movies, moviesByTitle } from './features/details/organisms/Cards/reducer'
import { sidePanel } from './features/sidePanel/organisms/SidePanel/reducer'
import { title } from './features/filters/molecules/TitleInput/reducer'

export const createRootReducer = history =>
  combineReducers({
    genres,
    rating,
    year,
    movies,
    moviesByTitle,
    sidePanel,
    title
  })
