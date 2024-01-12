import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    isLoading: false,
    articles: [],
    articleDetails: null,
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
            state.isLoading = false
            state.error = 'error in article'
        },
        getArticleDetailsStart: state => {
            state.isLoading = true
        },
        getArticleDetailsSuccess: (state, action) => {
            state.isLoading = false
            state.articleDetails = action.payload
        },
        getArticleDetailsFailure: state => {
            state.isLoading = false
        },
        postArticleStart: state => {
            state.isLoading = true
        },
        postArticleSuccess: state => {
            state.isLoading = false
        },
        postArticleFailure: state => {
            state.isLoading = false
        }
    }
})

// console.log(ArticleSlice);
export const {
    getArticleStart,
    getArticleSuccess, 
    getArticleFailure, 
    getArticleDetailsFailure, 
    getArticleDetailsStart, 
    getArticleDetailsSuccess,
    postArticleStart,
    postArticleSuccess,
    postArticleFailure
} = ArticleSlice.actions

export default ArticleSlice.reducer