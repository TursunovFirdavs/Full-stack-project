import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { getArticleDetailsFailure, getArticleDetailsStart, getArticleDetailsSuccess } from "../slice/article"
import ArticleService from "../service/article"
import ArticleFrorm from "./article-form"

const EditArticle = () => {
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [body, setBody] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {slug} = useParams()

    const formSubmit = (e) => {

    }


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