import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { Posts } from '../../../Types'

const JSON_PLACEHOLDER_API = 'https://jsonplaceholder.typicode.com/posts?_limit=4'

//3.TYPE
type PostState = {
    loading: boolean,
    error: null | string,
    data: null | Posts[]
}

const initialState: PostState = {
    loading: false,
    error: null,
    data: null,
};

//2.ACTION
export const getPosts = createAsyncThunk(
    'posts/getPosts',
    async (data, thunkApi) => {
        try {
            const response = await axios.get<Posts[]>(JSON_PLACEHOLDER_API)
            return response.data;
        }
        catch (error: any) { return thunkApi.rejectWithValue(error.message) }
    }
)

//1.SLICE
const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        clearPost: (state) => {
            state.data = [];
        },
        removePost: (state: any, action: PayloadAction<any>) => {
            const postId = action.payload;
            state.data = state.data.filter((item: { id: string | number }) => item.id !== postId)
        }
    },
    extraReducers(builder) {
        builder
            .addCase(getPosts.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getPosts.fulfilled, (state, action: PayloadAction<Posts[]>) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(getPosts.rejected, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.error = action.payload;
                console.log(action);
            })

    }

})

export const { clearPost, removePost } =
    postSlice.actions;

export default postSlice.reducer;
