import './navBar.css';
import { FaReddit } from "react-icons/fa";
import SearchBar from '../searchBar/SearchBar';
import NavBarHamburger from '../navBarHamburger/NavBarHamburger';


const NavBar = () => {
    return (
        <header>
            <div className='navBar'>
                <NavBarHamburger />

                <div className='navBarLogo'>
                    <FaReddit className='navBarIcon' />
                    <p className='navBarTitle'>reddit clone</p>
                </div>

                <SearchBar />
            </div>
        </header>
    )
};

export default NavBar;