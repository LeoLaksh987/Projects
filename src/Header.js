import React from'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';



function Header(){
    return(
        <div className='header'>

            {/* Left Part of Header */}
            <div className='header__left'>
                <img src={require("./ldin.png")} alt='L' />

                <div className='header__search'>
                    <SearchIcon />
                    <input type='text' />
                </div>

            </div>

            {/* Right Part of Header */}
            <div className='header__right'>
                
            </div>
        </div>
    );
}

export default Header;