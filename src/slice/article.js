import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    isLoading: false,
    articles: [],
    error: ''
}

export const ArticleSlice = createSlice({
    name: 'article',
    initialState,
    reducers: {
        getArticleStart: state => {
            state.isLoading = true
        },
        getArticleSuccess: (state, action) => {
            state.isLoading = false
            state.articles = action.payload
        },
        getArticleFailure: state => {
            state.error = 'error in article'
        }
    }
})

// console.log(ArticleSlice);
export const {getArticleStart, getArticleSuccess, getArticleFailure} = ArticleSlice.actions
export default ArticleSlice.reducer