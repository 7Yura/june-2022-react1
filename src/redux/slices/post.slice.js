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

// const getById = createAsyncThunk(
//     'userSlice/getById',
//     async ({id}, {rejectWithValue}) => {
//         try {
//             const {data} = await userService.getById(id);
//             return data
//         } catch (e) {
//             return rejectWithValue(e.response.data)
//         }
//     }
// );

const postSlice = createSlice({
    name: 'postSlice',
    initialState,
    reducers: {
        // getAll: (state, action) => {
        //     state.posts = action.payload
        // },
        getAllWithDispatch: (state, action) => {
            state.posts = action.payload
        },
        // setCurrentPost: (state, action) => {
        //     state.currentPost = action.payload
        // },
        // deleteById:(state, action)=>{
        //     const index = state.users.findIndex(user=>user.id ===action.payload);
        //     state.users.splice(index, 1)
        //     console.log(current(state.users));

    //     }
    // },
    // extraReducers:{
    //     [getAll.fulfilled]:(state, action)=>{
    //         state.posts = action.payload
    //     },
    // }
    // extraReducers: builder =>
    //     builder
    //         .addCase(getAll.fulfilled, (state, action) => {
    //             state.posts = action.payload
    //             state.loading = false
    //         })
            // .addCase(getAll.rejected, (state, action) => {
            //     state.error = action.payload
            //     state.loading = false
            // })
            // .addCase(getAll.pending, (state, action) => {
            //     state.loading = true
            // })
            // .addCase(getById.fulfilled, (state, action) => {
            //     state.userFromAPI = action.payload
            // })
}});

const {reducer: postReducer, actions: {getAllWithDispatch}} = postSlice;

const postActions = {
    getAll
}

export {
    postReducer,
    postActions
}