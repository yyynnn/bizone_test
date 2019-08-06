import { configureStore } from 'client/store'

export const ssrCreateStore = req => {
  // init store ssr instance
  const store = configureStore()

  // prefetch data for store here

  return store
}
