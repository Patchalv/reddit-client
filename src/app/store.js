import { configureStore } from "@reduxjs/toolkit";
import activeRedditPostsReducer from '../features/slices/postSlice';
import subRedditsReducer from '../features/slices/subRedditSlice';

export const store = configureStore({
    reducer: {
        allSubReddits: subRedditsReducer,
        activeRedditPosts: activeRedditPostsReducer
    },
});