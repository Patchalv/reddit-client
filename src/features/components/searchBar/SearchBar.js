import './searchBar.css';
import { FaSearch } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { filterFromSearch } from '../../slices/postSlice';



const SearchBar = () => {
    const dispatch = useDispatch();

    const filterPosts = (e) => {
        const data = e.target.value;
        dispatch(filterFromSearch(data))
    }

    return (
        <div className='searchBarContainer'>
            <input placeholder="Search" className='searchBar' onChange={filterPosts}></input>
            <FaSearch className='searchBarIcon' />
        </div>
    )
}

export default SearchBar;