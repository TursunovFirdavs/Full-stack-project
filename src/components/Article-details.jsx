import { useEffect } from "react";
import { useParams } from "react-router-dom"
import ArticleService from "../service/article";
import { useDispatch, useSelector } from "react-redux";
import { getArticleDetailsFailure, getArticleDetailsSuccess } from "../slice/article";
import moment from "moment";
import { Loader } from "../ui";

const Article = () => {
  const {slug} = useParams()
  // console.log(slug);
  const dispatch = useDispatch()
  const { articleDetails, isLoading } = useSelector(state => state.article)

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

  return isLoading? (<Loader/>) : articleDetails !== null && (
    <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">{articleDetails.title}</h1>
        <p className="col-md-8 fs-4">{articleDetails.description}</p>
        <div>
          <p className="text-muted">
            <span className="fw-bold">Create at: </span> {moment(articleDetails.createdAt).format('DD MMM, YYYY')}
          </p>
        </div>
        <div className="col-md-6 row g-0 border d-flex justify-content-between overflow-hidden flex-md-row mb-4 shadow-sm">
        <div className="col-md-6 p-4 d-flex flex-column position-static">
          <strong className="d-inline-block mb-2 text-primary">{articleDetails.author.username}</strong>
          <p className="card-text mb-auto">{articleDetails.slug}</p>
        </div>
        <div className="col-auto d-none d-lg-block">
          <svg className="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

        </div>
      </div>
        <div>{articleDetails.body}</div>
      </div>
  )
}

export default Article