import { useCallback } from "react"
import { useSelector } from "react-redux"

const Validation = () => {
    const { error } = useSelector(state => state.auth)
    // console.log(error);

    const errorMessage = useCallback(() => {
        return Object.keys(error).map(name => {
            const msg = error[name].join(', ')
            return `${name} - ${msg}`
        })
    }, [error])
    // console.log(Object.keys(error));

    return (
        error !== null &&
        errorMessage().map(error => 
            <div key={error} className="alert alert-danger" role="alert">
                {error}
            </div>
        )
    )
}

export default Validation