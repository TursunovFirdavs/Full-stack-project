import React from 'react'
import { Input, TextArea } from '../ui'
import { useSelector } from 'react-redux'


const ArticleFrorm = ({title, setTitle, desc, setDesc, body, setBody, formSubmit}) => {
    const {isLoading} = useSelector(state => state.article)
    return (
        <form onSubmit={formSubmit}>
            <Input label={'Title'} state={title} setState={setTitle} />
            <TextArea label={'Description'} state={desc} setState={setDesc} />
            <TextArea label={'Body'} state={body} setState={setBody} height={'300px'} />
            <button className="w-100 btn btn-lg btn-primary mt-3" disabled={isLoading} type="submit">
                {isLoading ? 'Loading' : 'Create'}
            </button>
        </form>)
}

export default ArticleFrorm