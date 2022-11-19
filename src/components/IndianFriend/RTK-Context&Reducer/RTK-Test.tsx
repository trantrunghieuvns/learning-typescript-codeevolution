import { useContext } from 'react'
import Loader from '../../../state/RTK Components/Loader'
import PostCard from '../../../state/RTK Components/PostCard'
import { UserContext } from '../../../state/useContext/secondExample/UserContext'
import { Posts } from '../../../Types'

// https://www.youtube.com/watch?v=kwIDtiWgOCc&t=308s try this to mix 2 hooks
type Loading = Posts & {
    loading: boolean
}

const ComponentA = (props: Loading) => {
    const userContextResult = useContext(UserContext)
    return (<>
        <h2>{userContextResult?.user?.name}</h2>

        <div className="row">

            {props.loading ? (
                <Loader />
            ) : (
                props.data &&
                props.data.map((post: Posts) => (
                    <div className="col-md-6 col-lg-4" key={post.id}>
                        <PostCard post={post} />
                    </div>
                ))
            )}
        </div>
    </>
    )
}

export default ComponentA