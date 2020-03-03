import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import "./style.scss";

const Navbar = () => {
    const { t, i18n } = useTranslation();

    const handleclick = (lang) => {
        i18n.changeLanguage(lang)
    }

    const [menuOpened, setMenuOpened] = useState(false);
    const onCheckboxChange = (e) => {
        setMenuOpened(e.target.checked);
    };

    const onLinkClick = () => {
        setMenuOpened(false);
    };

    return (


        <div className="header">

            <div className="languages">
                <button onClick={() => handleclick('en')}>En</button>
                <button onClick={() => handleclick('ru')}>Ру</button>
                <button onClick={() => handleclick('am')}>Հա</button>
            </div>

            <input className="menu-btn" type="checkbox" id="menu-btn" checked={menuOpened} onChange={onCheckboxChange} />
            <label htmlFor="menu-btn" className="menu-icon"><span className="nav-icon"></span></label>

            <ul className="menu">
                <li className="navbar-link">
                    <Link onClick={onLinkClick} to={`/home`}>{t('navbar.1')}</Link>
                </li>
                <li className="navbar-link">
                    <Link onClick={onLinkClick} to={`/aboutus`}>{t('navbar.2')}</Link>
                </li>
                <li className="navbar-link">
                    <Link onClick={onLinkClick} to={`/services`}>{t('navbar.3')}</Link>
                </li>
                <li className="navbar-link">
                    <Link to={`/catalog/aksesuar`}>{t('navbar.4')} </Link>
                </li>
                <li className="navbar-link">
                    <Link onClick={onLinkClick} to={`/testimonials`}>{t('navbar.5')}</Link>
                </li>
            </ul>
        </div>

    )
}

export default Navbar;