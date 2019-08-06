import { genresLogic } from './features/filters/molecules/GenreInput/logic'
import { moviesLogic, moreMoviesLogic } from './features/details/organisms/Cards/logic'
import { sidePanelLogic } from './features/sidePanel/organisms/SidePanel/logic'
import {
  moreMoviesByTitleLogic,
  moviesByTitleLogic
} from './features/details/organisms/Cards/logic_byTitle'

export const rootLogic = [
  genresLogic,
  moviesLogic,
  moreMoviesLogic,
  moviesByTitleLogic,
  moreMoviesByTitleLogic,
  sidePanelLogic
]
