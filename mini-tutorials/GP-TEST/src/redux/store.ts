import { Person } from '@/models'
import { configureStore } from '@reduxjs/toolkit'
import favoriteSlice from './state/favoriteSlice'
import peopleSlice from './state/peopleSlice'


export interface AppStore {
  people :Person[],
  favorites: Person[]
}

export const store = configureStore<AppStore>({
  reducer: {
    people: peopleSlice.reducer,
    favorites: favoriteSlice.reducer

  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch