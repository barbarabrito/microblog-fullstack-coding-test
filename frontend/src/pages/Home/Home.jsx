import { PostBox } from "../../components/PostBox/PostBox"
import { Posts } from "../../components/Posts/Posts"
import './Home.css'

export const Home = () => {
    return(
        <main className="container-main-home">
            <PostBox/>
            <Posts/>
        </main>
    )
}