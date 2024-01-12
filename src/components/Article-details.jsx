import { useEffect } from "react";
import { useParams } from "react-router-dom"
import ArticleService from "../service/article";
import { useDispatch } from "react-redux";
import { getArticleDetailsFailure, getArticleDetailsSuccess } from "../slice/article";

const Article = () => {
  const {slug} = useParams()
  // console.log(slug);
  const dispatch = useDispatch(state => state.article)

  useEffect(() => {
    const getArticleDetails = async () => {
      try {
        const response = await ArticleService.getArticleDetails(slug)
        dispatch(getArticleDetailsSuccess(response.article))
      } catch (error) {
        dispatch(getArticleDetailsFailure())
      }
    }
    getArticleDetails()
  }, [slug])

  return (
    <div>Article-details</div>
  )
}

export default Article