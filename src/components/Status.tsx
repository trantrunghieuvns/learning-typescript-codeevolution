type StatusProps = {
    status: 'loading' | 'success' | 'error'
}

export const Status = (props: StatusProps) => {
    let message
    // eslint-disable-next-line no-lone-blocks, @typescript-eslint/no-unused-expressions
    props.status === 'loading' ? message = 'loading...'
        : props.status === 'success' ? message = 'data fetched successfully'
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            : props.status === 'error' ? message = 'error fetching data'
                : null;


    return (
        <div>

            <h2>Status - {message}</h2>
            {/* <h2>Loading ...</h2>
            <h2>Data fetched successfully!</h2>
            <h2>Error fetching data</h2> */}
        </div>
    )
}