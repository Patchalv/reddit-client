import './posts.css';
import SinglePost from '../singlePost/SinglePost';
import { selectActiveRedditPosts } from '../../slices/postSlice';
import { useSelector } from 'react-redux';


const Posts = () => {
    const { filteredPosts } = useSelector(selectActiveRedditPosts)

    return (
        <div className='post-section'>
            
            {filteredPosts.map((post, index) => {
                return (
                    <SinglePost title={post.title} text={post.text} img={post.img} author={post.author} timeAgo={post.timeSince} comments={post.comments} upVotes={post.upVotes} downVotes={post.downVotes} key={index} />
                )
            })}
        </div>
    )
}

export default Posts;