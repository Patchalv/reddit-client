import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const subRedditSlice = createSlice({
    name: 'allSubReddits',
    initialState: {
        subReddits: [{name: 'Home', img: 'self'}]
    },
    reducers: {
        pushSubReddit: (state, action) => {
            console.log(action.payload)
            state.subReddits.push(action.payload)
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchSubReddits.fulfilled, (state, action) => {
            // console.log(action.payload)
            const checkAgainst = []
            //^ Using forEach to get single push values for the subReddits state array
            action.payload.forEach(each => {
                //^ If the subReddit is already inside the state, skip it and add the next. Total ends with top 25 subReddits
                if(checkAgainst.some(one => one.name === each.name )) return
                checkAgainst.push(each)
                state.subReddits.push(each)
            })
        })
    }
})

export const pushSubReddit = subRedditSlice.actions;
export const selectSubReddits = (state) => state.allSubReddits
export default subRedditSlice.reducer

/* This is an ASYNC Thunk that fetches the active reddit posts and puts them into an array for mapping into the posts section on the page */ 

export const fetchSubReddits = createAsyncThunk('fetch/subReddits', async () => {
    const response = await fetch('https://www.reddit.com/r/popular.json')
    const jsonResponse = await response.json()
    const data = jsonResponse.data
    const dataList = data.children
    const names = dataList.map((reddit) => {
        return {
            name: reddit.data.subreddit,
            img: reddit.data.thumbnail
        }
    })
    return names
})