import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    blogList: [],
    selectedBlog: {}
}

const blogSlice = createSlice({
    name: 'blogSlice',
    initialState,
    reducers: {
        addBlog: (state, action) => {
            const id = Math.random() * 100;
            let blog = { ...action.payload, id };
            state.blogList.push(blog);
        }
    }
})


export const { addBlog } = blogSlice.actions;
export default blogSlice.reducer;