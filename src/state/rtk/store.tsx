import { configureStore } from '@reduxjs/toolkit'
import postSlice from './posts/postSlice'

//4.STORE - EDIT REDUCER ONLY

export const store = configureStore({
    reducer: postSlice, //only change name here******
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>


// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;