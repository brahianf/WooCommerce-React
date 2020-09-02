import React from 'react';

import searchIcon from '../assets/img/search-icon.svg';

class Search extends React.Component {
    render (){
        return (
            <section className="header__search">
                <div  className="header__search--input">
                    <form><input type="search" name="" id="" placeholder="Buscar producto"/></form>
                </div>
                <img  src={searchIcon} alt="Search Product"/>
            </section>
        );
    }
};

export default Search;

