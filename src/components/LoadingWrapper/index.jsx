import './LoadingWrapper.css'



export const LoadinWrapper = (props) => {
    return (
        <>
            {props.isLoading
                    ? (<div className='mySpinner'/>)
                    : props.children
            }
        </>
    )
}