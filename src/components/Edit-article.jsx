import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { getArticleDetailsFailure, getArticleDetailsStart, getArticleDetailsSuccess, postArticleFailure, postArticleStart, postArticleSuccess } from "../slice/article"
import ArticleService from "../service/article"
import ArticleFrorm from "./article-form"

const EditArticle = () => {
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [body, setBody] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {slug} = useParams()

    useEffect(() => {
        const getArticleDetails = async () => {
            dispatch(getArticleDetailsStart())
          try {
            const response = await ArticleService.getArticleDetails(slug)
            dispatch(getArticleDetailsSuccess(response.article))
            setTitle(response.article.title)
            setDesc(response.article.description)
            setBody(response.article.body)
          } catch (error) {
            dispatch(getArticleDetailsFailure())
          }
        }
        getArticleDetails()
      }, [slug])

      const formSubmit = async (e) => {
        e.preventDefault()
        dispatch(postArticleStart())
        const article = {title, description: desc, body}
        try {
            const response = await ArticleService.editArticle(slug, article)
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
            <h1 className='fs-2'>Edit article</h1>
            <div className="w-75 mx-auto">
                <ArticleFrorm {...formProps} />
            </div>
        </div>
    )
}

export default EditArticle