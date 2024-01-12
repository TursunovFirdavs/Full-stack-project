import React, { useState } from 'react'
import ArticleFrorm from './article-form'
import ArticleService from '../service/article'
import { useDispatch } from 'react-redux'
import { postArticleFailure, postArticleStart, postArticleSuccess } from '../slice/article'
import { useNavigate } from 'react-router-dom'

const CreateArticle = () => {
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [body, setBody] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const formSubmit = async (e) => {
        e.preventDefault()
        dispatch(postArticleStart())
        const article = {title, description: desc, body}
        try {
            const response = await ArticleService.postArticle(article)
            dispatch(postArticleSuccess())
            navigate('/')
        } catch (error) {
            console.log(error);
            dispatch(postArticleFailure())
        }
    }

    const formProps = {title, setTitle, desc, setDesc, body, setBody, formSubmit}

    return (
        <div className='text-center'>
            <h1 className='fs-2'>Create article</h1>
            <div className="w-75 mx-auto">
                <ArticleFrorm {...formProps}/>
            </div>
        </div>
    )
}

export default CreateArticle