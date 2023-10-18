import './searchBar.css';
import { FaSearch } from "react-icons/fa";


const SearchBar = () => {
    return (
        <div className='searchBarContainer'>
            <input placeholder="Search" className='searchBar'>
            </input>
            <FaSearch className='searchBarIcon' />
        </div>
    )
}

export default SearchBar;