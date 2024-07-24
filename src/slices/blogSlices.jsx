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
        },
        removeBlog: (state, action) => {
            state.blogList = state.blogList.filter((blog) => blog.id != action.payload);
        },
        updateBlog: (state, action) => {
            state.blogList = state.blogList.map((blog) => {
                return blog.id === action.payload.id ? action.payload : blog;
            })
        },
        setSeletedTBlog: (state, action) => {
            state.selectedBlog = action.payload;
        }
    }
})


export const { addBlog, removeBlog, updateBlog, setSeletedTBlog } = blogSlice.actions;
export default blogSlice.reducer;