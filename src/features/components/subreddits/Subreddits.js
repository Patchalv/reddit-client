import './subreddits.css';
import SingleSubreddit from "../singleSubreddit/SingleSubreddit";
import { fetchSubReddits, selectSubReddits } from '../../slices/subRedditSlice';
import { fetchActiveRedditPosts } from '../../slices/postSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Subreddits = () => {
    const dispatch = useDispatch();
    let fetchCount = 0;
    let postCount = 0;
    const { subReddits } = useSelector(selectSubReddits);

    // This useEffect dispatches the fetch function that API's the top 25 most popular subreddits ONE time
    useEffect(() => {
        if(fetchCount > 0) return 
        dispatch(fetchSubReddits())
        fetchCount++
    });

    useEffect(() => {
        if(postCount > 0) return
        dispatch(fetchActiveRedditPosts('home'))
        postCount++
    });


    return (
        <div className="subreddits-container">
            <section className="subreddits-section">
                <h2>SUBREDDITS</h2>
                {subReddits.map((each, index) => {
                    return <SingleSubreddit name={each.name} img={each.img} key={index} />
                })}
            </section>
        </div>
    )
}

export default Subreddits;