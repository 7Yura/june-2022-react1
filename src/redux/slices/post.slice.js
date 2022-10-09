import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {postService} from "../../services";

const initialState = {
    posts: [],
    currentPost: null,
    loading: false,
    error: null,

};
const getAll = createAsyncThunk(
    'postSlice/getAll',
    async (_, {rejectWithValue,dispatch, getState}) => {
        const state = getState();
        console.log(state);
        try {
            const {data} = await postService.getAll();
            dispatch(getAllWithDispatch(data))
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);



const postSlice = createSlice({
    name: 'postSlice',
    initialState,
    reducers: {

        getAllWithDispatch: (state, action) => {
            state.posts = action.payload
        },

}});

const {reducer: postReducer, actions: {getAllWithDispatch}} = postSlice;

const postActions = {
    getAll
}

export {
    postReducer,
    postActions
}