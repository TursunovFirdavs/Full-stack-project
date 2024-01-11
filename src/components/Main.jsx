import React from 'react'
import { useSelector } from 'react-redux'
import { Loader } from '../ui';


const Main = () => {
  const { articles, isLoading } = useSelector(state => state.article)
  console.log(articles);
  return (
    <div className='container'>
      {
        isLoading && <Loader/>
      }
      <div className="album py-5">
        <div className="container">

          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {
              articles.map(artc =>
                <div className="col" key={artc.title}>
                  <div className="card shadow-sm">
                    <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em"></text></svg>

                    <div className="card-body">
                      <p title={artc.title} className="card-text">{artc.title.length < 40 ? artc.title : artc.title.slice(0, 40) + '...' }</p>
                      <p title={artc.description} className="card-text">{artc.description.length < 80 ? artc.description : artc.description.slice(0, 80) + '...' }</p>
                    </div>
                    <div className="card-footer d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <button type="button" className="btn btn-sm btn-outline-success">View</button>
                          <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                          <button type="button" className="btn btn-sm btn-outline-danger">delete</button>
                        </div>
                        <small className="text-muted">{artc.author.username}</small>
                      </div>
                  </div>
                </div>
              )
            }

          </div>
        </div>
      </div>
    </div>
  )
}

export default Main