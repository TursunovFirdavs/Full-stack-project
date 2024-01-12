import React, { useState } from 'react'
import { Input, TextArea } from '../ui'

const CreateArticle = () => {
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [body, setBody] = useState('')

    return (
        <div className='text-center'>
            <h1 className='fs-2'>Create article</h1>
            <div className="w-75 mx-auto">
                <form>
                    <Input label={'Title'} state={title} setstate={setTitle} />
                    <TextArea label={'Description'} state={desc} setState={setDesc} />
                    <TextArea label={'Body'} state={body} setState={setBody} height={'300px'} />
                    <button className="w-100 btn btn-lg btn-primary mt-3" type="submit">
                        Create 
                    </button>
                </form>
            </div>
        </div>
    )
}

export default CreateArticle