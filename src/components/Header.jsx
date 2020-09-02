import React from 'react';
import { Link } from 'react-router-dom';
import cartShopIcon from '../assets/img/cartShop-icon.svg';
import '../assets/styles/components/Header.scss';
import Button from './Button';
import Search from './Search';

const Header = () => (
   <header className="header">
      <Link className='header__logo' to='/'>
        <img src="https://i.imgur.com/ImScGmQ.png" alt='Logo' />
      </Link>
      <Search />
      <div className="header__button">
        <Link className='header__button--CartShop' to='/cartShop'>
          <button><img src={cartShopIcon} alt='Cart Shop'/></button>
        </Link>
        <Button data="Iniciar Sesión"/>
      </div>
    </header>
);

export default Header;
